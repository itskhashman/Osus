"use client";

import ScrollReveal from "@/components/common/ScrollReveal";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import MessageSentDialog from "@/components/contact/MessageSentDialog";
import { useContactForm } from "@/services/contact/useContactForm";

export default function ContactView() {
  const { values, update, submit, messageSent, setMessageSent } =
    useContactForm();

  return (
    <ScrollReveal>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-8 pb-24 pt-16 lg:grid-cols-2">
        <ContactDetails />

        <ContactForm values={values} onChange={update} onSubmit={submit} />

        <MessageSentDialog open={messageSent} onOpenChange={setMessageSent} />
      </section>
    </ScrollReveal>
  );
}
