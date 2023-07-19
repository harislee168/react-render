import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState.js'
import { UseReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ObjectUseState/ObjectUseState';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      <ObjectUseState />
    </div>
  );
}

export default App;
