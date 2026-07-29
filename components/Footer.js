import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/assets/logo.jpeg"
              alt="thilakxdeals"
              className="footer-logo-img"
            />
            <div>
              <span className="footer-name">thilakxdeals</span>
              <span className="footer-tag">Bihar's Most Trusted Agency</span>
            </div>
          </div>
          <div className="footer-links">
           
            <a
              href="https://whatsapp.com/channel/0029VbC7F4j4dTnEvTrn8c42/1126"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Channel
            </a>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <p className="footer-legal">
            <strong>Disclaimer:</strong> thilakxdeals is an independent escrow facilitator. Not associated with Garena Free Fire.
          </p>
          <div className="footer-meta">
            <span>© 2026 thilakxdeals</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
