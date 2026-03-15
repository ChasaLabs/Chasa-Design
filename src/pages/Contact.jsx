import bg from "../assets/FeintDrawings.jpeg";

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          <aside className="rounded-3xl border border-black/10 bg-white/80 p-8 backdrop-blur">
            <h1 className="text-center text-2xl font-semibold tracking-tight text-neutral-900">Contact us</h1>
            <div className="mt-3 h-px w-20 bg-neutral-300" />

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Phone:</p>
                <a href="tel:+2673900457" className="mt-2 inline-block text-sm text-neutral-900 hover:underline">
                  +267 3900457
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Address:</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-900">
                  Block 8
                  <br />
                  Gaborone
                  <br />
                  Botswana
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Email:</p>
                <a
                  href="mailto:ChasaDesignArchitects@gmail.com"
                  className="mt-2 inline-block text-sm text-neutral-900 hover:underline"
                >
                  ChasaDesignArchitects@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Connect:</p>
                <div className="mt-2 flex items-center gap-2">
                  <button type="button" className="rounded-full border border-black/20 px-3 py-1.5 text-xs text-neutral-900">
                    IG
                  </button>
                  <button type="button" className="rounded-full border border-black/20 px-3 py-1.5 text-xs text-neutral-900">
                    LI
                  </button>
                  <button type="button" className="rounded-full border border-black/20 px-3 py-1.5 text-xs text-neutral-900">
                    X
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-12 text-xs text-neutral-500">Powered by Chasa Systems</p>
          </aside>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Get in touch</h2>
            <p className="mt-4 max-w-xl text-neutral-700 leading-relaxed">
              We collaborate with clients across early concepts, planning, and detailed delivery.
              Share your location, timeline, and project goals and we will respond with next steps.
            </p>
            <p className="mt-3 max-w-xl text-neutral-700 leading-relaxed">
              For best response times, contact us by email or phone. We typically respond within one business day.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
