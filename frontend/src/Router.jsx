import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Detect from "./pages/Detect/Detect";
import Upload from "./pages/Detect/Upload";
import Preview from "./pages/Preview";
import Results from "./pages/Results/Results";
import LoginLayout from "./Layouts/LoginLayout";
import SignupLayout from "./Layouts/SignUpLayout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SignupWithEmail from "./pages/Signup/SignupWithEmail";
import Dashboard from "./pages/Dashboard/Dashboard";



// routes
const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/detect/:module" element={<Upload />} />
          <Route path="/detect/preview" element={<Preview />} />
          <Route path="/results" element={<Results />} />
          {/* <Route path="/dashboard" element={<Dashboard/> } /> */}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
  
        <Route path="/login" element={<LoginLayout/>}>
          <Route path="" element={<Login />} />
        </Route>
        
        <Route path="/signup" element={<SignupLayout/>}>
          <Route path="" element={<Signup />} />
          <Route path="/signup/email" element={<SignupWithEmail />} />
        </Route>
      </>
    )
  );
  

export default router;