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

export const collections = {
	posts: portfolioCollection
}
