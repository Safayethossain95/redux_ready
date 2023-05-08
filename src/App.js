import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { setVariable } from './redux/Action';
function App() {
  const dispatch = useDispatch();
  const noOfThings = useSelector(state => state.variable)
  function handleClick() {
    dispatch(setVariable());
  }
  return (
    <div className="App">
      <h1>{noOfThings}</h1>
      <h2>hello</h2>
       <button onClick={handleClick}>Set Variable</button>
    </div>
  );
}

export default App;
