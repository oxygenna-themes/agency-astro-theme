import { z, defineCollection } from 'astro:content'

const portfolioCollection = defineCollection({
	schema: () =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			description: z.string(),
			coverImage: z.string(),
			image: z.string(),
			previewLink: z.string(),
			buyLink: z.string()
		})
})

const blogCollection = defineCollection({
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

export const collections = {
	cards: portfolioCollection,
	posts: blogCollection
}
