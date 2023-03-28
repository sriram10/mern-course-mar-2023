import { Provider } from "react-redux";
import ReactReduxCounter from "./react-redux-couter";
import ReactReduxTodo from "./react-redux-todo";
import store from "./store";

const ReduxSample = () => {
  return (
    <Provider store={store}>
      <ReactReduxCounter />
      <ReactReduxTodo />
    </Provider>
  )
}

export default ReduxSample;