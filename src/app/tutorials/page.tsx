import { redirect } from "next/navigation";

import { tutorials } from "@/content/tutorials";

export default function TutorialsIndexPage() {
  const firstSlug = Object.keys(tutorials)[0] ?? "project-pertamaku";
  redirect(`/tutorials/${firstSlug}`);
}
