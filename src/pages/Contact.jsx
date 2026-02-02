import Container from "../components/Container";

export default function Contact() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-xs tracking-[0.25em] text-neutral-500">CONTACT</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Send a message with your project type, location, and timeline.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <form className="rounded-2xl border border-neutral-200 p-6 space-y-4">
            <div>
              <label className="text-sm text-neutral-700">Name</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-200" />
            </div>
            <div>
              <label className="text-sm text-neutral-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-200" />
            </div>
            <div>
              <label className="text-sm text-neutral-700">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-200" />
            </div>
            <button
              type="button"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm text-white hover:bg-neutral-800"
            >
              Send
            </button>
            <p className="text-xs text-neutral-500">
              (We’ll wire this to email/Formspree later.)
            </p>
          </form>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <div className="text-sm font-medium">Studio</div>
            <div className="mt-2 text-sm text-neutral-600">
              Gaborone, Botswana
            </div>
            <div className="mt-6 text-sm font-medium">Email</div>
            <div className="mt-2 text-sm text-neutral-600">
              info@chasadesign.co.bw
            </div>
            <div className="mt-6 text-sm font-medium">Phone</div>
            <div className="mt-2 text-sm text-neutral-600">
              +267 XX XXX XXX
            </div>

            <div className="mt-10 rounded-2xl bg-neutral-50 p-5">
              <div className="text-sm font-medium">Smart-ready spaces</div>
              <p className="mt-2 text-sm text-neutral-600">
                Powered by <span className="text-neutral-900">Chasa Systems</span> — digital infrastructure and intelligent systems planning.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
