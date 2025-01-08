import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

// Definimos la colección blog a partir de los markdowns en src/collections/blog
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/collections/blog" }),
});

export const collections = { blog };