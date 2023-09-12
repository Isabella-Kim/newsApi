import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  //useParams으로 링크의 URL 파라미터를 이용할 것임
  // .../:category면 category가 URL의 파라미터임
  const params = useParams(); // useParams 훅을 사용하여 category 값을 읽어옴
  //카테고리가 선택되지 않았으면 기본값으로 all을 사용
  const category = params.category || "all";
  return (
    <>
      {/* 카테고리들 */}
      <Categories />
      {/* 해당 카테고리의 NewsList가 나오도록 category를 props로 받아옴 */}
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
