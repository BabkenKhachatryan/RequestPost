import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewPage from './components/NewPage/NewPage';
import Request from './components/Request/Request';
import { state } from './components/state';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Request state={state} />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
