import { useState } from "react";
import { dispatchTypes, MappedFetchTypes } from "../../types/useQueryApiTypes";
import { useDispatch } from "react-redux";
import {
  useAuthenticationUserMutation,
  useProductionCreateMutation,
  useProductionUpdateApiMutation,
} from "../redux/RtkQuery";
import {
  authenticationRequest,
  authenticationSuccess,
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

  const mappedFetch: MappedFetchTypes = {
    authentication: {
      api: authenticationUser,
      reducer: authenticationRequest,
      reducerSucess: authenticationSuccess,
    },
    createProduction: {
      api: productionCreate,
      reducer: productionRequest,
      reducerSucess: productionSucess,
    },
    productionUpdate: {
      api: productionUpdateApi,
      reducer: productionUpdate,
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
    api.then(({ data, error }) => {
      if (error) {
        return setMessage(error);
      }
      setMessage(null);
      console.log(data)
      dispatch(mappedFetch[action].reducer(data));
      if (mappedFetch[action].reducerSucess) {
        dispatch(mappedFetch[action].reducerSucess(true));
      }
    });
  };
  return { dispatchAction, isLoading: isAuthLoading };
};
