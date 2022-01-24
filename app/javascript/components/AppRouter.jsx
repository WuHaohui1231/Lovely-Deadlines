import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LovelyDeadlines from "./LovelyDeadlines";
import TodoPage from "./TodoPage";

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="*" element={<LovelyDeadlines />} />
                <Route path="/todos/:slug" element={<TodoPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
