import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';
import {TypingTextProvider} from './pages/TypingTextContext';
import Layout from './component/Layout';

function App() {
  return (
    <TypingTextProvider>
      <BrowserRouter basename="/kids-type-studio">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice/:id" element={<Practice />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TypingTextProvider>
  );
}

export default App;

//https://NOAH-git-0315.github.io/kids-type-studio/