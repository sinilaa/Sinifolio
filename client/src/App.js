import 'react-quill/dist/quill.snow.css';
import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import ProjectsPage from "./pages/ProjectsPage";
import LoginPage from "./pages/LoginPage";
import {UserContextProvider} from "./contexts/UserContext";
import CreateProject from "./pages/CreateProject";
import ProjectPage from "./pages/ProjectPage";
import EditProject from "./pages/EditProject";
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    // Providing UserContext using UserContextProvider
    // and setting up routes for different pages
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateProject />} />
          <Route path="/edit/:id" element={<EditProject />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
