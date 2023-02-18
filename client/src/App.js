import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionAsk from "./pages/QuestionAsk";
import Questions from "./pages/Questions";
import QuestionEdit from "./pages/QuestionEdit";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Questions />} />
                    <Route path="/ask" element={<QuestionAsk />} />
                    <Route path="/edit" element={<QuestionEdit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
