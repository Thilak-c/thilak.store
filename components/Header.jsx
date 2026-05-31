"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Header({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const openState = !menuOpen;
    setMenuOpen(openState);
    if (openState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`nav-header ${scrolled || menuOpen ? "scrolled" : ""}`} id="navHeader">
      <nav className="nav-bar">
        <Link href="/" className="nav-brand">
          <img
            src="/assets/logo.jpeg"
            alt="thilak.store logo"
            className="nav-logo-img"
          />
          <span className="nav-brand-name">Thilak.store</span>
        </Link>
        <div className="nav-end">
          <a
            href="https://instagram.com/thilak.store"
            target="_blank"
            rel="noopener noreferrer"
           
            >
        <img src="/instagram.svg"  className="w-5 h-5" height={25} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
}
