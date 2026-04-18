import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import styles from "./QrScanner.module.css";

function QrScanner({ onScan, onClose }) {
  const scannerRef = useRef(null);
  const hasScannedRef = useRef(false);
  const qrRegionId = "qr-reader";

  useEffect(() => {
    const scanner = new Html5Qrcode(qrRegionId);
    scannerRef.current = scanner;
    hasScannedRef.current = false;

    const startScanner = async () => {
      try {
        await scanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText) => {
            if (hasScannedRef.current) {
              return;
            }

            hasScannedRef.current = true;

            scanner
              .stop()
              .then(() => {
                scanner.clear();
                onScan(decodedText);
              })
              .catch(() => {
                onScan(decodedText);
              });
          },
          () => { }
        );
      } catch (err) {
        console.error("Camera error:", err);
        alert("Could not open camera.");
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current
          .stop()
          .then(() => scannerRef.current.clear())
          .catch(() => { });
      }
    };
  }, [onScan]);

  return (
    <div className={styles.overlay}>
      <div className={styles.scannerBox}>
        <div id={qrRegionId} className={styles.reader}></div>

        <button className={styles.closeButton} onClick={onClose}>
          <span className={styles.closeText}>CLOSE</span>
        </button>
      </div>
    </div>
  );
}

export default QrScanner;