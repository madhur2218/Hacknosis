import { Link } from "react-router-dom";

const Logo = ({styles, textSize}) => {
  return (
    <div className={`select-none cursor-pointer group duration-75 ${styles}`}>
      <Link to="/">
      <div className="hidden md:block">
        <h1 className={`${textSize ? textSize:"text-xl"} font-bold uppercase text-transparent text-blue-600 bg-clip-text bg-gradient-to-bl from-blue-500 via-blue-600 to-blue-700`} >
          Derma360<sup className="text-blue-700 group-hover:animate-ping">+</sup>
        </h1>
      </div>

      <div className="block md:hidden">
        <h1 className={`${textSize ? textSize:"text-xl"} text-2xl font-bold uppercase text-blue-600 `}>
          Derma360<sup className="text-blue-700">+</sup>
        </h1>
      </div>
      </Link>
    </div>
  );
};


export default Logo;