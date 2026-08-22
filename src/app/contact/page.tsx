"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleProvider";
import { images } from "@/lib/content";
import PageTitle from "@/components/PageTitle";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ContactPage() {
  const { t } = useLocale();
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "966",
    phone: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const update = (key) => (e) =>
    setForm((current) => ({ ...current, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    console.log("contact submission", form);
    setMessageSent(true);
  };

  const fieldClass =
    "rounded-sm border border-slate-300 p-3.5 font-sans text-sm outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700";

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-8 pb-24 pt-16 lg:grid-cols-2">
      <div>
        <PageTitle size={44}>{t.contact.title}</PageTitle>

        <p className="mt-3 max-w-140 font-sans text-[15px] leading-[1.6] text-slate-600">
          {'body' in t.contact && typeof t.contact.body === 'string'
            ? t.contact.body
            : null}
        </p>
        <p className="mt-5 font-sans text-[15px] leading-[1.7] text-slate-600">
          {t.contact.address}
          <br />
          {t.contact.email}
          <br />
          {t.contact.phone}
        </p>

        <div
          className="mt-7 h-55 w-full rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${images.contact})` }}
        />
      </div>

      <form
        onSubmit={submit}
        className="flex flex-col gap-4 rounded-sm border border-slate-200 bg-white p-9"
      >
        <input
          type="text"
          placeholder={t.contact.form.name}
          value={form.name}
          onChange={update("name")}
          className={fieldClass}
        />

        <input
          type="email"
          placeholder={t.contact.form.email}
          value={form.email}
          onChange={update("email")}
          className={fieldClass}
        />

        <div className="flex gap-2">
          <select
            aria-label="Country code"
            autoComplete="tel-country-code"
            value={form.countryCode}
            onChange={update("countryCode")}
            className={`${fieldClass} w-28 shrink-0 bg-white`}
          >
            <option value="966">🇸🇦 +966 SA</option>
            <option value="971">🇦🇪 +971 AE</option>
            <option value="974">🇶🇦 +974 QA</option>
            <option value="965">🇰🇼 +965 KW</option>
            <option value="973">🇧🇭 +973 BH</option>
            <option value="968">🇴🇲 +968 OM</option>
            <option value="20">🇪🇬 +20 EG</option>
            <option value="44">🇬🇧 +44 UK</option>
            <option value="1">🇺🇸 +1 US/CA</option>
          </select>

          <input
            type="number"
            inputMode="numeric"
            autoComplete="tel-national"
            min="0"
            step="1"
            placeholder={t.contact.form.phone}
            value={form.phone}
            onChange={update("phone")}
            className={`${fieldClass} min-w-0 flex-1`}
          />
        </div>

        <textarea
          placeholder={t.contact.form.message}
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`${fieldClass} resize-y`}
        />

        <button
          type="submit"
          className="rounded-sm border-0 bg-amber-700 p-3.75 font-sans text-sm font-bold text-white transition hover:bg-amber-800"
        >
          {t.contact.form.send}
        </button>
      </form>

      <Dialog open={messageSent} onOpenChange={setMessageSent}>
        <DialogContent className="border-amber-700/30 bg-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-slate-900">
              Message sent
            </DialogTitle>
            <DialogDescription className="font-sans text-sm leading-relaxed text-slate-600">
              Thank you for contacting OSUS. We will get back to you shortly.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose className="rounded-sm bg-amber-700 px-5 py-2.5 font-sans text-sm font-bold text-slate-900 hover:bg-amber-800">
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
