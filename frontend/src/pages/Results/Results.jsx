import { useRef } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader"
import Map from "./components/Map";
import Facts from "./components/Facts";

export default function Results() {
    const [viewMap, setViewMap] = new useState(false);
    const [loading, setLoading] = useState(false);
    const userCoord = new useRef(null);
    const [nearbyHospitals, setNearbyHospitals] =  useState(null);

    const navData = useLocation();
    const data = navData.state;
    const labels = data.result.labels;
    const { probabilities, predicted_class_idx } = data.result.modelOutput;
    const predicted_class = labels[predicted_class_idx]

    const handleViewMap = () => {
      setLoading(!loading)

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
              // userCoord.current = [pos.coords.latitude, pos.coords.longitude]
              userCoord.current = [28.5035772,77.0449214]
              setViewMap(true)
              console.log("Location found.");
               
              const map = new google.maps.Map(document.createElement('div'));

              var request = {
                location:  new google.maps.LatLng(userCoord.current[0], userCoord.current[1]),
                rankBy: google.maps.places.RankBy.DISTANCE,
                openNow: true,
                type: ['hospital']

              };

              let service = new google.maps.places.PlacesService(map);
              service.nearbySearch(request, (results, status) => {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                  console.log(results)
                  setNearbyHospitals(results);
                }
                else
                  console.log(`serach ${status}`)
                }
              )

          },
          () => {
            console.log("Location not found.");
          }
        );
      } 
      else 
        // Browser doesn't support Geolocation
        console.log("Browser doesn't support Geolocation");
      
    }

    return (
      <div className="flex flex-col grow lg:w-8/12 mx-auto mt-10">
         <div className="w-full grid place-items-center">
          <img src={data.imgURL} className="h-auto max-h-80 border-2 border-blue-500 rounded-lg" alt="image-preview" />
        </div>

        <div className="w-full grid place-items-center">
          <h1 className="text-2xl font-semibold mb-5">
            Prediction: <span className="capitalize text-blue-400">{predicted_class}</span>
          </h1>
  
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Labels
                </th>
                <th scope="col" className="py-3 px-6">
                  Outputs
                </th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(probabilities).map((prob, idx) =>{ 
                    return (<tr className="bg-white border-b">
                    <th scope="row" className={`py-4 px-6 font-medium ${labels[idx] === predicted_class ? "text-blue-700": "text-gray-900"} whitespace-nowrap  capitalize`}>
                      {labels[idx]}
                    </th>
                    <td className={`py-4 px-6 ${labels[idx] === predicted_class ? "text-blue-700": "text-gray-900"}`}>{prob}%</td>
                  </tr>)
                })
              }
            </tbody>
          </table>
        </div>

        
        <section className="w-full grid place-items-center mt-10">
          <Facts module={data.module} predicted_class_idx={predicted_class_idx}/>
        </section>

        <div className="w-full grid place-items-center my-10">
          { viewMap ?
          <Map coord={userCoord.current} places={nearbyHospitals}/>
          :
            <button
          type="button"
          className="px-2 py-1 text-white lg:text-sm transition-colors duration-200 transform bg-blue-600 rounded-md w-full md:w-1/6 lg:w-1/5 active:bg-blue-400"
          onClick={() => handleViewMap()}
          >
            <div className="flex flex-col items-center justify-center py-1">
            <BarLoader
            color="#fff"
            loading={loading}
            cssOverride={{width:"80%", marginBottom: "5px"}}
            />
            View Nearby Hospitals
            </div>
          
            </button>

          }
        </div>
      </div>
    );
  }