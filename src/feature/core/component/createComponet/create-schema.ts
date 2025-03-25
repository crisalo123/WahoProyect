


import { z } from 'zod'




export const CreateFormSchema = z.object({
  calificacion: z.string().min(1, 'La calificación es obligatoria'),
  parametro: z.string().min(1, 'El parámetro es obligatorio'),
  criterio: z.string().min(1, 'El criterio es obligatorio')
})
export type CreateForm = z.infer<typeof CreateFormSchema>