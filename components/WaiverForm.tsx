"use client";

import { useState } from "react";

const FACTOR_OPTIONS = [
  "Sleep",
  "Pain",
  "Anxiety/Stress",
  "Focus",
  "Mobile Wellness Station",
  "Other",
  "Post Game Recovery",
  "Performance",
];

type Props = {
  title: string;
  waiverText: string;
  formType: "shiftwave" | "energylounger";
};

export function WaiverForm({ title, waiverText, formType }: Props) {
  const [acknowledged, setAcknowledged] = useState(false);
  const [factors, setFactors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleFactor = (factor: string) => {
    setFactors((prev) =>
      prev.includes(factor) ? prev.filter((f) => f !== factor) : [...prev, factor]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!acknowledged) return;
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      type: formType,
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      dateOfBirth: (form.elements.namedItem("dateOfBirth") as HTMLInputElement).value,
      postalCode: (form.elements.namedItem("postalCode") as HTMLInputElement).value,
      factors,
      acknowledged,
    };
    try {
      const res = await fetch("/api/forms/waiver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <h2 className="text-xl font-bold text-primary">Thank you</h2>
        <p className="mt-2 text-neutral-600">Your waiver has been submitted.</p>
        <a href="/forms/booking" className="btn-primary mt-6 inline-block">
          Book an appointment →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-neutral-700">
            Date of birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-neutral-700">
            Postal code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
          />
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-700">
          What factors are you interested in using {title} for?
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          {FACTOR_OPTIONS.map((factor) => (
            <label key={factor} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={factors.includes(factor)}
                onChange={() => toggleFactor(factor)}
                className="rounded border-neutral-300"
              />
              <span className="text-sm text-neutral-700">{factor}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <p className="text-sm text-neutral-700">{waiverText}</p>
        <label className="mt-4 flex items-start gap-3">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            required
            className="mt-1 rounded border-neutral-300"
          />
          <span className="text-sm text-neutral-700">
            By checking this box, I acknowledge and agree to the terms and conditions outlined in the waiver.
          </span>
        </label>
      </div>
      <button
        type="submit"
        disabled={!acknowledged || loading}
        className="btn-primary w-full sm:w-auto disabled:opacity-50"
      >
        {loading ? "Submitting…" : "Let's Go"}
      </button>
    </form>
  );
}
