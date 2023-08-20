import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Outlet } from "react-router-dom";

function SignUpLayout() {
  return (
    <div className="flex flex-wrap w-full h-screen overflow-hidden bg-[#FCFCFC]">
      <div className="grow flex justify-center">
        <section className="mt-16">
          <div className="flex flex-col justify-between py-5 sm:px-6 lg:px-8 space-y-6">
            <div className="mx-auto max-w-md py-2">
              <Logo textSize={"text-4xl"} />
            </div>

            <Outlet />

            {/* footer */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUpLayout;
