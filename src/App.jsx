import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Loginpage2 from "./components/Loginpage2";
import MovieHome from "./components/MovieHome";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Signuppage2 from "./components/Signuppage2";
import Plan from "./components/Plan";
import PlanForm from "./components/PlanForm";
import Pay from "./components/Pay";
import { EmailProvider } from "./components/EmailContext";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";

const App = () => {

  return (
    <BrowserRouter>
      <EmailProvider>
        <AuthProvider>
          <Routes>
            <Route path="/user" element={<PrivateRoute />}>
              <Route path="moviehome" element={<MovieHome />} />
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Login />} />
            </Route>

            <Route path="/login" element={<Loginpage2 />} />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/signupform" element={<Signuppage2 />} />
            <Route path="/plans" element={<Plan />} />
            <Route path="/planform" element={<PlanForm />} />
            <Route path="/payment" element={<Pay />} />
            {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
          </Routes>
        </AuthProvider>
      </EmailProvider>
    </BrowserRouter>
  );
};
export default App;
