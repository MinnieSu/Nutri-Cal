import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
