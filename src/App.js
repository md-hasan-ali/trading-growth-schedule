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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
