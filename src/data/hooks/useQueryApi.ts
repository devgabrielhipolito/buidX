import { useState } from "react";
import { dispatchTypes, MappedFetchTypes } from "../../types/useQueryApiTypes";
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

  const [deleteUserApi, { isLoading: isDeletedUser }] =
    useDeleteUserApiMutation();
  const [requestUser] = useRequestUserMutation();

  const authentication = (data: { status: String }): any => {
    const apiTarget = authenticationUser(data);

    apiTarget.then(({ data, error }) => {
      if (data.status === "autenticado") {
        dispatch(authenticationSuccess());
        return;
      }
      console.log(error);
    });
  };

  const createUser = (data: any) => {
    const apiTarget = createUserApi(data);
    apiTarget.then(({ data, error }) => {
      if (data) {
        createEmployee(data);
        createEmployeeSucess();
      }

      console.log(data);
    });
  };

  const mappedFetch: any = {
    // requestUser: {
    //   api: requestUser,
    //   reducer: createEmployeeRequest,
    // },

    authentication: authentication,

    createUser: createUser,
    // productionUpdate: {
    //   api: productionUpdateApi,
    //   reducer: productionUpdate,
    // },

    // productionDelete: {
    //   api: productionDeleteApi,
    //   reducer: productionDelete,
    // },
    // createUser: {
    //   api: createUserApi,
    //   reducer: createEmployee,
    //   reducerSucess: createEmployeeSucess,
    // },
    // deleteUser: {
    //   api: deleteUserApi,
    //   reducer: CREATE_EMPLOYEE_DELETE,
    //   reducerSucess: createEmployeeSucess,
    // },
  };

  const dispatchAction = ({ action, data }: dispatchTypes) => {
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

  return { dispatchAction, isLoading: isAuthLoading };
};
