import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TradingGrowth from './components/Trading-growth-main-component/TradingGrowth';
import Risk40 from './components/Risk40k/Risk40';
import Risk10k from './components/Risk14k/Risk14k';
import Risk60k from './components/Risk60k/Risk60k';
import Risk90k from './components/Risk90k/Risk90k';
import Aggressive from './components/Aggressive/Aggressive';
import Aggressive14k from './components/Aggressive14k/Aggressive14k';
import Aggressive40 from './components/Aggressive40/Aggressive40';
import Aggressive60k from './components/Aggressive60k/Aggressive60k';
import Aggressive90k from './components/Aggressive90k/Aggressive90k';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TradingGrowth></TradingGrowth>}>
            <Route path='/' element={<Risk90k></Risk90k>}></Route>
            <Route path='risk14' element={<Risk10k></Risk10k>}></Route>
            <Route path='risk40' element={<Risk40></Risk40>}></Route>
            <Route path='risk60' element={<Risk60k></Risk60k>}></Route>
            <Route path='risk90' element={<Risk90k></Risk90k>}></Route>
          </Route>
          <Route path='/aggresive' element={<Aggressive></Aggressive>}>
            <Route path='/aggresive' element={<Aggressive90k></Aggressive90k>} />
            <Route path='aggressive14' element={<Aggressive14k></Aggressive14k>} />
            <Route path='aggressive40' element={<Aggressive40></Aggressive40>} />
            <Route path='aggressive60' element={<Aggressive60k></Aggressive60k>} />
            <Route path='aggressive90' element={<Aggressive90k></Aggressive90k>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
