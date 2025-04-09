import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui";
import { InputField } from "../../ui/InputField";
import { CiSaveDown1 } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { serviceSchemas } from "./createDinamicShema";
import { useCreateData } from "./useCreateData";




type CreateComponentProps = {
  label: string | undefined;
};

export const CreateComponent: React.FC<CreateComponentProps> = ({ label }) => {


  if (!label || !serviceSchemas[label]) {
    return <div>Error: No se encontró un esquema para "{label}"</div>;
  }

  const { schema, postCreateForm } = useCreateData({ label   });
 
  type FormValues = z.infer<typeof schema>;

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: schema ? zodResolver(schema) : undefined,
  });


  if (!schema) {
    return <div>Error: No se encontró un esquema para "{label}"</div>;
  }

  
  const fields = schema instanceof z.ZodObject ? Object.keys(schema.shape) : [];

  const location = useLocation();
  const isUpdatePage = location.pathname.includes("/actualizarPage");

  const handleReset = () => {
    reset(); 
  };

 


 
  const onSubmit = async (data: FormValues) => {
     postCreateForm(data)
  };

  return (
    <div className="mt-1">
      <h1 className="text-xl bg-primary-50 h-11 pl-2 pt-2 rounded-md">
        {`${isUpdatePage ? "Actualizar" : "Crear"} ${label}`}
      </h1>
      <form onSubmit={handleSubmit(onSubmit,errors => console.log(errors)) }>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-10 pt-14 md:border-2 p-3 border-primary-200 h-80">
          {fields.map((field) => (
            <div key={field}>
              <label>{field.toLocaleUpperCase()}</label>
              <Controller
                name={field}
                control={control}
                render={({ field }) => {
                  const fieldType =
                    schema instanceof z.ZodObject && schema.shape[field.name]._def.typeName === "ZodNumber"
                      ? "number"
                      : "text";
                  return (
                    <InputField
                      {...field}
                      type={fieldType}
                      className="border p-2 rounded w-full"
                      maxLength={fieldType === "text" ? 50 : 5}
                     
                    />
                  );
                }}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">
                  {errors[field]?.message?.toString()}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-full justify-center space-x-3 md:space-x-0 md:justify-between mx-auto flex mt-10">
          <div>
            <Button
              onClick={handleReset}
              type="button"
              className="w-44 h-14 rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110"
            >
              <ImCancelCircle /> Cancelar
            </Button>
          </div>
          <div>
            <Button
              type="submit"
              className="w-44 h-14 rounded-md bg-gradient-to-b from-[#a20f5c] to-[#d53287] text-white transition-all hover:brightness-110"
            >
              <CiSaveDown1 /> Guardar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
