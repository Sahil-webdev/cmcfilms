import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const distDirectory = resolve(scriptDirectory, "../dist");
const appEntry = resolve(distDirectory, "index.html");

// Hostinger's static deployment does not always apply SPA rewrite rules. Keep
// an index.html at every client-side route so a direct visit or refresh works
// even when no server-side rewrite is available.
const routes = [
  "about",
  "contact",
  "couples",
  "films",
  "packages",
  "portfolio",
  "privacy-policy",
  "terms-of-service",
  "testimonials",
];

await Promise.all(
  routes.map(async (route) => {
    const routeEntry = resolve(distDirectory, route, "index.html");
    await mkdir(dirname(routeEntry), { recursive: true });
    await copyFile(appEntry, routeEntry);
  }),
);

console.log(`Created static route fallbacks for ${routes.length} routes.`);
