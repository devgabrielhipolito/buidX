import { useState } from "react";
import { dispatchTypes, MappedFetchTypes } from "../../types/useQueryApiTypes";
import { useDispatch } from "react-redux";
import {
  useAuthenticationUserMutation,
  useCreateUserApiMutation,
  useProductionCreateMutation,
  useProductionDeleteMutation,
  useProductionUpdateApiMutation,
} from "../redux/RtkQuery";
import {
  authenticationRequest,
  authenticationSuccess,
  createEmployee,
  createEmployeeSucess,
  createEmployeeUpdate,
  productionDelete,
  productionRequest,
  productionSucess,
  productionUpdate,
} from "../redux/actions";

export const useQueryApi = () => {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const [authenticationUser, { isLoading: isAuthLoading }] =
    useAuthenticationUserMutation();
  const [productionCreate, { isLoading: isCreatedProduction }] =
    useProductionCreateMutation();

  const [productionUpdateApi, { isLoading: isUpdateProduction }] =
    useProductionUpdateApiMutation();

  const [productionDeleteApi, { isLoading: isDeleted }] =
    useProductionDeleteMutation();

  const [createUserApi, { isLoading: isCreatedUser }] =
    useCreateUserApiMutation();

  const mappedFetch: MappedFetchTypes = {
    authentication: {
      api: authenticationUser,
      reducer: authenticationRequest,
      reducerSucess: authenticationSuccess,
    },
    createProduction: {
      api: productionCreate,
      reducer: productionRequest,
    },
    productionUpdate: {
      api: productionUpdateApi,
      reducer: productionUpdate,
    },

    productionDelete: {
      api: productionDeleteApi,
      reducer: productionDelete,
    },
    createUser: {
      api: createUserApi,
      reducer: createEmployee,
      reducerSucess: createEmployeeSucess,
    },
  };

  const dispatchAction = ({ action, data }: dispatchTypes) => {
    if (!mappedFetch[action]) {
      return console.log(`A ação ${action} não é valida`);
    }

    query({ action, data });
  };

  const query = ({ action, data }: dispatchTypes) => {
    const api = mappedFetch[action].api(data);
    console.log(data);
    api
      .then(({ data, error }) => {
        if (error) {
          return setMessage(error);
        }
        setMessage(null);
        dispatch(mappedFetch[action].reducer(data));
        if (mappedFetch[action].reducerSucess) {
          dispatch(mappedFetch[action].reducerSucess(true));
        }
      })
      .catch((err) => console.log("err"));
  };
  return { dispatchAction, isLoading: isAuthLoading };
};
