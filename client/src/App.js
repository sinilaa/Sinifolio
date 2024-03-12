import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from "./contexts/UserContext";
import CreateProject from "./pages/CreateProject";
import ProjectPage from "./pages/ProjectPage";
import EditProject from "./pages/EditProject";

function App() {
  return (
    // Providing UserContext using UserContextProvider
    // and setting up routes for different pages
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/edit/:id" element={<EditProject />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
