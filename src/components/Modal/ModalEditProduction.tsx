import {
  createProduction,
  createProductionSchema,
  EditProductinSchema,
} from "../../schemas/createProductionSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryApi } from "../../data/hooks/useQueryApi";
import { useForm } from "react-hook-form";
import CarInforUpdates from "../layouts/development/FormEditProductions/CarInforUpdates";
import InforProductions from "../layouts/development/FormEditProductions/InforProductions";
import ButtonClose from "../../assets/imgs/LinksIcons/ButtonClose";
import { FC, useContext } from "react";
import { CarObject } from "../../data/types/productionTypes";
import { ActionsApi } from "../../types/useQueryApiTypes";
import { ModalProps } from "../../types/modalPropsTypes";
import ErrorMessage from "../Alerts/ErrorMessage";
import { useSelector } from "react-redux";
import { rootState } from "../../data/redux/reducers";
import { TableContext } from "../../data/context/TableProvider";

const ModalEditProduction = () => {
  const { data, setData } = useContext(TableContext);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditProductinSchema>({
    resolver: yupResolver(createProduction.pick(["marca", "modelo"])),
    defaultValues: {
      marca: data.value?.marca,
      modelo: data.value?.modelo,
    },
  });
  const { dispatchAction } = useQueryApi();

  const onsubmit = handleSubmit((updaDate) => {
    const _id = data.value?._id;
    const dataObject = {
      ...updaDate,
      _id,
    };
    dispatchAction({ action: ActionsApi.productionUpdate, data: dataObject });
  });

  const message = useSelector(
    (state: rootState) => state.createEmployee.message
  );

  const handleDelete = () => {
    const item = data.value?._id;
    dispatchAction({ action: ActionsApi.productionDelete, data: item });
  };

  return (
    <section className="absolute inset-0 w-[560px] h-[400px] bg-black m-auto rounded-md ">
      <header className="flex justify-between">
        <h2 className="p-2 text-white font-normal  ">Edite as informações</h2>
        <button onClick={() => setData({ modal: false, value: null })}>
          <ButtonClose />
        </button>
      </header>
      <div className="flex mt-4">
        <CarInforUpdates
          data={data.value}
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
      <ErrorMessage error={errors} message={message} />
    </section>
  );
};

export default ModalEditProduction;
