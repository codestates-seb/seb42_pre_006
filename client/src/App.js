import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionAsk from "./pages/QuestionAsk";
import Questions from "./pages/Questions";
import QuestionEdit from "./pages/QuestionEdit";
import UsersPersonalPage from "./pages/UsersPersonalPage";
import Tags from "./pages/Tags";
import Users from "./pages/Users";

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
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
