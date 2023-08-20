import {  useNavigate  } from "react-router-dom";
import modulesConfig from "./moduleConfig";


const modules = modulesConfig


function OptionsView(){
  const navigate = useNavigate();

  return(
      <section className="container m-auto ">
        <div className="flex flex-wrap -m-4 justify-evenly">
          {
            modules.map((module, idx) => 
              (
                <div className="p-4 w-1/4 cursor-pointer" key={idx}>
                  <div className="h-full border-2 border-gray-200 hover:shadow-xl border-opacity-60 rounded-xl overflow-hidden"
                    onClick={() => navigate(module.navUrl)}
                  >
                    <img className="w-full object-cover object-center h-72" src={module.imgUrl}/>
                    <div className="p-6 grid place-items-center">
                      <h1 className="text-xl">{module.name}</h1>
                    </div>
                  </div>
                </div>
              )
            )    
          }
          
         
        </div>
      </section>
  )
}



export default function Detect() {

  return(
      <OptionsView/>
      // <Outlet/>
  )
}