import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/themeContext/themeContext";
// import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/home" element={<Home />} />

              {/* <Route element={<PrivateRoutes />}>
                <Route exact path="/home" element={<Home />} />
              </Route> */}
            </Routes>
          </Layout>
        </ThemeProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
