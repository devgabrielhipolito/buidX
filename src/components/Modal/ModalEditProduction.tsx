import {
  createProduction,
  createProductionSchema,
  EditProductinSchema,
} from "../../schemas/createProductionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { useForm } from "react-hook-form";
import CarInforUpdates from "../EditProductions/CarInforUpdates";
import InforProductions from "../EditProductions/InforProductions";
import ButtonReturn from "../../assets/imgs/LinksIcons/ButtonReturn";
import { FC } from "react";
import { CarObject } from "../../data/types/productionTypes";
import { ActionsApi } from "../../types/useQueryApiTypes";

interface modalProps {
  carItem: Pick<
    CarObject,
    "_id" | "marca" | "modelo" | "status" | "funcionario" | "supervisor"
  > | null;
  setModal: React.Dispatch<{
    modal: boolean;
    carItem: null;
  }>;
}

const EditProduction: FC<modalProps> = ({ setModal, carItem }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditProductinSchema>({
    resolver: yupResolver(createProduction.pick(["marca", "modelo"])),
    defaultValues: {
      marca: carItem?.marca,
      modelo: carItem?.modelo,
    },
  });
  const { dispatchAction } = useQueryApi();
  const onsubmit = handleSubmit((updaDate) => {
    const _id = carItem?._id;
    const data = {
      ...updaDate,
      _id,
    };
    dispatchAction({ action: ActionsApi.productionUpdate, data });
  });

  const handleDelete = () => {
    const data = carItem?._id;
    dispatchAction({ action: ActionsApi.productionDelete, data });
  };

  return (
    <section className="absolute inset-0 w-[560px] h-[350px] bg-black m-auto rounded-md ">
      <header className="flex justify-between">
        <h2 className="p-2 text-white font-normal  ">Edite as informações</h2>
        <button onClick={() => setModal({ modal: false, carItem: null })}>
          <ButtonReturn />
        </button>
      </header>
      <div className="flex mt-4">
        <CarInforUpdates
          carItem={carItem}
          control={control}
          error={errors}
          onSubmit={onsubmit}
          register={register}
        />
        <InforProductions />
      </div>
      <div className=" mt-3 text-center font-semibold text-gray">
        <button
          className="p-2 bg-[#2EA451] w-[100px] rounded-md text-sm "
          onClick={onsubmit}
        >
          Atualizar
        </button>
        <button
          onClick={handleDelete}
          className="p-2 w-[100px] ml-5 bg-red-600 rounded-md text-sm text-white"
        >
          Excluir
        </button>
      </div>
    </section>
  );
};

export default EditProduction;
