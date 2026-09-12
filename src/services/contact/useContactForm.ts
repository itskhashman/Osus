"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactFormValues } from "@/domain/contact";
import { defaultCountryCode } from "@/fixture/countryCodes";

const emptyForm: ContactFormValues = {
  name: "",
  email: "",
  countryCode: defaultCountryCode,
  phone: "",
  message: "",
};

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyForm);
  const [messageSent, setMessageSent] = useState(false);

  const update =
    (key: keyof ContactFormValues) => (event: ChangeEvent<Field>) => {
      const { value } = event.target;
      setValues((current) => ({ ...current, [key]: value }));
    };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return { values, update, submit, messageSent, setMessageSent };
}
