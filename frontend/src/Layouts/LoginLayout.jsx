import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

function LoginLayout() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="m-5 grow grid place-items-center">
        <Logo styles="absolute top-5 left-5" textSize={"text-3xl"}/>
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
