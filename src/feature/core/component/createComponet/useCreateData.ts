import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { postList } from '../../services/createDocumentService';
import { arrayModules } from '../../const/modules';
import { z } from "zod";
import { serviceSchemas } from './createDinamicShema';


type useProps = {
    label: string ;
    };

export const useCreateData = ({ label}:useProps) => {
     const navigate = useNavigate()
     const newUrlGet = arrayModules.find(module => module.name === label)
     const paramFilter = newUrlGet?.pathPost
      const numberIdentification = localStorage.getItem('user');
      const originalSchema = serviceSchemas[label];
      const schema = originalSchema.omit({ fechaAdd: true, usuarioAdd: true });
    
      type FormValues = z.infer<typeof schema>;
    

          const postCreateForm = async (data: FormValues) =>{
             try {
               const finalData = {
                 ...data,
                 fechaAdd: new Date().toISOString(),
                 usuarioAdd: numberIdentification, 
               }
         
                await postList<FormValues>(finalData, paramFilter as string);
                const result = await Swal.fire({
                 title: "Creación exitosa",
                 text: `El ${label} se ha creado correctamente.`,
                 icon: "success",
                 confirmButtonText: "Aceptar",
               });
           
               if (result.isConfirmed) {
                 navigate(`/home/${label}/listarPage`);
               }
             } catch (error) {
               Swal.fire({
                 title: "Ups!",
                 text: `Error al crear el ${label}. Por favor, tenemos problemas con el servidor`,
                 icon: "error",
               });
             }
           }
         


    return {
        postCreateForm,
        schema,
        

    }
}