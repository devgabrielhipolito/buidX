import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticationLogout } from "../../data/redux/actions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authenticationLogout());
    navigate("/");
  }, [dispatch, navigate]);

  return <div>null</div>;
};

export default Logout;
