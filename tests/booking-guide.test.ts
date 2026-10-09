import path from "path";
import { fileURLToPath } from "url";
import { readFile, access } from "fs/promises";
import { describe, it, expect } from "vitest";
import { faqCategories } from "../src/data/faqs";
import { bookingGuideData } from "../src/data/bookingGuide";

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const readProjectFile = async (relativePath: string) => {
  const fullPath = path.join(rootDir, relativePath);
  return readFile(fullPath, "utf-8");
};

describe("Booking and Payment Guide", () => {
  it("renders key content elements in como-reservar-y-pagar.astro", async () => {
    const content = await readProjectFile("src/pages/como-reservar-y-pagar.astro");

    expect(content).toContain('title={bookingGuideData.title}');
    expect(content).toContain('canonical="/como-reservar-y-pagar"');
    expect(content).toContain("bookingGuideData.importantNote.highlight");
    expect(content).toContain("currencyNotice");
    expect(content).toContain("whatsappHelpUrl");
    expect(content).toContain("/servicios");
  });

  it("contains all required steps, payment options, and currency details in bookingGuideData", () => {
    expect(bookingGuideData.title).toBe("Cómo reservar y pagar tu sesión");
    expect(bookingGuideData.steps).toHaveLength(6);
    expect(bookingGuideData.importantNote.highlight.toLowerCase()).toContain(
      "sin necesidad de iniciar sesión en paypal",
    );
    expect(bookingGuideData.currencyNotice.description).toContain(
      "dólares estadounidenses (USD)",
    );
    expect(bookingGuideData.cardCallout.text).toContain(
      "¿No tenés PayPal? Elegí esta opción para pagar con tarjeta.",
    );
    expect(bookingGuideData.paymentOptions[0].title).toContain("Opción 1: pagar con PayPal");
    expect(bookingGuideData.paymentOptions[1].title).toContain("Opción 2: pagar con tarjeta");
    expect(bookingGuideData.steps[5].description).toContain(
      "recibirás por email la confirmación de tu reserva",
    );
  });

  it("verifies screenshots exist in public/img/guia", async () => {
    const requiredImages = [
      "public/img/guia/pantalla-pago-metodos.png",
      "public/img/guia/pantalla-datos-reserva.png",
      "public/img/guia/pantalla-seleccion-horario.png",
    ];

    for (const imgPath of requiredImages) {
      const fullPath = path.join(rootDir, imgPath);
      await expect(access(fullPath)).resolves.toBeUndefined();
    }
  });

  it("includes payment and currency questions in faqs.ts", () => {
    const dinamicaCategory = faqCategories.find((c) => c.id === "dinamica-general");
    expect(dinamicaCategory).toBeDefined();

    const paymentFaq = dinamicaCategory?.items.find((item) =>
      item.question.includes("¿Cómo se realiza el pago?"),
    );
    expect(paymentFaq).toBeDefined();
    expect(paymentFaq?.paragraphs.join(" ")).toContain("/como-reservar-y-pagar");
    expect(paymentFaq?.paragraphs.join(" ")).toContain("PayPal o con tarjeta");

    const currencyFaq = dinamicaCategory?.items.find((item) =>
      item.question.includes("¿En qué moneda se realizan los pagos?"),
    );
    expect(currencyFaq).toBeDefined();
    expect(currencyFaq?.paragraphs.join(" ")).toContain("dólares estadounidenses (USD)");
  });

  it("includes updated guide link in service pages", async () => {
    const serviceIndex = await readProjectFile("src/pages/servicios/index.astro");
    expect(serviceIndex).toContain("¿Es tu primera reserva?");
    expect(serviceIndex).toContain("/como-reservar-y-pagar");

    const parejaPage = await readProjectFile("src/pages/servicios/pareja.astro");
    expect(parejaPage).toContain("¿Es tu primera reserva?");
    expect(parejaPage).toContain("/como-reservar-y-pagar");
  });

  it("includes guide link in Header and Footer navigation", async () => {
    const header = await readProjectFile("src/components/layout/Header.astro");
    expect(header).toContain("/como-reservar-y-pagar");

    const footer = await readProjectFile("src/components/layout/Footer.astro");
    expect(footer).toContain("/como-reservar-y-pagar");
  });
});
