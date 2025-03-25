import { z } from 'zod'


export const SearchSchema = z.object({
  id: z.number().or(z.string())
})
export type Search = z.infer<typeof SearchSchema>