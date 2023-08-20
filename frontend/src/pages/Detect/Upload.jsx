import uploadIcon from "../../assets/upload.png";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CameraView({ handlePreview }) {
  let capturedFile = null;

  function CameraViewBtn() {
    const [isTaken, setTaken] = useState(false);

    const vid = document.querySelector("#video");
    const canvas = document.querySelector("canvas");

    const captureImage = () => {
      vid.pause();
      canvas.getContext("2d").drawImage(vid, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        let file = new File([blob], "camera-img.png", { type: "image/png" });
        capturedFile = file;
      });
      setTaken(true);
    };

    return isTaken ? (
      <div className="flex justify-evenly items-center w-full space-x-6">
        <button
          type="button"
          className="px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md w-1/2 active:bg-blue-400"
          onClick={() => {
            vid.play();
            setTaken(false);
          }}
        >
          Retake
        </button>
        <button
          type="button"
          className="px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md w-1/2 active:bg-blue-400"
          onClick={() => handlePreview(capturedFile)}
        >
          Confirm
        </button>
      </div>
    ) : (
      <button
        type="button"
        className="px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md w-1/2 active:bg-blue-400"
        onClick={captureImage}
      >
        Click
      </button>
    );
  }

  const [isOpen, setOpen] = useState(false);
  const [stream, setStream] = useState(null);
  // const vid = useRef(null);

  useLayoutEffect(() => {
    const vid = document.querySelector("#video");
    if (isOpen && stream) {
      vid.style = "display: block";
      vid.srcObject = stream;
      vid.play();
    } else {
      vid.style = "display: hidden";
      vid.pause();
    }
  });

  const startCamera = async () => {
    let vidStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false,
    });
    setOpen(true);
    setStream(vidStream);
  };

  return (
    <>
      <video
        id="video"
        className="hidden rounded-lg border-2 border-blue-800 mb-5"
      />
      <canvas className="hidden" />
      {!isOpen ? (
        <button
          id="view-camera"
          type="button"
          className="flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md sm:w-auto sm:mx-1 hover:bg-blue-400"
          onClick={startCamera}
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span className="mx-1"> Camera </span>
        </button>
      ) : (
        <>
          <CameraViewBtn />
          <button
            className="mt-6 rounded-lg  hover:bg-gray-200 w-1/4 py-1"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </>
      )}
    </>
  );
}

export default function Upload() {
  const navigate = useNavigate();
  const { module } = useParams();

  const previewPage = (file) => {
    navigate("/detect/preview", {
      state: {
        input: file,
        type: module,
      },
    });
  };

  const dragDrop = (e) => {
    e.preventDefault();

    console.log("File(s) dropped");
    let file = null;

    // Using DataTransferItemList interface to access the file(s)
    if (e.dataTransfer.items) {
      const capture = e.dataTransfer.items[0];
      if (capture.kind === "file") {
        file = capture.getAsFile();
      }
    } else {
      file = dataTransfer.files[0];
    }

    if (file) previewPage(file);
  };

  const browseFiles = () => {
    document.getElementById("file").click();
  };

  const inputFileChange = (e) => {
    console.log("File(s) selected");
    const file = e.target.files[0];
    if (file) previewPage(file);
  };

  const pasteFile = (e) => {
    e.preventDefault();
    console.log("pasted");
    const file = e.clipboardData.files[0];
    if (file) previewPage(file);
  };

  const demoImg = async (e) => {
    // prevent other click events from firing
    console.log()
    e.stopPropagation();
    let file = null;
    switch (module) {
      case "skin-burn":
        file = await fetch(
          "https://i.imgur.com/pVVfmLt.png"
        ).then((res) => res.blob());
        break

      case "pox-viruses":
        file = await fetch(
          "https://i.imgur.com/p1IWIqi.png"
        ).then((res) => res.blob());
        break

      case "skin-cancer":
        file = await fetch(
          "https://i.imgur.com/pVVfmLt.png"
        ).then((res) => res.blob());
        break

    }

    if(file) previewPage(file);
  };

  return (
    <div className="flex flex-col grow" onPaste={pasteFile}>
      {/* <!-- intro box --> */}
      <div className="w-full md:w-2/4 my-5 space-y-2">
        <h4 className="text-center md:text-left text-xl text-blue-600 font-bold">
          Let's Begin!
        </h4>
        <p className="text-center md:text-left leading-none text-gray-500 ">
          Add a photo to begin detection. You can upload photo from your device
          or take a photo with camera.
        </p>
      </div>

      {/* Inputs */}
      <div className="flex grow flex-col">
        {/* <!-- upload box --> */}
        <div
          className="grow border-2 border-dashed border-gray-200 grid place-items-center transition-colors rounded-lg hover:bg-gray-100 hover:border-gray-500 cursor-pointer h-96"
          id="drop-zone"
          // prevents the default browser behavior of opening the file in a new tab
          onDragOver={(e) => e.preventDefault()}
          onDrop={dragDrop}
          // onClick={browseFiles}
        >
          <form>
            <div className="p-2 flex flex-col justify-center items-center">
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                id="file"
                name="img"
                style={{ display: "none" }}
                onChange={inputFileChange}
              />
              <div className="flex justify-center items-center">
                <img src={uploadIcon} alt="upload-icon" className="h-16" />
              </div>
              <div className="select-none text-center">
                <strong>
                  Drop your image here, or{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline"
                    id="browse-button"
                    onClick={browseFiles}
                  >
                    Browse
                  </a>
                </strong>
                <p>supports .PNG, .JPEG/.JPG & .JIFI only</p>
                <a id="demo-data" onClick={demoImg}>
                  Or, use a{" "}
                  <span className="text-blue-400 hover:underline">
                    demo image
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>

        <hr className="my-4" />

        <div className="grow border-2 border-gray-200 grid place-items-center transition-colors rounded-lg hover:bg-gray-100 hover:border-gray-500 cursor-pointer px-2 py-0 sm:p-10">
          <div className="grid place-items-center">
            <CameraView handlePreview={previewPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
