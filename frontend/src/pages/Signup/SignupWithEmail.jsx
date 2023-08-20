import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect, useRef } from "react";

export default function SignupWithEmail() {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  

  if (error) console.log(error);
  if (user) navigate("/");

  const signUpHandler = async () => {
    const emailInput = email.current;
    const passwordInput = password.current;
    const confirmPasswordInput = confirmPassword.current;

    if (passwordInput !== confirmPasswordInput) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(emailInput, passwordInput);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="mt-16">
      {/* title section */}
      <div className="sm:mx-auto sm:w-full py-2 mb-5">
        <h2 className="text-3xl font-medium text-center text-black-600 capitalize sm:tracking-wide tracking-tight">
          Create a new Derma360 Account!
        </h2>
      </div>

      {/* buttons */}
      <div>
        <p className="text-lg text-center text-gray-700 py-5 mb-5">
          Sign up with your email and a password!
        </p>
        <div className="space-y-6 p-5" data-bitwarden-watching="1">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-neutral-600"
              >
                {" "}
                Email address{" "}
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  placeholder="Your Email"
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={(e) => { email.current = e.target.value }}
                />
              </div>
            </div>

            <div class="space-y-1">
              <label
                for="password"
                class="block text-sm font-medium text-neutral-600"
              >
                {" "}
                Password{" "}
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  placeholder="Your Password"
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={(e) => { password.current = e.target.value }}
                />
              </div>
            </div>

            <div class="space-y-1">
              <label
                for="password"
                class="block text-sm font-medium text-neutral-600"
              >
                {" "}
                Confirm Password{" "}
              </label>
              <div class="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required=""
                  placeholder="Confirm Password"
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={(e) => { confirmPassword.current = e.target.value }}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => signUpHandler()}
              >
                Sign up
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
