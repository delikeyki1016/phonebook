import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // 리덕스 사용순서
    // 1. npm install redux react-redux
    // 2. redux 폴더 생성 - store.js 생성
    //    reducer 폴더 생성(여러개의 리듀서가 있을 수 있기때문에) - reducer.js 생성(store에서 import)
    // 3. useDispatch를 이용해서 reducer에 action을 던져줌
    // 4. useSelector를 이용해서 reducer의 state를 읽어옴
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
