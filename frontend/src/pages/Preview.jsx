import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loadingSvg from "../assets/loading.svg";


export default function Preview() {
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();
  // input file from detect page
  const navData = useLocation();
  const file = navData.state.input  
  const module = navData.state.type

  const imgSrc = URL.createObjectURL(file);

  // handlers
  const handleUpload = () => {
    console.log("sending data for prediction!");
    const formdata = new FormData();
    formdata.set("img", file);
    formdata.append("type", module);
    for (const pair of formdata.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

  
    fetch("https://derma360-onb7dpnlua-em.a.run.app/predict", {
      body: formdata,
      method: "post",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          res.json().then((data) =>{
            console.log(data)
            navigate("/results", { state: {result:data, imgURL:imgSrc, module: module} });
          });

        }
      })
      .catch((err) => console.log(err));

      setLoader(true)
  };

  const handleModelInputChange = (e) => {
    modelType.current = e.target.value;
  };

  return (
    <>
    <div id="preview" className="flex flex-col grow my-auto">
        <div className="w-full grid place-items-center">
          <img src={imgSrc} className="h-auto max-h-80 border-2 border-blue-500 rounded-lg" alt="image-preview" />
        </div>
       
            {/* <Results data={results} /> */}
            {loader ? (
              <div id="loader" className="w-full">
                <img src={loadingSvg} alt="loader" className="h-32 mx-auto" />
              </div>
            ) : (

              <div id="btn-grp" className="my-5 grid grid-rows-2 gap-3">
                <div className="max-w-2xl p-1.5 mx-auto">
                  <div className="mx-auto flex space-x-4">
                    <button
                      onClick={() => navigate(-1)}
                      className="flex items-center justify-center rounded-md px-4 py-2 border-2 border-gray-400 text-gray-500 hover:border-gray-500 "
                    >
                      Cancel
                    </button>
                    <button
                      id="upload-btn"
                      className="flex items-center justify-center text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-400 px-4 py-2 "
                      type="button"
                      onClick={() => handleUpload()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mx-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="mx-1"> Upload </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
      </div>
    </>
  );
}
