
import fs from "fs";
import path from "path";

const CONVEX_URL = "https://colorless-husky-744.convex.cloud";

async function main() {
  if (!CONVEX_URL) {
    console.error("Please set the CONVEX_URL environment variable.");
    process.exit(1);
  }
  const data = fs.readFileSync(path.resolve(process.cwd(), "products.jsonl"), "utf-8");
  const lines = data.trim().split("\n");
  const products = lines.map(line => JSON.parse(line));

  const response = await fetch(new URL("/api/loadProducts/loadProducts", CONVEX_URL).toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ products }),
  });

  if (response.ok) {
    console.log("Successfully populated database.");
  } else {
    console.error("Failed to populate database:", await response.text());
  }
}

main().catch(console.error);

