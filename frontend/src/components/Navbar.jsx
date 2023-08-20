import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import {auth} from "../firebase-config";
import MoonLoader from "react-spinners/MoonLoader"
import Logo from "./Logo";


const SignIn = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);


  if (error) {
    console.error(error)
  }
  if (loading) {
    return <MoonLoader color="#004FA3" size={21}/>;
  }
  if (user) {
    // console.log(user)
    return (
      <div className="inline-flex items-center my-5 space-x-2 hover:underline cursor-pointer">
        <a href="#" class="block relative">
            <img alt="profile-avatar" src={user.photoURL} class="mx-auto object-cover rounded-full h-8 w-8 border-2 border-blue-900"/>
        </a>
        <a>{user.displayName}</a>
        <button
        onClick={async () => {
          const success = await signOut();
          if (success) {
            alert('You are sign out');
          }
        }}
      >
        Sign out
      </button>
      </div>
    );
  }

  return(
    <div className="space-x-2">
      <Link to="/login">
        <a className="hover:underline">
          Log in
        </a>
      </Link>

      <Link to="/signup">
        <button className="border-2 border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 py-1 px-4 rounded-md">
          Sign up
        </button>
      </Link>
    </div>

  )
}
function Navbar() {
  return (
    <nav className="bg-white w-full flex absolute justify-between items-center mx-auto px-8 h-20 drop-shadow ">
      {/* logo */}
      <div className="inline-flex">
         <Logo />
      </div>

      {/* nav links */}
      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <ul className="inline-flex items-center max-w-full space-x-4">
          <li className="hover:underline">
            <Link to="/detect">Detect</Link>
          </li>
          <li className="hover:underline">
            <Link to="/">How it works</Link>
          </li>
        
          <li>
            <SignIn/>
          </li>
        </ul>
      </div>

      {/* nav buttons */}
      <div className="flex-initial sm:hidden">
        <div className="flex justify-end items-center relative">
          <div className="block">
            <div className="inline relative">
              <button
                type="button"
                className="flex justify-center items-center relative border rounded-full hover:shadow-lg h-10 p-3"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "16px",
                    width: "16px",
                    stroke: "currentcolor",
                    strokeWidth: "3",
                    overflow: "visible",
                  }}
                >
                  <g fill="none" fillRule="nonzero">
                    <path d="m2 16h28"></path>
                    <path d="m2 24h28"></path>
                    <path d="m2 8h28"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
