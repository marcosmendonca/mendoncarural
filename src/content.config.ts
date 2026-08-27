import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Crédito Rural','Regularização Ambiental','Regularização Fundiária','Projetos Agropecuários','Georreferenciamento']),
    author: z.string().default('Mendonça Consultoria Rural'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    relatedService: z.string().optional(),
    keywords: z.array(z.string()).default([])
  })
});

export const collections = { blog };
