import React, { useState } from "react";
import { dispatchTypes, MappedFetchTypes } from "../../types/useQueryApiTypes";
import { useDispatch } from "react-redux";
import { useAuthenticationUserMutation } from "../redux/RtkQuery";
import { authenticationRequest, authenticationSuccess } from "../redux/actions";

export const useQueryApi = () => {
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const [authenticationUser, { isLoading: isAuthLoading }] =
    useAuthenticationUserMutation();

  const mappedFetch: MappedFetchTypes = {
    authentication: {
      api: authenticationUser,
      reducer: authenticationRequest,
      reducerSucess: authenticationSuccess,
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
    api.then(({ data, error }) => {
      if (error) {
        return setMessage(error);
      }
      console.log(data);
      setMessage(null);
      dispatch(mappedFetch[action].reducer(data));

      if (mappedFetch[action].reducerSucess) {
        dispatch(mappedFetch[action].reducerSucess(true));
      }
    });
  };
  return { dispatchAction, isLoading: isAuthLoading };
};
