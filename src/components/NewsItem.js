// 뉴스항목을 담당하는 컴포넌트
// 기사 데이터로 article을 props로 받아와서 title, description, url, urlToImage를 각 태그에 넣어줌

import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5 rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  // article을 prop로 받아온다.
  // article에는 'title', 'description', 'url', 'urlToImage'의 정보가 들어있음
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {/* urlToImage가 있는 경우: 썸네일 요소 형성 */}
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}

      {/* 컨텐츠 영역 */}
      <div className="contents">
        {/* 제목 */}
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        {/* 설명 */}
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
