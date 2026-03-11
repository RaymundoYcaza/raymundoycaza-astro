// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      domainGroup: z.string().optional(),
      cluster: z.boolean().optional(),
      featuredImage: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Raymundo Ycaza"),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});

const testimonialsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    testimonial: z.string().optional(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const excelFunctions = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    nameAlternatives: z.array(z.string()),
    syntax: z.string(),
    description: z.string(),
    group: z.string(),
    volatile: z.boolean(),
    availableSince: z.string(),
    availableIn: z.array(z.string()),
    relatedFunctions: z.array(z.string()),
    useCases: z.array(z.string()),
    avoidCases: z.array(z.string()),
    example: z.object({
      formula: z.string(),
      result: z.string(),
      context: z.string(),
    }),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  testimonios: testimonialsCollection,
  "excel-functions": excelFunctions,
};
