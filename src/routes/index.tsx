import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <section>
        <p className="eyebrow">Fitness Palace Gym</p>
        <h1>Stronger starts here.</h1>
        <p className="lede">
          The site is ready to grow with training, membership, and class experiences.
        </p>
      </section>
    </main>
  );
}
