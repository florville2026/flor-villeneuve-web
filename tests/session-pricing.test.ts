import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { describe, it, expect } from "vitest";
import { sessionPricing } from "../src/config/sessionPricing";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bookingPages = [
  "src/pages/servicios/index.astro",
  "src/pages/servicios/pareja.astro",
  "src/pages/servicios/crianza-familia.astro",
  "src/pages/servicios/proceso-vincular.astro",
];

describe("Session pricing presentation", () => {
  it("keeps the confirmed USD amounts and leaves euro prices unconfirmed", () => {
    expect(sessionPricing.pareja).toMatchObject({ amountUsd: 110, amountEur: null });
    expect(sessionPricing["crianza-familia"]).toMatchObject({ amountUsd: 125, amountEur: null });
    expect(sessionPricing["proceso-vincular"]).toMatchObject({ amountUsd: 95, amountEur: null });
  });

  it.each(bookingPages)("shows pricing above and directly below the Cal.com button in %s", async (pagePath) => {
    const page = await readFile(path.join(rootDir, pagePath), "utf-8");

    expect(page).toContain('placement="primary"');
    expect(page).toContain('placement="after-booking"');
    expect(page).toContain("data-cal-link={service.calLink}");
  });

  it("keeps the pricing note readable across responsive widths", async () => {
    const component = await readFile(
      path.join(rootDir, "src/components/ui/SessionPricing.astro"),
      "utf-8",
    );

    expect(component).toContain("max-w-[30rem]");
    expect(component).toContain("text-xs sm:text-sm");
    expect(component).toContain("text-center");
    expect(component).toContain("Montos expresados en euros.");
    expect(component).toContain(
      "Los montos se muestran en USD y EUR, o su equivalente en tu moneda al momento de la conversión.",
    );
  });
});
