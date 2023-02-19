import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionAsk from "./pages/QuestionAsk";
import Questions from "./pages/Questions";
import QuestionEdit from "./pages/QuestionEdit";
import UsersPersonalPage from "./pages/UsersPersonalPage";
import Tags from "./pages/Tags";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Questions />} />
                    <Route path="/ask" element={<QuestionAsk />} />
                    <Route path="/edit" element={<QuestionEdit />} />
                    <Route path="/users/1" element={<UsersPersonalPage />} />
                    <Route path="/tags" element={<Tags />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
