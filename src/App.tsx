import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';
import {TypingTextProvider} from './pages/TypingTextContext';
import Layout from './component/Layout';

function App() {
  return (
    <TypingTextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TypingTextProvider>
  );
}

export default App;