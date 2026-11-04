import { Container } from "./_components/Container";
import { homeInProgress } from "./_content/site";

// Temporary homepage for checkpoint 2 (shows H1/H2 serif + body text).
export default function Home() {
  return (
    <Container className="py-20 lg:py-32">
      <h1 className="text-5xl lg:text-7xl">{homeInProgress.heading}</h1>
      <h2 className="mt-12 text-3xl lg:text-4xl">
        {homeInProgress.sectionHeading}
      </h2>
      <p className="mt-4 max-w-prose">{homeInProgress.body}</p>
    </Container>
  );
}
