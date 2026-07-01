"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "General Inquiry",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Simulate contact form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "General Inquiry",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-slate-50 py-16 md:py-24 text-slate-700 font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-slate-100 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-slate-200/30 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Title */}
        <SectionHeading
          title={
            <>
              Partner with <br />
              <span className="text-amber-600 text-highlight">Metafia Industries.</span>
            </>
          }
          description="Speak with our sales directors and technical anodizers about your project requirements."
        />

        {/* Banner Image */}
        <div className="w-full relative h-[240px] sm:h-[360px] rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
            alt="Metafia Industries corporate distribution headquarters"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-slate-200 bg-white shadow-lg relative">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 font-display">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-mobile" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                    >
                      <option value="General Inquiry">General Corporate Inquiry</option>
                      <option value="Aluminium Finishing">Aluminium Anodizing / Coating</option>
                      <option value="Interior Design">Interior Design & Metalwork</option>
                      <option value="Agro Inquiry">Agro Products Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors resize-none"
                    placeholder="Describe your structural finishing spec or project requirements..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-slate-100 border border-slate-350 text-slate-700 text-sm rounded-lg">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-slate-500" />
                    <span className="font-bold">Inquiry submitted successfully! A manager will respond shortly.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-650 text-sm rounded-lg">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="font-bold">Please complete all fields marked with * before submitting.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 btn-primary disabled:bg-blue-300 text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact details + styled Google map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 font-display">Corporate Office</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Location Address</h4>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">
                      Metafia Industries Pvt Ltd<br />
                      Berhampur, Ganjam, Odisha,<br />
                      India
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Direct Phone</h4>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">
                      <a href="tel:+917077669396" className="hover:text-slate-900 transition-colors">
                        +91 7077669396
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Correspondence</h4>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">
                      <a href="mailto:metafia.mkt@gmail.com" className="hover:text-slate-900 transition-colors">
                        metafia.mkt@gmail.com
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Operating Hours</h4>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">
                      Monday &ndash; Saturday: 09:00 AM &ndash; 06:30 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map light-styled container */}
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md group">
              <iframe
                title="Metafia Industries Office Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59923.63462947621!2d84.77093282114757!3d19.310574041187425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c4cbe1cf1ec4d%3A0x673a3ad0e854fa16!2sBerhampur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-none grayscale opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-slate-200/50 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
