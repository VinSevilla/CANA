import type { Metadata } from "next";
import { StubPage } from "../_components/StubPage";
import { book } from "../_content/site";

export const metadata: Metadata = { title: book.label };

export default function BookPage() {
  return <StubPage title={book.label} />;
}
