import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import styles from "./QrScanner.module.css";

function QrScanner({ onScan, onClose }) {
  const scannerRef = useRef(null);
  const qrRegionId = "qr-reader";

  useEffect(() => {
    const scanner = new Html5Qrcode(qrRegionId);
    scannerRef.current = scanner;

    const startScanner = async () => {
      try {
        await scanner.start(
          { facingMode: "environment" }, // back camera
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText) => {
            handleScan(decodedText);
          },
          () => {}
        );
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    startScanner();

    return () => {
      scanner
        .stop()
        .then(() => scanner.clear())
        .catch(() => {});
    };
  }, []);

  const handleScan = (decodedText) => {
    if (!scannerRef.current) return;

    scannerRef.current
      .stop()
      .then(() => {
        onScan(decodedText);
      })
      .catch(() => {
        onScan(decodedText);
      });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.scannerBox}>
        <div id={qrRegionId} className={styles.reader}></div>

        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default QrScanner;