import type { Metadata } from "next";
import { EveryHalfPassionPage } from "@/components/everyhalf-passion-page";

export const metadata: Metadata = {
  title: "EveryHalf | Khanh Huyen Portfolio",
  description:
    "A personal passion page about Khanh Huyen's long-time love for EveryHalf.",
};

export default function EveryHalfPage() {
  return <EveryHalfPassionPage />;
}
