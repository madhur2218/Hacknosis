import { Link } from "react-router-dom";
// images
import docterImg from "../assets/doctor.webp";
import riskBody from "../assets/risk_body.png";
import how1 from "../assets/how1.png";
import how2 from "../assets/how2.png";
import how3 from "../assets/how3.png";
import phoneApp from "../assets/phone_screen.png";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            To conquer the space you must trust.
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the
            experience most certainly changes your perspective.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-7 h-7 text-deep-purple-accent-400"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="13" fill="none" r="9" stroke="currentColor" />
              <path
                d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Our planet</h6>
          <p className="mb-3 text-sm text-gray-900">
            We choose to go to the moon, not because it's easy, but because it's hard.
          </p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Earth
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Space
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Humans
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg className="w-7 h-7 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinecap="round">
              <path
                d="M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
              />
              <path
                d="M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
              />
              <path
                d="M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Another life</h6>
          <p className="mb-3 text-sm text-gray-900">There can be no thought of finishing for "aiming for the stars".</p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Life
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Aliens
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Shrek
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-7 h-7 text-deep-purple-accent-400"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                fill="none"
                stroke="currentColor"
              />
              <ellipse
                cx="19.078"
                cy="4.922"
                fill="none"
                rx="2.5"
                ry="4.95"
                stroke="currentColor"
                transform="translate(2.107 14.932) rotate(-45)"
              />
              <path
                d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                fill="none"
                stroke="currentColor"
              />
              <path
                d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                fill="none"
                stroke="currentColor"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Explore space</h6>
          <p className="mb-3 text-sm text-gray-900">We are all connected to the universe atomically, strong bonds.</p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Infinity
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Stars
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Black Holes
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-7 h-7 text-deep-purple-accent-400"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                fill="none"
                stroke="currentColor"
              />
              <polyline fill="none" points="10 11 10 6 6 2 3 5 7 9" stroke="currentColor" />
              <polyline fill="none" points="15 12 15 17 19 21 22 18 18 14" stroke="currentColor" />
              <path d="M8,23a7,7,0,0,1-7-7" fill="none" stroke="currentColor" />
              <path d="M8,19a3,3,0,0,1-3-3" fill="none" stroke="currentColor" />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">First contact</h6>
          <p className="mb-3 text-sm text-gray-900">For those who have seen the Earth from space or in dreams.</p>
          <ul className="mb-4 -ml-1 space-y-2">
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Listen
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Communicate
            </li>
            <li className="flex items-start">
              <span className="mr-1">
                <svg className="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </span>
              Run
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
};

const HowToSection = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-6">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            How to use <span className="text-blue-800">Derma 360</span>?
          </h1>

          <div class="flex justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-900 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="h-80 px-4 inline-flex items-center justify-center rounded-2xl bg-blue-100 mb-5 flex-shrink-0">
              <img src={how1} alt="howto#1" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Take a photo*</h2>
              <p class="leading-relaxed text-base">
                Keep zoomed at the closest distance (less than 10 cm), keep in focus and center only the skin issue
                (without hair, wrinkles and other objects)
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="h-80 px-4 inline-flex items-center justify-center rounded-2xl bg-blue-100 mb-5 flex-shrink-0">
              <img src={how2} alt="howto#2" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Identify and send</h2>
              <p class="leading-relaxed text-base">
                Send your photo for diagnosis. The system will analyze it and send you a report.**
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="h-80 px-4 inline-flex items-center justify-center rounded-2xl bg-blue-100 mb-5 flex-shrink-0">
              <img src={how3} alt="howto#3" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Receive your Results</h2>
              <p class="leading-relaxed text-base">
                Get the result within 60 seconds and related advice on the next steps to take.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadAppSection = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 my-24 mx-auto flex justify-around items-center border-2 border-blue-100 bg-blue-100 rounded-xl">
        <div className="flex flex-col space-y-5">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 class="text-xs text-blue-800 tracking-widest font-medium title-font mb-1">Derm 360 App</h2>
            <h1 class="md:text-3xl text-2xl font-medium text-gray-900 capitalize">Download App for your mobile now!</h1>
          </div>
          <div class="flex items-center flex-shrink-0 space-x-4">
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span class="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">Download on the</span>
                <span class="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img className="h-80 w-80" src={phoneApp} alt="Phone-App" />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <div className="relative h-[80vh] px-4 mx-auto flex justify-evenly items-center ">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div className="w-96">
              <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Healthcare Project
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 capitalize">
              Get your skin checked
              <br className="hidden md:block" />
              using Machine Learning!
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Stay on top of your skin health.
              <br />
              Check your skin and get instant results within 1 minute.
            </p>
          </div>
          <div className="flex items-center uppercase transition-colors duration-200 font-semibold text-white">
            <Link
              to="/detect/skinBurn"
              className="inline-flex items-center rounded-full py-3 px-4 bg-[#00c7d1] shadow-md hover:shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/50"
            >
              Start Now
            </Link>
          </div>
        </div>
        <div className="sm:flex justify-end h-full hidden">
          <img src={docterImg} className="object-cover object-top" alt="hero-element" />
        </div>
      </div>
      <div className="text-sm italic text-gray-500 text-center">
        * The scan result is not a diagnosis. To obtain an accurate diagnosis and a recommendation for treatment -
        consult your doctor.
      </div>


      <HowToSection />
    </>
  );
}
