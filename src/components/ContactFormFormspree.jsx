// src/components/ContactFormFormspree.jsx
import React, { useEffect, useState } from "react";

/*
  REQUIRED:
  - Replace FORM_ID with your Formspree form id (e.g. "f/abcd1234")
  - Replace RECAPTCHA_SITE_KEY with your Google reCAPTCHA v2 (invisible) site key
*/
const FORM_ID = "f/YOUR_FORMSPREE_ID";
const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_V2_INVISIBLE_SITE_KEY";

export default function ContactFormFormspree() {
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });

  // Load reCAPTCHA script once
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;
    if (document.querySelector('#recaptcha-script')) return;
    const s = document.createElement('script');
    s.id = 'recaptcha-script';
    s.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    // Honeypot check — if filled, silently drop
    if (form._gotcha && form._gotcha.trim() !== "") {
      // suspected bot
      setStatus({ loading: false, ok: null, error: "Spam detected" });
      return;
    }

    try {
      // If reCAPTCHA key is provided, execute invisible reCAPTCHA and get token
      let recaptchaToken = null;
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        // create an invisible reCAPTCHA widget if not yet present
        const widgetId = window._rf_widgetId;
        if (typeof widgetId === "undefined") {
          // render a temporary invisible container
          const container = document.createElement("div");
          container.style.display = "none";
          container.id = "recaptcha-temp";
          document.body.appendChild(container);
          // eslint-disable-next-line no-undef
          window._rf_widgetId = window.grecaptcha.render(container.id, {
            sitekey: RECAPTCHA_SITE_KEY,
            size: "invisible",
          });
        }
        // eslint-disable-next-line no-undef
        recaptchaToken = await new Promise((resolve, reject) => {
          try {
            // eslint-disable-next-line no-undef
            window.grecaptcha.execute(window._rf_widgetId).then(token => {
              resolve(token);
            }).catch(err => reject(err));
          } catch (err) {
            reject(err);
          }
        });
      }

      // Build form data
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", form.message);
      // attach honeypot field (Formspree ignores unknown fields but we include it)
      fd.append("_gotcha", form._gotcha || "");
      // optionally set subject or reply-to
      fd.append("_subject", `Portfolio message from ${form.name || 'visitor'}`);
      fd.append("_replyto", form.email || "");
      // If you want JSON response instead of redirect, ask Formspree docs — we'll use fetch.
      if (recaptchaToken) fd.append("g-recaptcha-response", recaptchaToken);

      // POST to Formspree endpoint
      const res = await fetch(`https://formspree.io/${FORM_ID}`, {
        method: "POST",
        body: fd,
        headers: {
          // don't set content-type; browser will set multipart/form-data
          'Accept': 'application/json'
        }
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setForm({ name: "", email: "", message: "", _gotcha: "" });
        setStatus({ loading: false, ok: "Message sent — thank you!", error: null });
      } else {
        setStatus({ loading: false, ok: null, error: data.error || "Failed to send" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, ok: null, error: "Network or reCAPTCHA error" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 ring-1 ring-gray-100 shadow-sm max-w-xl">
      {/* Visible fields */}
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
        placeholder="Your name"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
        placeholder="you@company.com"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Message</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
        rows={5}
        placeholder="Tell me about the role…"
      />

      {/* Honeypot (hidden). Name it _gotcha or any name Formspree recognizes; bots will fill it. */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label>Leave this field empty</label>
        <input name="_gotcha" value={form._gotcha} onChange={handleChange} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="submit"
          disabled={status.loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
        >
          {status.loading ? "Sending…" : "Send"}
        </button>

        <div className="text-sm">
          {status.ok && <span className="text-green-600">{status.ok}</span>}
          {status.error && <span className="text-red-600">{status.error}</span>}
        </div>
      </div>

      {/* NOTE: If you'd rather have Formspree redirect to a thank-you page, remove the JS and use a plain <form action="https://formspree.io/f/..." method="POST"> with the same fields. */}
    </form>
  );
}
