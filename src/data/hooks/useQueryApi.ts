import { useState } from "react";
import {
  dispatchTypes,
  MappedFetchTypes,
  returnType,
} from "../../types/useQueryApiTypes";
import { useDispatch } from "react-redux";
import {
  useAuthenticationUserMutation,
  useCreateUserApiMutation,
  useDeleteUserApiMutation,
  useProductionCreateMutation,
  useProductionDeleteMutation,
  useProductionUpdateApiMutation,
  useRequestUserMutation,
} from "../redux/RtkQuery";
import {
  authenticationFailed,
  authenticationRequest,
  authenticationSuccess,
  createEmployee,
  createEmployeeRequest,
  createEmployeeSucess,
  productionDelete,
  productionRequest,
  productionSuccess,
  productionUpdate,
} from "../redux/actions";
import { CREATE_EMPLOYEE_DELETE } from "../redux/reducers/createEmployeeReducer";
import { reqAuth, resAuth } from "../types/apiTypes";
import { ObjectUser } from "../../types/authenticationTypes";
import { ActionCreatorWithPayload, SerializedError } from "@reduxjs/toolkit";
import {
  fetchBaseQuery,
  FetchBaseQueryError,
  MutationActionCreatorResult,
  MutationDefinition,
} from "@reduxjs/toolkit/query";

interface ApiResponse<T> {
  data?: T;
  message?: FetchBaseQueryError | SerializedError | MessageTyp<T>;
}

interface MessageTyp<T> extends Pick<ApiResponse<T>, "message"> {
  status: number;
  data: {
    error: String;
  };
}

export const useQueryApi = <T>() => {
  const [message, setMessage] = useState<
    FetchBaseQueryError | SerializedError | MessageTyp<T>
  >();
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

  const [deleteUserApi, { isLoading: isDeletedUser }] =
    useDeleteUserApiMutation();
  const [requestUser] = useRequestUserMutation();

  const handleApi = <T>(
    apiCall: Promise<ApiResponse<T>>,
    onSucess: (data: T) => void,
    onError: (
      error: FetchBaseQueryError | SerializedError | MessageTyp<T>
    ) => void
  ) => {
    apiCall.then(({ data, message }) => {
      if (data) {
        onSucess(data);
      }

      if (message) onError(message);
    });
  };

  const authentication = (data: reqAuth) => {
    handleApi(
      authenticationUser(data),
      (responseData) => {
        if (responseData.status === "autenticado") {
          dispatch(authenticationRequest(responseData));
          dispatch(authenticationSuccess());
        }
      },
      (message) => {
        if (message) setMessage(message);
      }
    );
  };

  const createUser = (data: any) => {
    const apiTarget = createUserApi(data);
    apiTarget.then(({ data, error }) => {
      if (data) {
        createEmployee(data);
        createEmployeeSucess();
      }

      console.log(error);
    });
  };

  const mappedFetch: any = {
    //tipar este objeto
    authentication: authentication,
    createUser: createUser,

    // requestUser: {
    //   api: requestUser,
    //   reducer: createEmployeeRequest,
    // },

    // productionUpdate: {
    //   api: productionUpdateApi,
    //   reducer: productionUpdate,
    // },

    // productionDelete: {
    //   api: productionDeleteApi,
    //   reducer: productionDelete,
    // },

    // deleteUser: {
    //   api: deleteUserApi,
    //   reducer: CREATE_EMPLOYEE_DELETE,
    //   reducerSucess: createEmployeeSucess,
    // },
  };

  const dispatchAction = <T>({ action, data }: dispatchTypes<T>) => {
    mappedFetch[action](data);
    console.log(action);
  };

  // const query = ({ action, data }: dispatchTypes) => {
  //   const api = mappedFetch[action].api(data);

  //   api.then(({ data, error }) => {
  //     if (error && mappedFetch[action].reducerFailed) {
  //       const message = error.data?.error;
  //       console.log(message);
  //       dispatch(mappedFetch[action].reducerFailed({ message }));
  //       return setMessage(error);
  //     }
  //     setMessage(null);

  //     dispatch(mappedFetch[action].reducer(data));
  //     if (mappedFetch[action].reducerSucess) {
  //       dispatch(mappedFetch[action].reducerSucess(true));
  //     }
  //   });
  // };

  return { dispatchAction, isLoading: isAuthLoading, message };
};
