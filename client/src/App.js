import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionAsk from "./pages/QuestionAsk";
import Questions from "./pages/Questions";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Questions />} />
                    <Route path="/ask" element={<QuestionAsk />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
