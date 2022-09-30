import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/themeContext/themeContext";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <ChatContextProvider>
          <ThemeProvider>
            <Layout>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route exact path="/" element={<Home />} />
                </Route>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </ChatContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
