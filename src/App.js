import { BrowserRouter, Routes, Route } from "react-router-dom";
//გვერდების იმპორტი
import { LandingPage, FormsPage, RecordsPage, ItemPage } from "./pages";
import "./style/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="forms" element={<FormsPage />} />
        <Route path="records" element={<RecordsPage />} />
        <Route path="item" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
