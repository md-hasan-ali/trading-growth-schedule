import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TradingGrowth from './components/Trading-growth-main-component/TradingGrowth';
import Risk40 from './components/Risk40k/Risk40';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TradingGrowth></TradingGrowth>}>
            <Route path='/' element={<Risk40></Risk40>}></Route>
            <Route path='risk40' element={<Risk40></Risk40>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
