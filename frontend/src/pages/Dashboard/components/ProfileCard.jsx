import { auth } from "../../../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";


const ProfileCard = () => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const [user, loading, error] = useAuthState(auth);
    setLoading(loading);
    if (error) console.error(error);

    if (user) {
      console.log(user);
      setUser(user);
    }
  });

  return (
    <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
      <MoonLoader color="#004FA3" loading={loading} />
     { user ? <div class="flex-row gap-4 flex justify-center items-center">
        <div class="flex-shrink-0">
          <a href="#" class="block relative">
            <img
              alt="profile-avatar"
              src={user.photoURL}
              class="mx-auto object-cover rounded-full h-16 w-16 "
            />
          </a>
        </div>
        <div class=" flex flex-col">
          <span class="text-gray-600 dark:text-white text-lg font-medium">
            {user.displayName}
          </span>
          <span class="text-gray-400 text-xs">FREE</span>
        </div>
      </div>: null}
    </div>
  );
};


export default ProfileCard;