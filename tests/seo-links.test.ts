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

describe("SEO and official links", () => {
  it("does not publish Instagram links", async () => {
    const filePaths = [
      "src/pages/index.astro",
      "src/pages/blog.astro",
      "src/components/layout/Footer.astro",
      "README.md",
    ];

    for (const filePath of filePaths) {
      const content = await readProjectFile(filePath);
      expect(content).not.toMatch(/instagram\.com/i);
    }
  });
});
