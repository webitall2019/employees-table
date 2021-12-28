import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import App from "./App";
const state = store.getState();
console.log(state);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// если спросят почему через хук и зачем вызываю в конкретной компоненте, Решил не вызывать хук в индексе,
// чтобы при  отобр другой комп который не испл данные из хука юзеГетЮзерс, что бы эти даннные там не грузились
// там где нам нужны эти данные, там мы вызовем этот хук
// этим мы избежим загрузки данных и обращение к апи если будем ее испл внутри индекса или
