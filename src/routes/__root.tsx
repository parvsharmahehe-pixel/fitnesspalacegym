import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="display-section text-7xl text-foreground">Off the grid</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();


  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Something broke</p>
        <h1 className="display-section text-5xl text-foreground">
          This page didn't load
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Try again — or head back to safety.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fitness Palace Gym — Dilshad Garden's Boutique Strength Club" },
      {
        name: "description",
        content:
          "Fitness Palace Gym is Dilshad Garden's boutique strength & conditioning club. Expert trainers, spotless facility, real results. Open daily 6AM–10PM.",
      },
      { name: "author", content: "Fitness Palace Gym" },
      { property: "og:title", content: "Fitness Palace Gym — Dilshad Garden's Boutique Strength Club" },
      {
        property: "og:description",
        content:
          "Boutique gym in Dilshad Garden, Delhi. Expert coaching, immaculate facility, 4.9★ community. Open daily 6AM–10PM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fitness Palace Gym — Dilshad Garden's Boutique Strength Club" },
      { name: "description", content: "Fitness Palace Gym is Dilshad Garden's boutique strength & conditioning club. Expert trainers, spotless facility, real results. Open daily 6AM–10PM." },
      { property: "og:description", content: "Fitness Palace Gym is Dilshad Garden's boutique strength & conditioning club. Expert trainers, spotless facility, real results. Open daily 6AM–10PM." },
      { name: "twitter:description", content: "Fitness Palace Gym is Dilshad Garden's boutique strength & conditioning club. Expert trainers, spotless facility, real results. Open daily 6AM–10PM." },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:image", content: "/og.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
