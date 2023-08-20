import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import googleIcon from "../../../assets/google.svg";
import githubIcon from "../../../assets/github.svg";
import emailIcon from "../../../assets/email.svg";

export default function SignUpOptions() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  const signInHandler = async (method) => {
    try {
      if (!method) navigate("/signup/email");
      let user = await method();
      if(user) navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    google: {
      icon: googleIcon,
      text: "Continue with Google",
      altText: "google icon",
      color: "blue",
      method: signInWithGoogle,
    },
    github: {
      icon: githubIcon,
      text: "Continue with GitHub",
      altText: "github icon",
      color: "black",
      method: signInWithGithub,
    },
    email: {
      icon: emailIcon,
      text: "Continue with Email",
      altText: "email icon",
      color: "gray",
      method: null,
    },
  };

  return (
    <div className="space-y-4">
      {Object.keys(options).map((option, idx) => {
        return (
          <button
            type="button"
            className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-100 ease-in-out transform border-2 border-gray-300 rounded-xl hover:bg-blue-50 hover:border-blue-600"
            onClick={() => signInHandler(options[option].method)}
            key={idx}
          >
            <div className="flex items-center justify-center">
              <img
                src={options[option].icon}
                alt={options[option].altText}
                className="w-6 h-6"
              />
              <span className="ml-4 text-xl">{options[option].text}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
