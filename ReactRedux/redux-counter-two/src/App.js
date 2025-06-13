import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from './features/counter/counterSlice';


function App() {
const count = useSelector((state) => state.counter.value);     //use our selector to retrieve from the store
const dispatch = useDispatch();
return(
<div style={{textAlign:'center', marginTop:'100'}}>
    <h1>count: {count}</h1>
    <button onClick={() => dispatch(increment())}>ADD 1</button>
    <button onClick={() => dispatch(decrement())}>-1</button>
    <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>  
</div>
)
}

export default App;
