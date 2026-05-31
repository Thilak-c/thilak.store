"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Copy } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSearchModal from "../components/CustomSearchModal";

function StatCounter({ target, label, suffix, className }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className={className || "stat"}>
      <div>
        <span className="stat-num">{count.toLocaleString()}</span>
        <span className="stat-plus">{suffix}</span>
      </div>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const [toasts, setToasts] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Scroll reveal animation observer
    const fadeEls = document.querySelectorAll(".fade-in");
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      fadeEls.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    } else {
      fadeEls.forEach((el) => el.classList.add("visible"));
    }
  }, []);

  const showToast = (msg, ok = true) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, ok, out: false }]);
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, out: true } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, 3000);
  };

  return (
    <>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* TOAST SYSTEM */}
      <div className="toast-box" id="toastBox">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.out ? "out" : ""}`}>
            {t.ok ? (
              <CheckCircle style={{ width: 14, height: 14 }} />
            ) : (
              <Copy style={{ width: 14, height: 14 }} />
            )}
            <span>{t.msg}</span>
          </div>
        ))}
      </div>

      <CustomSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        showToast={showToast}
      />

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-bg">
            <img
              src="/assets/dragon_samurai.png"
              alt=""
              className="hero-bg-img"
            />
            <div className="hero-bg-overlay"></div>
          </div>

          <div className="hero-inner">
            {/* Logo Showcase at the top */}
            <div className="hero-right anim-up" style={{ "--d": 0 }}>
              <div className="hero-logo-showcase">
                <img
                  src="/assets/logo.jpeg"
                  alt="thilak.store logo large"
                  className="hero-logo-img"
                />
              </div>
            </div>

            {/* Badges, title, description */}
            <div className="hero-left anim-up" style={{ "--d": 2 }}>
              <div className="text-4xl font-bold text-black mb-5">Thilak.store</div>
              <h1 className="hero-h1">
                {" "}
                <span className="words-wrapper">
                  <span className="word-scroller">
                    <span>Securely!</span>
                    <span>Safely!</span>
                    <span>Buy!</span>
                    <span>Sell!</span>
                    <span>Fast!</span>
                  </span>
                </span>
              </h1>
           
              <div className="hero-btns">
                <a href="https://wa.me/918102098935" target="_blank" rel="noopener noreferrer" className="btn-outline-w">
                  <img src="/whatsapp.svg" width={24} height={24} className="w-6 h-6 rounded-full" alt="WhatsApp" /> Talk with us
                </a>
              </div>
            </div>

            {/* STATS BAR */}
            <div className="anim-up relative z-10 w-[95%] max-w-[1140px] mx-auto grid grid-cols-1 md:flex md:items-center md:justify-center gap-4 md:gap-12 p-5 md:py-6 md:px-10 bg-white/80 mt-10" style={{ "--d": 4 }}>
              <StatCounter
                target={101}
                label="Deals Done"
                suffix="+"
                className="stat flex flex-col items-center justify-center p-4 md:p-0 rounded-xl md:rounded-none transition-all duration-300 hover:border-[#0284c7]/20 hover:shadow-[0_4px_15px_rgba(2,132,199,0.06)] hover:bg-[#0284c7]/5 hover:-translate-y-0.5 md:border-r md:border-black/5 md:pr-12"
              />
            
              <StatCounter
                target={24}
                label="Support"
                suffix="/7"
                className="stat flex flex-col items-center justify-center p-4 md:p-0 rounded-xl md:rounded-none transition-all duration-300 hover:border-[#0284c7]/20 hover:shadow-[0_4px_15px_rgba(2,132,199,0.06)] hover:bg-[#0284c7]/5 hover:-translate-y-0.5 md:border-r md:border-black/5 md:pr-12"
              />
              <div className="stat flex flex-col items-center justify-center p-4 md:p-0 border-none rounded-xl md:rounded-none transition-all duration-300 hover:border-[#0284c7]/20 hover:shadow-[0_4px_15px_rgba(2,132,199,0.06)] hover:bg-[#0284c7]/5 hover:-translate-y-0.5">
                <div>
                  <span className="stat-num">Patna, Bihar</span>
                </div>
                <span className="stat-label">Offline Meetups</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
