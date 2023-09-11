import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage";

function App() {
  return (
    <Routes>
      //기본 페이지 - 전체보기(all)
      <Route path="/" element={<NewsPage />} />
      //카테고리 페이지 - 카테고리를 누르면 해당 카테고리로 이동
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
