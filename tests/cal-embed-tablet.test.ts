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

describe("Cal.com modal responsive behavior and unified light theme", () => {
  it("includes tablet responsive CSS and light color-scheme in global.css", async () => {
    const cssContent = await readProjectFile("src/styles/global.css");

    expect(cssContent).toContain("color-scheme: light !important;");
    expect(cssContent).toContain("@media (min-width: 640px) and (max-width: 1023px)");
    expect(cssContent).toContain("cal-modal-box");
    expect(cssContent).toContain("width: calc(100vw - 32px) !important;");
    expect(cssContent).toContain("max-width: 660px !important;");
    expect(cssContent).toContain("margin-inline: auto !important;");
  });

  it("enforces light theme and tablet styles in CalEmbed.astro", async () => {
    const embedContent = await readProjectFile("src/components/ui/CalEmbed.astro");

    expect(embedContent).toContain('theme: "light"');
    expect(embedContent).toContain("modalStyleId");
    expect(embedContent).toContain("color-scheme: light");
    expect(embedContent).toContain("min-width: 640px");
    expect(embedContent).toContain("max-width: 1023px");
    expect(embedContent).toContain(".modal-box");
    expect(embedContent).toContain("max-width: 660px");
    expect(embedContent).toContain("overflow-y: auto");
    expect(embedContent).toContain("MutationObserver");
    expect(embedContent).toContain('modalEl.setAttribute("data-theme", "light")');
  });

  it("ensures all service booking buttons configure theme: light in data-cal-config", async () => {
    const pages = [
      "src/pages/servicios/index.astro",
      "src/pages/servicios/pareja.astro",
      "src/pages/servicios/crianza-familia.astro",
      "src/pages/servicios/proceso-vincular.astro",
    ];

    for (const pagePath of pages) {
      const content = await readProjectFile(pagePath);
      expect(content).toContain('data-cal-config=\'{"layout":"month_view","theme":"light"}\'');
    }
  });

  it("ensures CalEmbed is imported in all service booking pages", async () => {
    const serviceIndex = await readProjectFile("src/pages/servicios/index.astro");
    expect(serviceIndex).toContain("<CalEmbed");

    const parejaPage = await readProjectFile("src/pages/servicios/pareja.astro");
    expect(parejaPage).toContain("<CalEmbed");

    const crianzaPage = await readProjectFile("src/pages/servicios/crianza-familia.astro");
    expect(crianzaPage).toContain("<CalEmbed");

    const individualPage = await readProjectFile("src/pages/servicios/proceso-vincular.astro");
    expect(individualPage).toContain("<CalEmbed");
  });
});
