interface NavBarBrandProps {
  brand?: string;
}

export function NavBarBrand({ brand }: NavBarBrandProps) {
  return <h2 className="text-[50px]  text-white ">{brand}</h2>;
}
