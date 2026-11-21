import { redirect } from "next/navigation";

import { troubleshootingOrder } from "@/content/troubleshooting";

export default function TroubleshootingIndexPage() {
  const firstSlug = troubleshootingOrder[0] ?? "merge-conflict";
  redirect(`/troubleshooting/${firstSlug}`);
}
