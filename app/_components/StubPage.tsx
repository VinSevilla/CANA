import type { ReactNode } from "react";
import { stubNote } from "../_content/site";
import { Container } from "./Container";

/** Temporary page so nav links don't 404 during prototype review. */
export function StubPage({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <Container className="py-20 lg:py-32">
      <h1 className="text-5xl lg:text-6xl">{title}</h1>
      <p className="mt-6 max-w-prose text-deep-sage">{stubNote}</p>
      {children}
    </Container>
  );
}
