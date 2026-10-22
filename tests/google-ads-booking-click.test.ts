import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { describe, it, expect } from "vitest";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readProjectFile = async (relativePath: string) =>
  readFile(path.join(rootDir, relativePath), "utf-8");

describe("Google Ads Cal.com booking click tracking", () => {
  it("uses the configured Google Ads booking click conversion", async () => {
    const config = await readProjectFile("src/config/googleAds.ts");
    expect(config).toContain("export const googleAdsBookingClickSendTo = 'AW-18527963098/uLAACILimKUdENqP6YJF';");
  });

  it("tracks only trusted clicks on booking buttons without cancelling the modal click", async () => {
    const embed = await readProjectFile("src/components/ui/CalEmbed.astro");
    expect(embed).toContain('event.isTrusted || !googleAdsBookingClickSendTo');
    expect(embed).toContain('event.target.closest("[data-cal-link]")');
    expect(embed).toContain('window.gtag("event", "conversion", { send_to: googleAdsBookingClickSendTo });');
    expect(embed.match(/document\.addEventListener\("click"/g)).toHaveLength(1);
    expect(embed).not.toContain("event.preventDefault()");
  });

  it("reuses the existing Google tag instead of injecting a second one", async () => {
    const layout = await readProjectFile("src/layouts/BaseLayout.astro");
    const embed = await readProjectFile("src/components/ui/CalEmbed.astro");
    expect(layout.match(/googletagmanager\.com\/gtag\/js/g)).toHaveLength(1);
    expect(layout.match(/gtag\('config'/g)).toHaveLength(1);
    expect(embed).not.toContain("googletagmanager.com/gtag/js");
  });
});
