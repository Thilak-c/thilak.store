"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { getWhatsAppLink } from "../data/products";

export default function CustomSearchModal({ isOpen, onClose, showToast }) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [budget, setBudget] = useState("");
  const [minLevel, setMinLevel] = useState("Any");
  const [dealType, setDealType] = useState("Online Delivery");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    let msg = `🔥 CUSTOM ID REQUEST 🔥\n\n`;
    msg += `👤 ${name}\n📱 ${whatsapp}\n💰 ₹${budget}\n⭐ Level: ${minLevel}\n🤝 ${dealType}\n`;
    if (dealType === "Offline Meeting in Patna" && location) {
      msg += `📍 ${location}\n`;
    }
    msg += requirements.trim() ? `🔫 ${requirements.trim()}\n` : `🔫 Any good account\n`;
    msg += `\nvia thilakxdeals`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(msg)
        .then(() => showToast("Copied to clipboard!", true))
        .catch(() => showToast("Redirecting...", false));
    } else {
      showToast("Redirecting...", false);
    }

    setTimeout(() => {
      window.open(getWhatsAppLink(msg), "_blank");
    }, 800);

    // Reset form & close
    setName("");
    setWhatsapp("");
    setBudget("");
    setMinLevel("Any");
    setDealType("Online Delivery");
    setLocation("");
    setRequirements("");
    onClose();
  };

  const handleBackdropClick = (e) => {
    const dialogBox = e.currentTarget.querySelector(".modal-box");
    if (dialogBox) {
      const rect = dialogBox.getBoundingClientRect();
      const isInDialog =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!isInDialog) {
        onClose();
      }
    }
  };

  return (
    <dialog open className="modal" onClick={handleBackdropClick}>
      <div className="modal-box">
        <div className="modal-top">
          <h3>Custom ID Search</h3>
          <button type="button" className="modal-x" onClick={onClose} aria-label="Close">
            <X style={{ width: "16px", height: "16px" }} />
          </button>
        </div>
        <p className="modal-sub">Details auto-copy to clipboard for pasting in our WhatsApp Channel.</p>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="field">
            <label htmlFor="user-name">Name *</label>
            <input
              type="text"
              id="user-name"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="user-whatsapp">WhatsApp *</label>
            <input
              type="tel"
              id="user-whatsapp"
              placeholder="10-digit"
              pattern="[0-9]{10}"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>
          <div className="form-2col">
            <div className="field">
              <label htmlFor="user-budget">Budget *</label>
              <select
                id="user-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              >
                <option value="" disabled>Select</option>
                <option value="500 - 1,500">Under ₹1,500</option>
                <option value="1,500 - 3,500">₹1,500 – ₹3,500</option>
                <option value="3,500 - 7,000">₹3,500 – ₹7,000</option>
                <option value="7,000 - 12,000">₹7,000 – ₹12,000</option>
                <option value="12,000 - 20,000+">₹12,000+</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="user-level">Min Level</label>
              <select
                id="user-level"
                value={minLevel}
                onChange={(e) => setMinLevel(e.target.value)}
              >
                <option value="Any">Any</option>
                <option value="50+">50+</option>
                <option value="60+">60+</option>
                <option value="70+">70+</option>
              </select>
            </div>
          </div>
          
          <div className="field">
            <label>Deal Mode *</label>
            <div className="radio-row">
              <label className="r-card">
                <input
                  type="radio"
                  name="deal_type"
                  value="Online Delivery"
                  checked={dealType === "Online Delivery"}
                  onChange={() => setDealType("Online Delivery")}
                />
                <span>Online</span>
              </label>
              <label className="r-card">
                <input
                  type="radio"
                  name="deal_type"
                  value="Offline Meeting in Patna"
                  checked={dealType === "Offline Meeting in Patna"}
                  onChange={() => setDealType("Offline Meeting in Patna")}
                />
                <span>Offline (Patna)</span>
              </label>
            </div>
          </div>

          {dealType === "Offline Meeting in Patna" && (
            <div className="field" id="locationField">
              <label htmlFor="user-location">Patna Landmark *</label>
              <input
                type="text"
                id="user-location"
                placeholder="e.g. Boring Road"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          )}

          <div className="field">
            <label htmlFor="user-requirements">Items / Skins</label>
            <textarea
              id="user-requirements"
              placeholder="e.g. Cobra MP40, S2 Elite Pass"
              rows={3}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>

          <div className="modal-btns">
            <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-main">Send Inquiry</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
