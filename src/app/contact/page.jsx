'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/LocaleProvider';
import { images } from '@/lib/content';
import PageTitle from '@/components/PageTitle';

export default function ContactPage() {
  const { t } = useLocale();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (key) => (e) =>
    setForm((current) => ({ ...current, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    console.log('contact submission', form);
  };

  const fieldClass =
    'rounded-sm border border-slate-300 p-3.5 font-sans text-sm outline-none transition focus:border-amber-700 focus:ring-1 focus:ring-amber-700';

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-8 pb-24 pt-16 lg:grid-cols-2">
      <div>
        <PageTitle size={44}>{t.contact.title}</PageTitle>

        <p className="mt-5 font-sans text-[15px] leading-[1.7] text-slate-600">
          {t.contact.address}
          <br />
          {t.contact.email}
          <br />
          {t.contact.phone}
        </p>

        <div
          className="mt-7 h-[220px] w-full rounded-sm bg-cover bg-center"
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
          onChange={update('name')}
          className={fieldClass}
        />

        <input
          type="email"
          placeholder={t.contact.form.email}
          value={form.email}
          onChange={update('email')}
          className={fieldClass}
        />

        <textarea
          placeholder={t.contact.form.message}
          rows={5}
          value={form.message}
          onChange={update('message')}
          className={`${fieldClass} resize-y`}
        />

        <button
          type="submit"
          className="rounded-sm border-0 bg-amber-700 p-[15px] font-sans text-sm font-bold text-white transition hover:bg-amber-800"
        >
          {t.contact.form.send}
        </button>
      </form>
    </section>
  );
}