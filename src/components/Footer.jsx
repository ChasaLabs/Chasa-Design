import Container from "../components/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200">
      <Container className="py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">© {year} Chasa Design. All rights reserved.</p>
          <p className="text-sm text-neutral-500">
            Powered by <span className="text-neutral-900">Chasa Systems</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
