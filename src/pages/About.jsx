import Container from "../components/Container";

export default function About() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-xs tracking-[0.25em] text-neutral-500">ABOUT</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Chasa Design</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-neutral-600 leading-relaxed">
          <p>
            Chasa Design is an architectural studio focused on thoughtful, context-driven
            design — balancing clarity, proportion, and function.
          </p>
          <p>
            Our work spans residential and commercial projects, with a collaborative process
            that respects budgets, timelines, and the realities of construction.
          </p>
        </div>
      </Container>
    </section>
  );
}
