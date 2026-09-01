import { createFileRoute, redirect } from "@tanstack/react-router";

// Keep old shared links working, but use the clearer Wedding Stories address.
export const Route = createFileRoute("/portfolio")({
  beforeLoad: () => {
    throw redirect({ to: "/wedding-stories", replace: true });
  },
  component: () => null,
});
