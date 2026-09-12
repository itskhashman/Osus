"use client";

import { useTranslations } from "next-intl";
import type { ContactFormValues } from "@/domain/contact";
import { countryCodes } from "@/fixture/countryCodes";
import type { ChangeEvent, FormEvent } from "react";

const fieldClass =
  "rounded-sm border border-slate-300 p-3.5 font-sans text-sm outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700";

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

type ContactFormProps = {
  values: ContactFormValues;
  onChange: (
    key: keyof ContactFormValues,
  ) => (event: ChangeEvent<Field>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function ContactForm({
  values,
  onChange,
  onSubmit,
}: ContactFormProps) {
  const t = useTranslations("contact");

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-sm border border-slate-200 bg-white p-9"
    >
      <input
        type="text"
        placeholder={t("form.name")}
        value={values.name}
        onChange={onChange("name")}
        className={fieldClass}
      />

      <input
        type="email"
        placeholder={t("form.email")}
        value={values.email}
        onChange={onChange("email")}
        className={fieldClass}
      />

      <div className="flex gap-2">
        <select
          aria-label={t("countryCodeLabel")}
          autoComplete="tel-country-code"
          value={values.countryCode}
          onChange={onChange("countryCode")}
          className={`${fieldClass} w-28 shrink-0 bg-white`}
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.label}
            </option>
          ))}
        </select>

        <input
          type="number"
          inputMode="numeric"
          autoComplete="tel-national"
          min="0"
          step="1"
          placeholder={t("form.phone")}
          value={values.phone}
          onChange={onChange("phone")}
          className={`${fieldClass} min-w-0 flex-1`}
        />
      </div>

      <textarea
        placeholder={t("form.message")}
        rows={5}
        value={values.message}
        onChange={onChange("message")}
        className={`${fieldClass} resize-y`}
      />

      <button
        type="submit"
        className="rounded-sm border-0 bg-amber-700 p-3.75 font-sans text-sm font-bold text-white transition hover:bg-amber-800"
      >
        {t("form.send")}
      </button>
    </form>
  );
}
