import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/assets/logo.jpeg"
              alt="thilak.store"
              className="footer-logo-img"
            />
            <div>
              <span className="footer-name">thilak.store</span>
              <span className="footer-tag">Bihar's Most Trusted Agency</span>
            </div>
          </div>
          <div className="footer-links">
           
            <a
              href="https://whatsapp.com/channel/0029Vb7mj918qIzzuWZLDc3T"
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
            <strong>Disclaimer:</strong> thilak.store is an independent escrow facilitator. Not associated with Garena Free Fire.
          </p>
          <div className="footer-meta">
            <span>© 2026 thilak.store</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
