import { z } from 'zod'


export const SearchSchema = z.object({
  id: z.number().or(z.string().min(1, { message: 'ingresa el id' }))
})
export type Search = z.infer<typeof SearchSchema>