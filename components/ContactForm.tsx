"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("manojqzo");
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-primary">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-primary font-semibold text-lg">Thank you for your message!</p>
        <p className="text-sm text-gray-400 mt-1">We&apos;ll get back to you soon.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="flex h-11 w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-colors placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="flex h-11 w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-colors placeholder:text-gray-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Your phone number"
          className="flex h-11 w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-colors placeholder:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="flex h-11 w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-colors text-gray-600"
        >
          <option value="">Select a service</option>
          <option value="standard">Standard Clean</option>
          <option value="deep">Deep Clean</option>
          <option value="move">Move-In / Move-Out</option>
          <option value="recurring">Recurring Cleaning</option>
          <option value="post-construction">Post-Construction</option>
          <option value="airbnb">Airbnb Cleaning</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your cleaning needs"
          className="flex min-h-[100px] w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-colors placeholder:text-gray-400"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primary text-white py-3 px-4 rounded-full font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
