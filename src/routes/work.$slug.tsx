import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getApp, getNextApp } from "@/lib/apps";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const app = getApp(params.slug);
    if (!app) throw notFound();
    return { app, next: getNextApp(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.app.name} — Daren` : "App — Daren" },
      {
        name: "description",
        content: loaderData?.app.description ?? "Mobile app case study.",
      },
      { property: "og:title", content: loaderData ? `${loaderData.app.name} — Daren` : "App — Daren" },
      {
        property: "og:description",
        content: loaderData?.app.description ?? "Mobile app case study.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppDetail,
});

function StoreButtons({
  appStoreUrl,
  playStoreUrl,
}: {
  appStoreUrl?: string | undefined;
  playStoreUrl?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
        >
          App Store
          <span aria-hidden>↗</span>
        </a>
      )}
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          Google Play
          <span aria-hidden>↗</span>
        </a>
      )}
    </div>
  );
}

function AppDetail() {
  const { app, next } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-7xl px-6 pt-14 pb-24">
      {/* Header */}
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {app.category} · {app.year}
          </p>
          <h1 className="headline mt-4 text-6xl text-foreground sm:text-8xl">{app.name}</h1>
          <p className="mt-4 max-w-xl text-xl font-medium text-foreground sm:text-2xl">
            {app.tagline}
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            {app.description}
          </p>
          <div className="mt-8">
            <StoreButtons appStoreUrl={app.appStoreUrl} playStoreUrl={app.playStoreUrl} />
          </div>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Highlights
          </p>
          <ul className="mt-4 space-y-3">
            {app.features.map((f) => (
              <li
                key={f}
                className="border-b border-border pb-3 text-sm font-medium text-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
        {app.screenshots.map((shot, i) => (
          <div
            key={shot.src}
            className={`self-start overflow-hidden rounded-2xl bg-card ${i % 2 === 1 ? "sm:mt-16" : ""}`}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              width={887}
              height={1920}
              loading="lazy"
              className="w-full"
            />
          </div>
        ))}
      </div>

      {/* Next app */}
      <Link
        to="/work/$slug"
        params={{ slug: next.slug }}
        className="group mt-24 block border-t border-border pt-12"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Next app
        </p>
        <div className="mt-4 flex items-baseline justify-between">
          <h2 className="headline text-5xl text-foreground transition-opacity group-hover:opacity-60 sm:text-7xl">
            {next.name}
          </h2>
          <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2" aria-hidden>
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
