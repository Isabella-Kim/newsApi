import { useState, useEffect } from "react";

//커스텀 훅 usePromise(데이터를 가져오는 함수, useEffect에 쓰일 의존배열)

// promiseCreator : promise를 만들어주는 함수, 데이터를 가져오는 함수(axios,fetch)가 들어가야한다.
// deps: 의존배열
// 이 두 인자에는 지금 특별한 값이 들어가지 않았다. 고정틀을 위해 임시로 넣어준 것들임.
export default function usePromise(promiseCreator, deps) {
  // 로딩중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false); //로딩
  const [resolved, setResolved] = useState(null); //완료
  const [error, setError] = useState(null); //실패

  useEffect(() => {
    //process 함수
    const process = async () => {
      setLoading(true); //로딩중
      try {
        // promiseCreator() 함수(axois, fetch 등)로 데이터를 가져와라
        // await - promiseCreator()가 값을 가져올 때까지 대기 하겠다.
        const resolved = await promiseCreator();
        //resolved에 데이터 입력완료
        setResolved(resolved);
      } catch (e) {
        //에러 발생시 콘솔로 남겨보기
        //NewsList.js에 console.log(e); 있음
        setError(e);
      }
      //로딩 종료
      setLoading(false);
    };
    //process 실행
    process();
    //아래의 주석은 esLint 경고를 막기 위함
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  //deps는 useEffect의 의존배열. 특별한 값은 없고 틀을 만들기 위해 임시로 넣어준 값임

  //로딩 상태, 데이터 상태, 에러 상태를 반환함
  return [loading, resolved, error];
}
