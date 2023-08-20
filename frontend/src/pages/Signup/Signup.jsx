
import SignUpOptions from "./components/SignUpOptions";
const Signup = () => {
  return (
    <div>
      
        {/* title section */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md py-2 mb-5">
          <h2 className="text-3xl font-normal text-center text-black-600 capitalize sm:tracking-wide tracking-tight">
            Create a new account!
          </h2>
        </div>

        {/* buttons */}
        <div >
          <p className="text-lg text-center text-gray-700">Sign up with one of the following:</p>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
            <SignUpOptions/>
          </div>
        </div>
        
      </div>
    );
};

export default Signup;
