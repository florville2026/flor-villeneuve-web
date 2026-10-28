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
  it("keeps the visible USD amounts separate from the PayPal euro charge", () => {
    expect(sessionPricing.pareja).toMatchObject({ amountUsd: 110, amountEur: 110 });
    expect(sessionPricing["crianza-familia"]).toMatchObject({ amountUsd: 125, amountEur: 130 });
    expect(sessionPricing["proceso-vincular"]).toMatchObject({ amountUsd: 95, amountEur: 95 });
  });

  it.each(bookingPages)("shows pricing above and directly below the Cal.com button in %s", async (pagePath) => {
    const page = await readFile(path.join(rootDir, pagePath), "utf-8");

    expect(page).toContain('placement="primary"');
    expect(page).toContain('placement="after-booking"');
    expect(page).toContain("data-cal-link={service.calLink}");
  });

  it("shows the USD amount and the agreed currency note", async () => {
    const component = await readFile(
      path.join(rootDir, "src/components/ui/SessionPricing.astro"),
      "utf-8",
    );

    expect(component).toContain("text-center");
    expect(component).toContain("US$ ${pricing.amountUsd}");
    expect(component).toContain("max-w-[30rem]");
    expect(component).toContain("Montos expresados en USD y EUR.");
    expect(component).toContain(
      "Los montos se muestran en USD y EUR, o su equivalente en tu moneda al momento de la conversión.",
    );
    expect(component).not.toContain("amountEur");
    expect(component).not.toContain("Precio en euros pendiente de confirmar");
  });
});
