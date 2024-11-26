interface NavBarProfileProps {
  img?: string;
  permission?: string;
  userLogged: string | undefined;
}

export function NavBarProfile({
  userLogged,
  img,
  permission,
}: NavBarProfileProps) {
  return (
    <div className="flex justify-center    items-center ">
      <img
        className="rounded-full h-16"
        src={img}
        alt="Foto do usuário logado"
      />

      <div className="ml-2">
        <p className=" text-slate-100">Bem vindo, {userLogged}</p>
        <span className="text-gray-300">{permission}</span>
      </div>
    </div>
  );
}
