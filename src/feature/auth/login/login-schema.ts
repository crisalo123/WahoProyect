import { z } from 'zod'

const today = new Date();
const minExpeditionDate = new Date();
minExpeditionDate.setFullYear(today.getFullYear() - 18);

export const loginSchema = z.object({
  numberIdentification: z.string().min(1, 'El nombre de usuario es obligatorio'),
  password: z.string().min(1, 'La contraseña es obligatoria')
})
export type Login = z.infer<typeof loginSchema>



export const FormRegisterUser = z.object({
  nombreUsuario: z.string().min(1, 'Campo obligatorio').refine((data) => /^[a-zA-Z\u00C0-\u017F\s.]+$/.test(data), {
    message: 'Este campo solo permite carácteres alfabéticos'
  }),
  apellidoUsuario: z.string().min(1, 'Campo obligatorio').refine((data) => /^[a-zA-Z\u00C0-\u017F\s.]+$/.test(data), {
    message: 'Este campo solo permite carácteres alfabéticos'
  }),
  tipoIdentificacionId:z
  .string()
  .pipe(z.coerce.number().positive('Campo requerido'))
  .or(z.number().positive('Campo requerido'))
  .nullable()
  .optional(),
  numberIdentification: z
  .string()
  .min(1, 'Campo requerido')
  .max(10, 'Debe contener como máximo 10 caracteres.')
  .refine((data) => /^\d+$/.test(data), {
    message: 'Número documentos debe contener solo números.'
  })
  .or(z.number()),
  expeditionCedula: z.string().min(1, 'La expedición de la cédula es obligatoria'),
  correo: z.string().email('Por favor digita un correo válido').min(1, 'El correo es obligatorio'),
  rolId: z.string().min(1, 'El rol es obligatorio'),
  telefonoUsuario: z.string().min(1, 'El teléfono es obligatorio'),
  direccionUsuario: z.string().min(1, 'La dirección es obligatoria'),
  login: z.string().min(1, 'El login es obligatorio')
})

export type InfoRegisterUser = z.infer<typeof FormRegisterUser>