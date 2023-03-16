/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IProtectedRoutesProps{
    children: React.ReactNode;
}

//Proteção de rotas - autenticação lado cliente
const ProtectedRoutes = ({children}: IProtectedRoutesProps) => {
  const user = {} //
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return (
    <>{user ? children : null}</>
  )
}

export default ProtectedRoutes