import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 화면상에 보여질 이름을 text에 저장
// API 주소에 넣을 카테고리는 name으로 저장

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

//카테고리 wrap 스타일
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
//카테고리 NavLink
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
  //카테고리가 active일 경우 적용될 클래스: active
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <div className="category">
      <CategoriesBlock>
        {/* map으로 각 카테고리들(NavLink)을 생성 */}
        {categories.map((c) => (
          //url 파라미터를 통해 category 값을 관리하는 방법
          <Category
            //key에는 고유한 이름이 들어가도록 c.name을 씀
            key={c.name}
            //active 상태면 active 클래스 추가, 아니면 클래스 없음
            activeClassName="active"
            exact={c.name === "all"}
            to={c.name === "all" ? "/" : `/${c.name}`}
          >
            {c.text}
          </Category>
        ))}
      </CategoriesBlock>
    </div>
  );
};

export default Categories;
