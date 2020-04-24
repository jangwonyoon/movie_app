import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </HashRouter>
  );
}

// exact  -> 자신이 원하는 페이지만 라우팅 하게 만들어 주기

// react router는 원래 path에 걸려 있는 부분을 확인 하기 때문에 exact를 써서
// 원하는 페이지를 처리한다.

export default App;

/*
여기서 라우터라는 것은 명령을 받고 실행해주는 역할이고 
라우트라는 것은 경로와 경로에 맞는 컴포넌트를 적어서 라우터에게 명령을 내리는 역할인가요?
*/

// 라우터 안에서 링크를 사용

// 라우터 밖에서는 링크 사용 불가

// browserRouter 와 hashRouter 의 차이

// 브라우저 라우터는 링크에 # 해시가 없다. 페이지 링크가 깔끔하다
// 하지만 브라우저 라우터는 깃헙 페이지에 올리기가 힘들고 해쉬라우터는 편하다.
