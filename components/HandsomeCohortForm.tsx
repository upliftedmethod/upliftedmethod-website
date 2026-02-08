"use client";

import { useState } from "react";

const TIER_OPTIONS = [
  { value: "private", label: "Private Performer ($1,450)" },
  { value: "lab_partner", label: "Lab Partner ($450–$850)" },
  { value: "full_barter", label: "Full Barter (content collaboration)" },
] as const;

export function HandsomeCohortForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      source: "handsome",
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value.trim(),
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim() || undefined,
      tier: (form.elements.namedItem("tier") as HTMLSelectElement).value || undefined,
    };
    try {
      const res = await fetch("/api/forms/cohort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setSubmitted(true);
      } else {
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-primary/20 bg-cream/30 p-8 text-center">
        <h2 className="text-xl font-bold text-primary">You&apos;re in</h2>
        <p className="mt-2 text-neutral-600">
          We&apos;ll be in touch soon to confirm your spot and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="handsome-firstName" className="block text-sm font-medium text-neutral-700">
            First name *
          </label>
          <input
            id="handsome-firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="handsome-lastName" className="block text-sm font-medium text-neutral-700">
            Last name
          </label>
          <input
            id="handsome-lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="handsome-email" className="block text-sm font-medium text-neutral-700">
          Email *
        </label>
        <input
          id="handsome-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="handsome-phone" className="block text-sm font-medium text-neutral-700">
          Phone
        </label>
        <input
          id="handsome-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="handsome-tier" className="block text-sm font-medium text-neutral-700">
          Which option are you interested in?
        </label>
        <select
          id="handsome-tier"
          name="tier"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select one</option>
          {TIER_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full sm:w-auto disabled:opacity-70"
      >
        {loading ? "Submitting…" : "Apply for the Uplifted Cohort"}
      </button>
    </form>
  );
}
