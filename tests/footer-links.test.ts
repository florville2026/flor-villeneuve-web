import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { describe, it, expect } from "vitest";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const readProjectFile = async (relativePath: string) => {
  const fullPath = path.join(rootDir, relativePath);
  return readFile(fullPath, "utf-8");
};

describe("Footer contact links", () => {
  it("includes Instagram, YouTube, WhatsApp, WhatsApp Community, and email links", async () => {
    const content = await readProjectFile("src/components/layout/Footer.astro");
    expect(content).toContain("https://www.instagram.com/florencia.villeneuve");
    expect(content).toContain("https://www.youtube.com/@florencia.villeneuve");
    expect(content).toContain("https://wa.me/59892497675");
    expect(content).toContain("https://chat.whatsapp.com/L7jnhxhIvqb6QbwnFN1PJo");
    expect(content).toContain("mailto:florencia.villeneuve@gmail.com");
  });
});
