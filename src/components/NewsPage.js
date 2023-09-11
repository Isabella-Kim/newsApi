import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams(); // useParams 훅을 사용하여 category 값을 읽어옴

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
