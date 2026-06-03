"use client";

import { useState, useEffect } from "react";
import { 
  CheckCircle, 
  Copy, 
  ShieldCheck, 
  TrendingUp, 
  MessageCircle, 
  ChevronRight, 
  Calendar, 
  ChevronDown, 
  UserCheck, 
  MapPin, 
  Award, 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  Lock, 
  ShieldAlert,
  Building
} from "lucide-react";

const Instagram = (props) => (
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
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSearchModal from "../components/CustomSearchModal";
import { getWhatsAppLink } from "../data/products";

const createInstagramEmbed = (postId) => `
  <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
    <div style="padding:16px;">
      <a href="https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
        <div style="display: flex; flex-direction: row; align-items: center;">
          <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
          <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
            <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
            <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
          </div>
        </div>
        <div style="padding: 19% 0;"></div>
        <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
          <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                <g>
                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div style="padding-top: 8px;">
          <div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div>
        </div>
        <div style="padding: 12.5% 0;"></div>
        <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
          <div>
            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
            <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
          </div>
          <div style="margin-left: 8px;">
            <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
            <div style="width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
          </div>
          <div style="margin-left: auto;">
            <div style="width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
            <div style="background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
            <div style="width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
          <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
          <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
        </div>
      </a>
      <p style="color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
        <a href="https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading" style="color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Randhir Kumar (@thilak.store)</a>
      </p>
    </div>
  </blockquote>
`;

const INSTAGRAM_POST_IDS = [
  "DZHxkwgkl6O",
  "DZEqVwTkrR_",
  "DY4NP5CEnML",
  "DY1RPG0ElUo",
  "DZHWRCaEies",
  "DZEo5DWkiaI",
  "DZDKX6KEoiM",
  "DZA5ucFEicb",
  "DZAGuJ4kilm",
  "DY_sTTGkljf",
  "DY9GxrcEu-k",
  "DY6qRBZEjBT"
];

const INSTAGRAM_EMBEDS = INSTAGRAM_POST_IDS.map(createInstagramEmbed);


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
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const scriptId = "instagram-embed-script";
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
      } else {
        const interval = setInterval(() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
            clearInterval(interval);
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 5000);
      }
    }
  }, []);


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

  // Products listing removed as we display real Instagram embeds directly

  const testimonials = [
    {
      name: "Rahul Kumar",
      loc: "Boring Road, Patna",
      badge: "Cobra MP40 Owner",
      text: "Was extremely scared of getting scammed since my account had Cobra MP40 Max. The escrow agent from thilak.store locked credentials securely and transferred cash in 15 mins. Highly recommended!",
      stars: 5,
      item: "Cobra MP40 Max"
    },
    {
      name: "Aman Sinha",
      loc: "Muzaffarpur, Bihar",
      badge: "Sakura S1 Buyer",
      text: "Sold my Season 1 Sakura account through thilak.store. The appraisal process was completely fair and fast. Met the representative offline near Boring Road Crossing for the cash deal.",
      stars: 5,
      item: "OG Sakura Bundle"
    },
    {
      name: "Priyanshu Ranjan",
      loc: "Gaya, Bihar",
      badge: "Evo Gun Collector",
      text: "Easiest way to buy gaming IDs. Their WhatsApp support is super fast, they guide you through link verification and 2FA setups. Zero hassles and safe handover.",
      stars: 5,
      item: "5 Maxed Evos Account"
    }
  ];

  const faqs = [
    {
      q: "How does the thilak.store escrow protection work?",
      a: "Once buyer and seller agree on a deal, the buyer pays the escrow deposit. We secure the account credentials, verify all items (Evo skins, passes), and link the buyer's security phone number and email. Payment is released to the seller only after handover is completed."
    },
    {
      q: "Can I meet the agent in Patna for an offline deal?",
      a: "Yes, absolutely! For high-value transactions, you can schedule an offline meetup at our Boring Road location. One of our verified escrow officers will conduct the credential lock and payment handover in person."
    },
    {
      q: "What happens if the seller attempts account recovery?",
      a: "To prevent recovery, we collect legal identity proofs (Aadhaar/PAN) from the seller and ensure all recovery settings (2FA, recovery emails, secondary numbers) are completely migrated. Sellers who attempt fraud face permanent blacklisting and legal proceedings."
    },
    {
      q: "How long does the online delivery take?",
      a: "Online handovers are typically completed within 15 to 30 minutes. This includes verification checks, locking codes, migrating phone numbers, and securing 2FA settings."
    }
  ];

  const handleTestimonialNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTestimonialPrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* TOAST SYSTEM */}
      <div className="toast-box" id="toastBox">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.out ? "out" : ""}`}>
            {t.ok ? (
              <CheckCircle style={{ width: 14, height: 14, color: "#25d366" }} />
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
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Bihar's #1 Trusted Gaming Agency
              </div>
              
              <h1 className="hero-h1">
                Buy & Sell Free Fire IDs{" "}
                <span className="words-wrapper">
                  <span className="word-scroller">
                    <span>Securely!</span>
                    <span>Safely!</span>
                    <span>with Trust!</span>
                    <span>Value!</span>
                    <span>Fast!</span>
                  </span>
                </span>
              </h1>

              <p className="hero-p">
                Bihar's most reliable gaming escrow marketplace. Buy premium Free Fire accounts 
                with 100% verified protection or meet our representative in Boring Road, Patna, for offline deals.
              </p>
           
              <div className="hero-btns">
                <a href="#store" className="btn-main">
                  Explore Store
                </a>
                <a href="https://wa.me/918102098935" target="_blank" rel="noopener noreferrer" className="btn-outline-w">
                  <img src="/whatsapp.svg" width={20} height={20} className="rounded-full inline-block mr-1" alt="WhatsApp" /> Talk with Agent
                </a>
              </div>
            </div>

            {/* STATS BAR */}
            <div className="anim-up relative z-10 w-[95%] max-w-[1140px] mx-auto grid grid-cols-1 md:flex md:items-center md:justify-center gap-4 md:gap-12 p-5 md:py-6 md:px-10 bg-white/80 mt-10 rounded-2xl shadow-sm border border-black/5" style={{ "--d": 4 }}>
              <StatCounter
                target={200}
                label="Verified Trades"
                suffix="+"
                className="stat flex flex-col items-center justify-center p-4 md:p-0 rounded-xl md:rounded-none transition-all duration-300 hover:bg-[#0284c7]/5 hover:-translate-y-0.5 md:border-r md:border-black/5 md:pr-12"
              />
              <StatCounter
                target={24}
                label="Active Support"
                suffix="/7"
                className="stat flex flex-col items-center justify-center p-4 md:p-0 rounded-xl md:rounded-none transition-all duration-300 hover:bg-[#0284c7]/5 hover:-translate-y-0.5 md:border-r md:border-black/5 md:pr-12"
              />
              <div className="stat flex flex-col items-center justify-center p-4 md:p-0 border-none rounded-xl md:rounded-none transition-all duration-300 hover:bg-[#0284c7]/5 hover:-translate-y-0.5">
                <div>
                  <span className="stat-num">Boring Road</span>
                </div>
                <span className="stat-label">Patna Meetups</span>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE TRUST TICKER */}
        <div className="marquee">
          <div className="marquee-track">
            <div className="marquee-items">
              <span>★ Bihar's #1 Trusted FF Marketplace</span>
              <span>★ 100% Escrow Protection</span>
              <span>★ Patna Boring Road Office</span>
              <span>★ Live Account Inspection</span>
              <span>★ Zero Scam Escrow Guarantee</span>
              <span>★ Verified Aadhaar/PAN Traders</span>
              <span>★ Fast 15-Min Delivery</span>
            </div>
            <div className="marquee-items" aria-hidden="true">
              <span>★ Bihar's #1 Trusted FF Marketplace</span>
              <span>★ 100% Escrow Protection</span>
              <span>★ Patna Boring Road Office</span>
              <span>★ Live Account Inspection</span>
              <span>★ Zero Scam Escrow Guarantee</span>
              <span>★ Verified Aadhaar/PAN Traders</span>
              <span>★ Fast 15-Min Delivery</span>
            </div>
          </div>
        </div>

        {/* STORE SECTION */}
        <section className="sec" id="store">
          <div className="wrap">
            <div className="sec-head fade-in">
              <div className="sec-label">
                <span className="label-line"></span>
                Deal Proofs
              </div>
              <h2 className="sec-title">Recent Transactions</h2>
              <p className="sec-sub">Real transaction proofs directly from our Instagram feed. We display these posts to verify 100% security, trust, and successful handovers.</p>
            </div>

            {/* Instagram Grid */}
            <div className="grid fade-in instagram-grid">
              {INSTAGRAM_EMBEDS.map((embedHtml, idx) => (
                <div 
                  key={idx} 
                  dangerouslySetInnerHTML={{ __html: embedHtml }}
                  className="instagram-card-wrapper"
                />
              ))}
            </div>
          </div>
        </section>

        {/* TRUST & GROWTH LEDGER (Why We are the Best) */}
        <section className="sec sec-alt" id="about">
          <div className="wrap">
            <div className="sec-head fade-in">
              <div className="sec-label">
                <span className="label-line"></span>
                Trust Ledger
              </div>
              <h2 className="sec-title">Patna's Fastest-Growing Agency</h2>
              <p className="sec-sub">We trade trust and security. Discover why 200+ players across Bihar bought and sold with us.</p>
            </div>

            <div className="trust-ledger fade-in">
              {/* Trust Metric Row */}
              <div className="trust-metrics-row">
                <div className="trust-metric-card">
                  <div className="trust-metric-icon-wrapper">
                    <Award style={{ width: 28, height: 28 }} />
                  </div>
                  <div className="trust-metric-num">100%</div>
                  <div className="trust-metric-label">Safe Escrow rate</div>
                </div>
                <div className="trust-metric-card">
                  <div className="trust-metric-icon-wrapper">
                    <ShieldCheck style={{ width: 28, height: 28 }} />
                  </div>
                  <div className="trust-metric-num">200+</div>
                  <div className="trust-metric-label">Completed Handovers</div>
                </div>
                <div className="trust-metric-card">
                  <div className="trust-metric-icon-wrapper">
                    <TrendingUp style={{ width: 28, height: 28 }} />
                  </div>
                  <div className="trust-metric-num">#1 Rated</div>
                  <div className="trust-metric-label">Free Fire Marketplace</div>
                </div>
              </div>

              {/* Escrow Progress flow visualization */}
              <div className="escrow-flow-container">
                <h3 className="escrow-flow-title">How Our 3-Step Secure Escrow Works</h3>
                <div className="escrow-steps">
                  <div className="escrow-step active">
                    <div className="escrow-step-num">01</div>
                    <h4>Agreement & Escrow Lock</h4>
                    <p>Buyer pays deposit. We collect and lock the seller's account credentials and verification IDs securely.</p>
                  </div>
                  <div className="escrow-step active">
                    <div className="escrow-step-num">02</div>
                    <h4>Verification check</h4>
                    <p>Our agent inspects skins, badges, and level. We migrate the link numbers and recovery details to the buyer.</p>
                  </div>
                  <div className="escrow-step">
                    <div className="escrow-step-num">03</div>
                    <h4>Instant payout</h4>
                    <p>Buyer gets the active gaming account. Payment is instantly released to the seller via online escrow or cash.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PATNA OFFLINE DEALS */}
        <section className="sec" id="meetups">
          <div className="wrap">
            <div className="sec-head fade-in">
              <div className="sec-label">
                <span className="label-line"></span>
                Patna Boring Road Handovers
              </div>
              <h2 className="sec-title">Offline Face-to-Face Deals</h2>
              <p className="sec-sub">Trade high-value IDs face-to-face in Patna. Real people, physical checks, total peace of mind.</p>
            </div>

            <div className="meetup-container fade-in">
              {/* Meetup step cards */}
              <div className="meetup-steps">

                <div className="meetup-step-card">
                  <div className="meetup-step-icon">
                    <MapPin style={{ width: 20, height: 20 }} />
                  </div>
                  <div className="meetup-step-info">
                    <h4>Patna Main City Meetups</h4>
                    <p>We meet anywhere in Patna main city—cafes, malls, or public landmarks of your choice to finalize the transaction securely.</p>
                  </div>
                </div>

                <div className="meetup-step-card">
                  <div className="meetup-step-icon">
                    <UserCheck style={{ width: 20, height: 20 }} />
                  </div>
                  <div className="meetup-step-info">
                    <h4>Face-to-Face Escrow Handoff</h4>
                    <p>Our representative updates credentials, transfers recovery contacts, and completes cash/UPI handover in person.</p>
                  </div>
                </div>
              </div>

              {/* Offline Escrow Info Card */}
              <div className="scheduler-card justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Future Security Guarantee</h3>
                  <p className="text-sm leading-relaxed mb-4 text-gray-500">
                    Verify everything in real-time. Face-to-face deals in Patna main city allow physical inspection of level, skins, badges, and account binding with zero recovery risk.
                  </p>
                  <ul className="space-y-3 mb-6" style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span>Instant cash or UPI payout on-site</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span>Migration of 2FA phone & recovery emails</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span>Identity validation to guarantee zero recovery risk</span>
                    </li>
                  </ul>
                </div>
                <a
                  href={getWhatsAppLink("Hi Thilak Store, I want to schedule a face-to-face deal in Patna.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-main text-center justify-center w-full"
                >
                  Schedule Meetup via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL CONNECTION HUB */}
        <section className="sec sec-alt" id="connect">
          <div className="wrap">
            <div className="sec-head fade-in">
              <div className="sec-label">
                <span className="label-line"></span>
                Community Hub
              </div>
              <h2 className="sec-title">Join Thilak Store Networks</h2>
              <p className="sec-sub">Get direct access to our agents, exclusive account catalogs, and community activities.</p>
            </div>

            <div className="connection-grid fade-in">
              {/* WhatsApp Support card */}
              <div className="connect-card connect-card-wa">
                <span className="connect-status connect-status-live">
                  <span className="badge-dot" style={{ background: "#25d366", boxShadow: "0 0 8px #25d366" }}></span> Live Support
                </span>
                <div className="connect-icon-box" style={{ color: "#25d366" }}>
                  <MessageCircle style={{ width: 24, height: 24 }} />
                </div>
                <h3>WhatsApp support</h3>
                <p>Chat directly with our Patna-based escrow agents to sell your ID, clear doubts, or complete handovers.</p>
                <div className="connect-metric">Avg. response: &lt; 5 mins</div>
                <a 
                  href="https://wa.me/918102098935"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline-dark mt-4 text-center justify-center btn-wa"
                  style={{ width: "100%", fontSize: "0.82rem" }}
                >
                  Start Chat
                </a>
              </div>

              {/* WhatsApp Channel card */}
              <div className="connect-card connect-card-chan">
                <span className="connect-status connect-status-update">
                  <span className="badge-dot" style={{ background: "#0284c7", boxShadow: "0 0 8px #0284c7" }}></span> Drops Active
                </span>
                <div className="connect-icon-box" style={{ color: "#0284c7" }}>
                  <TrendingUp style={{ width: 24, height: 24 }} />
                </div>
                <h3>WhatsApp channel</h3>
                <p>Join Bihar's top gaming feed. We post daily account drops, budget deals, and event announcements.</p>
                <div className="connect-metric">600+ Active Members</div>
                <a 
                  href="https://whatsapp.com/channel/0029Vb7mj918qIzzuWZLDc3T"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline-dark mt-4 text-center justify-center btn-chan"
                  style={{ width: "100%", fontSize: "0.82rem" }}
                >
                  Join Channel
                </a>
              </div>

              {/* Instagram Page card */}
              <div className="connect-card connect-card-ig">
                <span className="connect-status" style={{ background: "rgba(225,48,108,0.08)", color: "#e1306c", border: "1px solid rgba(225,48,108,0.15)" }}>
                  <span className="badge-dot" style={{ background: "#e1306c", boxShadow: "0 0 8px #e1306c" }}></span> Giveaways Active
                </span>
                <div className="connect-icon-box" style={{ color: "#e1306c" }}>
                  <Instagram style={{ width: 24, height: 24 }} />
                </div>
                <h3>Instagram profile</h3>
                <p>Follow us on Instagram for gaming clips, customer success stories, and weekly character code giveaways.</p>
                <div className="connect-metric">12 Deal Proofs Loaded</div>
                <a 
                  href="https://instagram.com/thilak.store"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline-dark mt-4 text-center justify-center btn-ig"
                  style={{ width: "100%", fontSize: "0.82rem" }}
                >
                  Follow Page
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS SECTION */}
        <section className="sec" id="events">
          <div className="wrap">
            <div className="sec-head fade-in">
              <div className="sec-label">
                <span className="label-line"></span>
                Events & Tournaments
              </div>
              <h2 className="sec-title">Upcoming Tournaments</h2>
              <p className="sec-sub">Prepare your squad. Bihar's biggest Free Fire showdowns are coming soon.</p>
            </div>

            <div className="fade-in" style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div className="scheduler-card p-8 text-center flex flex-col items-center gap-6 relative overflow-hidden" style={{ borderStyle: "dashed" }}>
                {/* Glowing neon overlay */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-sky-400 via-indigo-500 to-pink-500"></div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-500 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                  Coming Soon
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Thilak Store Cup: Bihar Championship</h3>
                <p className="text-gray-500 max-w-[580px] text-sm md:text-base leading-relaxed">
                  We are launching a professional, community-wide Free Fire tournament. Form your squads, practice in custom lobbies, and get ready to battle for massive cash prizes with live-streamed matches and offline finals in Patna.
                </p>
                <div className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-[500px] py-4 border-y border-black/5 my-2">
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-extrabold">TBA</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Prize Pool</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-extrabold">Patna</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Offline Finals</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl md:text-2xl font-extrabold">TBA</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Entry Fee</span>
                  </div>
                </div>
                {/* <a
                  href={getWhatsAppLink("Hi Thilak Store, notify me when the Bihar Free Fire Cup registrations open.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-main px-8 mt-2"
                >
                  Get Notified on WhatsApp
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS CAROUSEL */}
        <section className="sec sec-alt" id="reviews">
          <div className="wrap testimonial-section">
            <div className="sec-head fade-in">
              <div className="sec-label">
                <span className="label-line"></span>
                Testimonials
              </div>
              <h2 className="sec-title">Verified Trades</h2>
              <p className="sec-sub">Read direct transaction reviews. View all 40+ real client reviews directly on our Instagram Stories highlight.</p>
            </div>

            <div className="slider-container fade-in">
              <div className="slider-track-wrapper">
                {/* Responsive Testimonial slide container */}
                <div className="slider-track" style={{ transform: `translateX(-${testimonialIndex * 100}%)`, gap: "0px" }}>
                  {testimonials.map((t, idx) => (
                    <div 
                      key={idx} 
                      className="w-full shrink-0 px-2"
                      style={{ width: "100%" }}
                    >
                      <div className="t-card" style={{ maxWidth: "700px", margin: "0 auto" }}>
                        <div>
                          <div className="t-badge">{t.badge}</div>
                          <div className="t-stars">
                            {[...Array(t.stars)].map((_, i) => (
                              <Star key={i} style={{ width: 14, height: 14, fill: "#0284c7", color: "#0284c7" }} />
                            ))}
                          </div>
                          <p className="t-text">"{t.text}"</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/5 pt-5">
                          <div className="t-reviewer">
                            <div className="t-avatar">
                              {t.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div className="t-info">
                              <span className="t-name">{t.name}</span>
                              <span className="t-loc">{t.loc}</span>
                            </div>
                          </div>
                          <a
                            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTE3NDEwNTEyNjgyNDAy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-dark"
                            style={{ padding: "8px 16px", fontSize: "0.75rem", alignSelf: "flex-start" }}
                          >
                            Verify on Instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider controls */}
              <div className="slider-controls">
                <div className="slider-dots">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`slider-dot ${testimonialIndex === i ? "active" : ""}`}
                      onClick={() => setTestimonialIndex(i)}
                    ></span>
                  ))}
                </div>
                <div className="slider-arrows">
                  <button 
                    onClick={handleTestimonialPrev}
                    className="slider-arrow"
                    aria-label="Previous Testimonial"
                  >
                    <ArrowLeft style={{ width: 16, height: 16 }} />
                  </button>
                  <button 
                    onClick={handleTestimonialNext}
                    className="slider-arrow"
                    aria-label="Next Testimonial"
                  >
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="sec" id="faq">
          <div className="wrap">
            <div className="sec-head fade-in" style={{ textAlign: "center" }}>
              <div className="sec-label" style={{ justifyContent: "center" }}>
                <span className="label-line"></span>
                Help center
              </div>
              <h2 className="sec-title">Common Questions</h2>
              <p className="sec-sub" style={{ margin: "0 auto" }}>Everything you need to know about our Free Fire escrow service.</p>
            </div>

            <div className="faq-accordion fade-in">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`faq-item ${activeFaqIndex === i ? "active" : ""}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => setActiveFaqIndex(activeFaqIndex === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="faq-icon" style={{ width: 18, height: 18 }} />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="sec sec-alt" id="contact">
          <div className="wrap">
            <div className="sec-head fade-in" style={{ textAlign: "center" }}>
              <div className="sec-label" style={{ justifyContent: "center" }}>
                <span className="label-line"></span>
                Get In Touch
              </div>
              <h2 className="sec-title">Ready to Trade?</h2>
              <p className="sec-sub" style={{ margin: "0 auto" }}>Choose your action below to connect instantly with our Patna escrow team.</p>
            </div>

            <div className="grid fade-in" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginTop: "2rem" }}>
              {/* Buying Card */}
              <div className="connect-card connect-card-chan" style={{ padding: "40px 32px" }}>
                <span className="connect-status connect-status-update">
                  <span className="badge-dot" style={{ background: "#0284c7", boxShadow: "0 0 8px #0284c7" }}></span> Catalog Active
                </span>
                <h3 className="text-xl font-bold mb-3">Buy Verified Free Fire IDs</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Browse Bihar's most reliable gaming marketplace. Request specific items, check account stats, and complete secure handovers online (15-min delivery) or offline in Patna.
                </p>
                <div className="space-y-3 mb-8 border-t border-black/5 pt-5">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    <span>100% Verified Evo Gun & Pass Skins</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    <span>Secure migration of phone, emails & 2FA</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    <span>Offline face-to-face deal in Patna main city</span>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink("Hi Thilak Store, I am looking to buy a verified Free Fire ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-main btn-chan text-center justify-center w-full"
                >
                  Chat to Buy (WhatsApp)
                </a>
              </div>

              {/* Selling Card */}
              <div className="connect-card connect-card-ig" style={{ padding: "40px 32px" }}>
                <span className="connect-status" style={{ background: "rgba(225,48,108,0.08)", color: "#e1306c", border: "1px solid rgba(225,48,108,0.15)" }}>
                  <span className="badge-dot" style={{ background: "#e1306c", boxShadow: "0 0 8px #e1306c" }}></span> Instant Payouts
                </span>
                <h3 className="text-xl font-bold mb-3">Sell Your Free Fire ID</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Get a fair-market appraisal for your Free Fire account instantly. Trade safely through our escrow service without fear of chargebacks or credential scams.
                </p>
                <div className="space-y-3 mb-8 border-t border-black/5 pt-5">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    <span>Fair and transparent valuation checks</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    <span>Escrow lock guarantees you receive payment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    <span>Instant UPI or Cash in Patna handovers</span>
                  </div>
                </div>
                <a
                  href={getWhatsAppLink("Hi Thilak Store, I want to sell my Free Fire ID and get an appraisal.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-main btn-ig text-center justify-center w-full"
                >
                  Chat to Sell (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
