import { Outlet, createFileRoute } from "@tanstack/react-router";

// Layout route: both the story index and each individual story render here.
export const Route = createFileRoute("/wedding-stories")({
  component: Outlet,
});
