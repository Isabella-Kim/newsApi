// 해당 페이지의 카테고리를 props로 받아온다.
// axios를 이용해 API를 호출하고 각 데이터를 map 메서드를 통해 NewsItem 컴포넌트로 가공한다.
// loading State를 만들어 loading = true일 경우에는 대기중으로 표시하고 false일 때는 데이터를 표시함

import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// API KEY
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

//카테고리를 props로 받아옴
const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    );
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 .response 값이 설정되지 않았을 때
  if (!response) {
    // alert('에러발생')
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsList>에러 발생!</NewsList>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
