import { createFileRoute, Link } from "@tanstack/react-router";
import { apps } from "@/lib/apps";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feather Studio | Daren Irlen - Mobile App Developer & Designer" },
      {
        name: "description",
        content:
          "I design and build mobile apps people love to use. Explore my portfolio of iOS apps",
      },
      { property: "og:title", content: "Daren - Mobile App Developer & Designer" },
      {
        property: "og:description",
        content:
          "I design and build mobile apps people love to use. Explore my portfolio of iOS apps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-10">
        <div className="reveal relative overflow-hidden rounded-2xl">
          <img
            src={heroImg}
            alt="Abstract grainy coral artwork on a light grey background"
            width={1920}
            height={1200}
            className="h-[78vh] w-full object-cover sm:h-[85vh]"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-foreground/70">
              Mobile app developer &amp; designer
            </p>
            <h1 className="headline mt-3 text-[13vw] leading-[0.95] text-foreground sm:text-[11vw] lg:text-[8vw]">
              Small apps made with care
            </h1>
          </div>
        </div>
      </section>

      {/* Quick about */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground lg:col-span-3">
            About
          </p>
          <div className="lg:col-span-9">
            <p className="max-w-3xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              I'm Daren, an independent developer crafting mobile apps from
              first sketch to App Store. I care about the details. I build apps for the things that matter.
              Built with intention, no noise.
            </p>
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p className="headline text-5xl text-foreground">{apps.length}</p>
                <p className="mt-1 text-sm text-muted-foreground">Apps shipped</p>
              </div>
              <div>
                <p className="headline text-5xl text-foreground">iOS</p>
                <p className="mt-1 text-sm text-muted-foreground">Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24">
        <div className="flex items-end justify-between">
          <h2 className="headline text-5xl text-foreground sm:text-7xl">Portfolio</h2>
          <p className="hidden text-sm text-muted-foreground sm:block">
            {apps.length} selected apps
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {apps.map((app, i) => (
            <Link
              key={app.slug}
              to="/work/$slug"
              params={{ slug: app.slug }}
              className={`group block ${i % 2 === 1 ? "sm:mt-16" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl bg-card">
                <img
                  src={app.cover}
                  alt={`${app.name} — ${app.tagline}`}
                  width={887}
                  height={1920}
                  loading="lazy"
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{app.tagline}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {app.category} · {app.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
