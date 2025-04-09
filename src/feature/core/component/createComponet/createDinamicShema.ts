import { z } from 'zod';

export const serviceSchemas = {
    Calificación: z.object({
    puntajeCalificacion: z.number().min(0).max(10).or( z.string().min(1, 'El  campo es obigatorio')),

    parametroEvaluacionId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    criterioEvaluacionId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  Catalogo: z.object({
    descripcionCatalogo: z.string().min(1, 'Descripción requerida'),
    itemId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    entidadId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  CategoriaLog: z.object({
    descripcionCategoriaLog: z.string().min(1, 'Descripción requerida'),
    usuarioAdd: z.string().min(1, 'Usuario requerido'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
 
  CategoriaProducto: z.object({
    descripcionCategoriaProducto: z.string().min(1, 'La descripción es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Chat: z.object({
    mensaje: z.string().min(1, 'El mensaje es obligatorio'),
    documentoSoporte: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    emisor: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    receptor: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    documento: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  Ciudad: z.object({
    nombreCiudad: z.string().min(1, 'El nombre de la ciudad es obligatorio'),
    departamentoId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  Evaluacion: z.object({
    descripcionCriterioEvaluacion: z.string().min(1, 'La descripción del criterio de evaluación es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  Departamento: z.object({
    nombreDepartamento: z.string().min(1, 'El nombre del departamento es obligatorio'),
    paisId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Día: z.object({
    descripcionDiaLaboral: z.string().min(1, 'La descripción del día laboral es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  Entidad: z.object({
    descripcionEntidad: z.string().min(1, 'La descripción de la entidad es obligatoria'),
    tipoEntidadId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    medioPagoId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  Estado: z.object({
    descripcionEstado: z.string().min(1, 'La descripción del estado es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  FaseDomicilio: z.object({
    descripcionFaseDomicilio: z.string().min(1, 'La descripción de la fase de domicilio es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  CriterioEvaluación: z.object({
    descripcionCriterioEvaluacion: z.string().min(1, 'La descripción de la fase de domicilio es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Horario: z.object({
    descripcionHorario: z.string().min(1, 'La descripción del horario es obligatoria'),
    franjaHorario: z.string().min(1, 'La franja horaria es obligatoria'),
    diasLaborales: z.string().min(1, 'Los días laborales son obligatorios'),
    horaInicio: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora de inicio debe estar en formato HH:MM'),
    horaFin: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora de fin debe estar en formato HH:MM'),
    usuarioId: z.number().or(z.string().min(1, 'El campo es obligatorio')),
    diaId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().datetime('La fecha de adición debe ser una fecha y hora válidas en formato ISO 8601'),
  }),

  Item: z.object({
    descripcionItem: z.string().min(1, 'La descripción del ítem es obligatoria'),
    cantidadItem: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    unidadMedidaItem: z.string().min(1, 'La unidad de medida es obligatoria'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

Log: z.object({
    descripcionLog: z.string().min(1, 'La descripción del log es obligatoria'),
    categoriaLogId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  MedioPago: z.object({
    descripcionMedioPago: z.string().min(1, 'La descripción del medio de pago es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Modulo: z.object({
    descripcionModulo: z.string().min(1, 'La descripción del módulo es obligatoria'),
    permisoId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Notificación: z.object({
    descripcionNotificacion: z.string().min(1, 'La descripción de la notificación es obligatoria'),
    enviada: z.boolean(),
    usuarioId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  País: z.object({
    nombrePais: z.string().min(1, 'El nombre del país es obligatorio'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  ParametroEvaluacion: z.object({
    descripcionParametro: z.string().min(1, 'La descripción del parámetro es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Permiso: z.object({
    descripcionPermiso: z.string().min(1, 'La descripción del permiso es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),
  PQRS: z.object({
    descripcionPQRS: z.string().min(1, 'La descripción del PQRS es obligatoria'),
    usuarioId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    tipoPQRSId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Producto: z.object({
    descripcionProducto: z.string().min(1, 'La descripción del producto es obligatoria'),
    stock: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    valorProducto: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    imagenProducto: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    categoriaProductoId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Promoción: z.object({
    descripcionPromocion: z.string().min(1, 'La descripción de la promoción es obligatoria'),
    productoId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaInicioPromocion: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de inicio inválida',
    }),
    fechaFinPromocion: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de fin inválida',
    }),
    imagenPromocion: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    codigoPromocional: z.string().min(1, 'El código promocional es obligatorio'),
    tipoPromocionId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),
  Rol: z.object({
    descripcionRol: z.string().min(1, 'La descripción del rol es obligatoria'),
    moduloId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha inválida',
    }),
  }),

  Saldo: z.object({
    saldoInicial: z.number(),
    saldoFinal: z.number(),
    saldoActual: z.number(),
    usuarioId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  TiempoFase: z.object({
    horaCambioFase: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Hora de cambio de fase inválida',
    }),
    domicilioId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  TipoEntidad: z.object({
    descripcionTipoEntidad: z.string().min(1, 'La descripción del tipo de entidad es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  TipoIdentificacion: z.object({
    descripcionTipoIdentificacion: z.string().min(1, 'La descripción del tipo de identificación es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  TipoPQRS: z.object({
    descripcionTipoPQRS: z.string().min(1, 'La descripción del tipo de PQRS es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  TipoPromoción: z.object({
    descripcionTipoPromocion: z.string().min(1, 'La descripción del tipo de promoción es obligatoria'),
    usuarioAdd: z.string().min(1, 'El usuario que añade es obligatorio'),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  TipoTransacción: z.object({
    descripcionTipoTransaccion: z.string().min(1, 'La descripción del tipo de transacción es obligatoria'),
    usuarioAdd: z.string(),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  }),

  Transaccion: z.object({
    descripcionTransaccion: z.string().min(1, 'La descripción de la transacción es obligatoria'),
    tipoTransaccionId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    entidadId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    domicilioId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    descripcionAdicional: z.string().optional(),
    usuarioAdd: z.string(),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }).optional(),
  }),

   Usuario: z.object({
    nombreUsuario: z.string().min(1, { message: 'El nombre del usuario es obligatorio' }),
    apellidoUsuario: z.string().min(1, { message: 'El apellido del usuario es obligatorio' }),
    telefonoUsuario: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    expedicionCedula: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de expedición de cédula inválida',
    }),
    direccionUsuario: z.string().min(1, { message: 'La dirección del usuario es obligatoria' }),
    placaMoto: z.string().optional(),
    licenciaConduccion: z.string().optional(),
    horarioUsuario: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    formaPago: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    login: z.string().min(1, { message: 'El login es obligatorio' }),
    password: z.string().min(1, { message: 'La contraseña es obligatoria' }),
    documentos: z.string().optional(),
    correo: z.string().email({ message: 'El correo electrónico no es válido' }),
    circulacion: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    causacionPagos: z.string().optional(),
    rolId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    tipoIdentificacionId: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    usuarioAdd: z.string().min(1, { message: 'El usuario que añade es obligatorio' }),
    estado: z.number().or( z.string().min(1, 'El campo es obigatorio')),
    fechaAdd: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Fecha de adición inválida',
    }),
  })
};

