import { redirect } from "next/navigation";

import { docsStructure } from "@/config/docs-structure";

export default function DocsIndexPage() {
  const firstCategory = docsStructure[0];
  const firstSlug = firstCategory?.order[0] ?? "introduction";
  redirect(`/docs/${firstCategory?.slug ?? "git"}/${firstSlug}`);
}
