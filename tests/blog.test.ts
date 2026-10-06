import { describe, it, expect } from 'vitest';
import { blogPosts, blogCategories, blogIntro } from '../src/data/blog';
import { vincularServices } from '../src/data/services';

describe('Blog Data Structure and Integrity', () => {
  it('contains valid intro heading and description', () => {
    expect(blogIntro.heading).toBe('Reflexiones sobre la Arquitectura de los Vínculos');
    expect(blogIntro.description.length).toBeGreaterThan(50);
  });

  it('contains the three required subsections: Pareja, Crianza, Vínculos', () => {
    const categoryIds = blogCategories.map((c) => c.id);
    expect(categoryIds).toEqual(['pareja', 'crianza', 'vinculos']);
  });

  it('has 3 published articles with unique slugs and required fields', () => {
    expect(blogPosts).toHaveLength(3);
    const slugs = blogPosts.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(3);

    for (const post of blogPosts) {
      expect(post.title).toBeTruthy();
      expect(post.slug).toBeTruthy();
      expect(post.readingTime).toContain('min');
      expect(post.tags.length).toBeGreaterThanOrEqual(2);
      expect(post.sections.length).toBeGreaterThanOrEqual(2);
      expect(post.relatedService.serviceId).toBeTruthy();
      expect(post.relatedService.whatsappMessage).toContain('Flor');
    }
  });

  it('each article belongs to a valid category', () => {
    const validCategories = new Set(['pareja', 'crianza', 'vinculos']);
    for (const post of blogPosts) {
      expect(validCategories.has(post.category)).toBe(true);
    }
  });

  it('each article links to an existing vincularService', () => {
    const serviceIds = vincularServices.map((s) => s.id);
    for (const post of blogPosts) {
      expect(serviceIds).toContain(post.relatedService.serviceId);
    }
  });

  it('includes WhatsApp Community link in blog and single post pages', async () => {
    const { readFile } = await import('fs/promises');
    const path = (await import('path')).default;
    const { fileURLToPath } = await import('url');

    const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
    const blogAstro = await readFile(path.join(rootDir, 'src/pages/blog.astro'), 'utf-8');
    const slugAstro = await readFile(path.join(rootDir, 'src/pages/blog/[slug].astro'), 'utf-8');

    expect(blogAstro).toContain('https://chat.whatsapp.com/L7jnhxhIvqb6QbwnFN1PJo');
    expect(slugAstro).toContain('https://chat.whatsapp.com/L7jnhxhIvqb6QbwnFN1PJo');
  });

  it('nav menu links each blog category directly to its article', async () => {
    const { readFile } = await import('fs/promises');
    const path = (await import('path')).default;
    const { fileURLToPath } = await import('url');

    const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
    const headerAstro = await readFile(path.join(rootDir, 'src/components/layout/Header.astro'), 'utf-8');

    expect(headerAstro).toContain('/blog/${posts[0].slug}');
  });
});
