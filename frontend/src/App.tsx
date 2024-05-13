import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProblemPage from './pages/ProblemPage';
import NotFound from './pages/NotFount';

function App() {

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/problem-1" element={<ProblemPage id={1} />} />
          <Route path="/problem-2" element={<ProblemPage id={2} />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
