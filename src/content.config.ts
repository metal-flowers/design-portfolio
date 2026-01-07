import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Defining visual-journal as a blog collection
const visualJournal = defineCollection({

  // Load .md and .mdx files in 'src/content/visual-journal'
  loader: glob({
    base: './src/content/visual-journal', 
    pattern: '**/*.{md,mdx}', 
}),
  
  // Type-check frontmatter using schema:
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			image: z.object({
        url: z.string(),
        alt: z.string().optional(),
    })
  .optional(),
      category: z.string().optional(),
      draft: z.boolean(),
      slug: z.string(),
  }),
});

export const collections = { visualJournal }; // must match getCollection()
