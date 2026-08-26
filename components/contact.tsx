"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  FileDown,
  Terminal,
  Send,
  Sparkles,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission with mailto direct fallback option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-32 border-t border-border/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 dark:bg-brand-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="section-label">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            07 // Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
            I am currently open to full-time junior developer positions, associate software engineering roles, and collaborative projects. Feel free to reach out via email or connect on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Interactive Copy Widget */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-md space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Direct Inquiries
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-brand-600 dark:text-brand-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping" />
                  Fast Response
                </span>
              </div>

              <div className="p-4 rounded-xl bg-muted/60 border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-semibold text-foreground truncate select-all">
                    {profileData.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-card hover:bg-accent border border-border text-foreground transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-brand-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-xs font-mono text-brand-600 dark:text-brand-400 text-center animate-in fade-in duration-150 font-semibold">
                  ✓ Email copied to clipboard!
                </div>
              )}

              {/* Primary Direct Mailto Action */}
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs font-semibold transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                Compose Direct Email
              </a>
            </div>

            {/* Social & Resume Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card hover:bg-accent border border-border transition-all flex flex-col justify-between space-y-3 group shadow-sm"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <div>
                  <div className="text-xs font-mono font-bold text-foreground">GitHub</div>
                  <div className="text-[11px] text-muted-foreground font-mono">Explore Code</div>
                </div>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card hover:bg-accent border border-border transition-all flex flex-col justify-between space-y-3 group shadow-sm"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                <div>
                  <div className="text-xs font-mono font-bold text-foreground">LinkedIn</div>
                  <div className="text-[11px] text-muted-foreground font-mono">Connect Profile</div>
                </div>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 p-4 rounded-xl bg-card hover:bg-accent border border-border transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted text-brand-500">
                    <FileDown className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-foreground">Curriculum Vitae / Resume</div>
                    <div className="text-[11px] text-muted-foreground font-mono">PDF Format (Latest Version)</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </a>
            </div>

          </div>

          {/* Right Column: Static Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-lg space-y-6">
              
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-sans">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Client-side message composer (no server dependency)
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-brand-500" />
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-muted/30 rounded-xl border border-brand-500/30 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-brand-500/10 text-brand-500 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-foreground">Message Prepared!</h4>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Thank you for reaching out! Click below to send this directly through your email client or copy to clipboard.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-semibold"
                    >
                      Open Email App to Send
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-mono text-xs"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-foreground font-semibold">
                        Your Name <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Jane Doe / Recruiter"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-foreground font-semibold">
                        Your Email <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-foreground font-semibold">
                      Subject / Opportunity
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Junior Frontend Role / Project Discussion"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-foreground font-semibold">
                      Message <span className="text-brand-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Write your message or inquiry here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground outline-none transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-muted-foreground">
                      No automated bots or server storage.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs font-bold transition-all shadow-md w-full sm:w-auto disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {isSubmitting ? "Processing..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
