"use client";

import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MessageSentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function MessageSentDialog({
  open,
  onOpenChange,
}: MessageSentDialogProps) {
  const t = useTranslations("contact.success");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-amber-700/30 bg-white">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-bold text-slate-900">
            {t("title")}
          </DialogTitle>

          <DialogDescription className="font-sans text-sm leading-relaxed text-slate-600">
            {t("body")}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose className="rounded-sm bg-amber-700 px-5 py-2.5 font-sans text-sm font-bold text-slate-900 hover:bg-amber-800">
            {t("close")}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
