// 해당 페이지의 카테고리를 props로 받아온다.
// axios를 이용해 API를 호출하고 각 데이터를 map 메서드를 통해 NewsItem 컴포넌트로 가공한다.
// loading State를 만들어 loading = true일 경우에는 대기중으로 표시하고 false일 때는 데이터를 표시함

import React, { useState, useEffect } from "react";
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
//usePromise는 loading, resolved, error을 반환하는 함수임.
//구조분해로 깔끔하게 할당해주고
const NewsList = ({ category }) => {
  console.log(category);
  const [loading, response, error] = usePromise(() => {
    //이 밑은 promiseCreator의 코드.

    // 카테고리의 주소를 정해주는 변수
    const query = category === "all" ? "" : `&category=${category}`;

    //데이터를 가져오는 함수(promiseCreator가 뱉는 값)
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
    );
  }, [category]);
  //category가 달라질 때마다 렌더링해야함. 의존 배열에 카테고리 넣어줌

  // 로딩중일 때
  if (loading) {
    return <NewsListBlock>대기중</NewsListBlock>;
  }
  //아직 response 값이 설정되지 않았을 때(article 값이 null일 때)
  if (!response) {
    return null;
  }
  // 아직 response 값이 설정되지 않을때(에러 발생)
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  // article 값이 유효할 때 (article 값이 있음)
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {/* map으로 데이터 나눠서 컴포넌트 만들기 */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
