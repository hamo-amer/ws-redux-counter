import { Button } from "react-bootstrap";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <Button variant='success' onClick={() => dispatch(increment(2))}>
        +
      </Button>
      <p>{counter}</p>
      <Button variant='danger' onClick={() => dispatch(decrement(1))}>
        -
      </Button>
    </div>
  );
}

export default App;
