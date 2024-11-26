import React, { FC } from "react";

interface props {
  img?: string;
  permission?: string;
  userLogged: string | undefined;
}

const Profile: FC<props> = ({ userLogged, img, permission }) => {
  return (
    <div className="flex justify-center gap-2  items-center ">
      <img
        className="rounded-full h-16"
        src={img}
        alt="Foto do usuário logado"
      />

      <div className="  col-span-2">
        <p className=" col-span-2 text-slate-100">Bem vindo, {userLogged}</p>
        <span className="text-gray-300">{permission}</span>
      </div>
    </div>
  );
};

export default Profile;
