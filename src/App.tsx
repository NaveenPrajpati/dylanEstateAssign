import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FirstPage from "./pages/FirstPage";
import ListPage from "./pages/ListPage";
import Context from "./contexts/Context";
import ConfirmationPage from "./pages/ConfirmationPage";
import PostPreviewPage from "./pages/PostPreviewPage";

export default function App() {
  return (
    <div className=" bg-white h-screen ">
      <Context>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/previewPage" element={<PostPreviewPage />} />
        </Routes>
      </Context>
    </div>
  );
}
