import NavBar from "@/components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom"


const ErrorPage = () => {

  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="pl-5">
        <h1 className="text-3xl font-bold">Oops...</h1>
        <p className="text-lg font-semibold">{isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error occured'}</p>
      </div>
    </>
  )
}

export default ErrorPage