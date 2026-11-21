import { redirect } from "next/navigation";

import { faqOrder } from "@/content/reference/faq";

export default function FaqIndexPage() {
  const firstSlug = faqOrder[0] ?? "git-vs-github";
  redirect(`/reference/faq/${firstSlug}`);
}
