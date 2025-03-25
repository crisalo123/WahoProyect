export interface Calificacion {
    puntajeCalificacion: number;
    parametroEvaluacionId: number;
    criterioEvaluacionId: number;
    usuarioId: number;
    id: number;
    estado: number;
    usuarioAdd: string;
    usuarioUp: string;
    fechaAdd: string; // Si lo deseas, puedes convertirlo a Date en tiempo de ejecución
    fechaUp: string;
  }
  
  export type CalificacionResponse = Calificacion[];
  

  interface Catalogo {
    descripcionCatalogo: string;
    itemId: number;
    entidadId: number;
    id: number;
    estado: number;
    usuarioAdd: string;
    usuarioUp: string | null;
    fechaAdd: string; 
    fechaUp: string | null; 
  }

  export type CatalogoResponse = Catalogo[];


  interface CategoriaLog {
    descripcionCategoriaLog: string;
    id: number;
    estado: number;
    usuarioAdd: string;
    usuarioUp: string | null;
    fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
    fechaUp: string | null; // Igual que fechaAdd
  }

    export type CategoriaLogResponse = CategoriaLog[];  


    interface CategoriaProducto {
        descripcionCategoriaProducto: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string | null;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string | null; // Igual que fechaAdd
      }

    export type CategoriaProductoResponse = CategoriaProducto[];


    interface Chat {
        mensaje: string;
        documentoSoporte: number;
        emisor: number;
        receptor: number;
        documento: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type ChatResponse = Chat[];


    interface Ciudad {
        nombreCiudad: string;
        departamentoId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string | null;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string | null; // Igual que fechaAdd
      }

    export type CiudadResponse = Ciudad[];


    interface CriterioEvaluacion {
        descripcionCriterioEvaluacion: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string | null;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string | null; // Igual que fechaAdd
      }

    export type CriterioEvaluacionResponse = CriterioEvaluacion[];

    interface Departamento {
        nombreDepartamento: string;
        paisId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type DepartamentoResponse = Departamento[];


    interface Dia {
        descripcionDiaLaboral: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type DiaResponse = Dia[];

    interface Domicilio {
        descripcionDomicilio: string;
        usuarioId: number;
        faseDomicilioId: number;
        productoId: number;
        fechaAceptaDomiciliario: string | null; // Considera usar Date si conviertes la cadena a objeto Date
        fechaAceptaEntidad: string | null; // Igual que fechaAceptaDomiciliario
        fechaEntrega: string | null; // Igual que fechaAceptaDomiciliario
        aceptaEntidad: number;
        aceptaDomiciliario: number;
        domicilioExitoso: boolean;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string | null;
        fechaAdd: string; // Igual que fechaAceptaDomiciliario
        fechaUp: string | null; // Igual que fechaAceptaDomiciliario
      }

    export type DomicilioResponse = Domicilio[];

    interface Entidad {
        descripcionEntidad: string;
        tipoEntidadId: number;
        medioPagoId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // o Date si se convierte la cadena
        fechaUp: string;  // o Date si se convierte la cadena
      }

    export type EntidadResponse = Entidad[];

    interface Estado {
        descripcionEstado: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }
        
    export type EstadoResponse = Estado[];

    interface FaseDomicilio {
        descripcionFaseDomicilio: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type FaseDomicilioResponse = FaseDomicilio[];

    interface Horario {
        descripcionHorario: string;
        franjasHorario: any; // Ajusta el tipo según la estructura real de franjasHorario
        horaInicio: string;
        horaFin: string;
        diasLaborales: string;
        usuarioId: number;
        diaId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type HorarioResponse = Horario[];

    interface Item {
        descripcionItem: string;
        cantidadItem: number;
        unidadMedidaItem: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }
        
    export type ItemResponse = Item[];

    interface Log {
        descripcionLog: string;
        categoriaLogId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }
        
    export type LogResponse = Log[];

    interface MedioPago {
        descripcionMedioPago: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }
     
    export type MedioPagoResponse = MedioPago[];

    interface Modulo {
        descripcionModulo: string;
        permisoId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type ModuloResponse = Modulo[];

    interface Notificacion {
        descripcionNotificacion: string;
        enviada: boolean;
        usuarioId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type NotificacionResponse = Notificacion[];

    interface Pais {
        nombrePais: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type PaisResponse = Pais[];

    interface ParametroEvaluacion {
        descripcionParametro: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

    export type ParametroEvaluacionResponse = ParametroEvaluacion[];

    interface Permiso {
        descripcionPermiso: string;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

      export type PermisoResponse = Permiso[];
     
      interface PQRS {
        descripcionPQRS: string;
        usuarioId: number;
        tipoPQRSId: number;
        id: number;
        estado: number;
        usuarioAdd: string;
        usuarioUp: string;
        fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
        fechaUp: string;  // Igual que fechaAdd
      }

        export type PQRSResponse = PQRS[];

        interface Producto {
            descripcionProducto: string;
            stock: number;
            valorProducto: number;
            imagenProducto: number; // Considera cambiar a 'string' si la imagen se maneja como una URL o base64
            categoriaProductoId: number;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar 'Date' si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }

        export type ProductoResponse = Producto[];

        interface Promocion {
            descripcionPromocion: string;
            productoId: number;
            fechaInicioPromocion: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaFinPromocion: string;    // Igual que fechaInicioPromocion
            imagenPromocion: number;      // Ajusta el tipo según corresponda (por ejemplo, string si es una URL)
            codigoPromocional: string;
            tipoPromocionId: number;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string;             // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;              // Igual que fechaAdd
          }

        export type PromocionResponse = Promocion[];

        interface Rol {
            descripcionRol: string;
            moduloId: number;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
            
        export type RolResponse = Rol[];

        interface Saldo {
            saldoInicial: number;
            saldoFinal: number;
            saldoActual: number;
            usuarioId: number;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }

        export type SaldoResponse = Saldo[];

        interface TiempoFase {
            horaCambioFase: string; // Considera usar Date si conviertes la cadena a un objeto Date
            domicilioId: number;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
   
        export type TiempoFaseResponse = TiempoFase[];

        interface TipoEntidad {
            descripcionTipoEntidad: string;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
      
        export type TipoEntidadResponse = TipoEntidad[];

        interface TipoIdentificacion {
            descripcionTipoIdentificacion: string;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
        
        export type TipoIdentificacionResponse = TipoIdentificacion[];

        interface TipoPQRS {
            descripcionTipoPQRS: string;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
   
        export type TipoPQRSResponse = TipoPQRS[];

        interface TipoPromocion {
            descripcionTipoPromocion: string;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }

        export type TipoPromocionResponse = TipoPromocion[];

        interface TipoTransaccion {
            descripcionTipoTransaccion: string;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
        
        export type TipoTransaccionResponse = TipoTransaccion[];

        interface Transaccion {
            descripcionTransaccion: string;
            tipoTransaccionId: number;
            entidadId: number;
            domicilioId: number;
            descripcionAdicional: string;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
      
        export type TransaccionResponse = Transaccion[];


        interface Usuario {
            nombreUsuario: string;
            apellidoUsuario: string;
            telefonoUsuario: number;
            expedicionCedula: string; // Considera usar Date si conviertes la cadena a un objeto Date
            direccionUsuario: string;
            placaMoto: string;
            licenciaConduccion: string;
            horarioUsuario: number;
            formaPago: number;
            login: string;
            password: string;
            documentos: string;
            correo: string;
            circulacion: number;
            causacionPagos: string;
            rolId: number;
            tipoIdentificacionId: number;
            id: number;
            estado: number;
            usuarioAdd: string;
            usuarioUp: string;
            fechaAdd: string; // Considera usar Date si conviertes la cadena a un objeto Date
            fechaUp: string;  // Igual que fechaAdd
          }
        
        export type UsuarioResponse = Usuario[];
      