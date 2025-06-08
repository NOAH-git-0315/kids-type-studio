import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';
import {TypingTextProvider} from './pages/Context/TypingTextContext';
import Layout from './component/Layout';
import MynameTextProvider from './pages/Context/NameContext';
import ResultScreen from './pages/ResultScreen';

function App() {
  return (
    <MynameTextProvider>
    <TypingTextProvider>
      <BrowserRouter basename="/kids-type-studio">
        <Layout>
          <Routes>
            {/* <Route path="/" element={}> */}
            <Route path="/result/:id/:correct/:miss/:time" element={<ResultScreen/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/practice/:id" element={<Practice />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TypingTextProvider>
    </MynameTextProvider>
  );
}

export default App;

//https://NOAH-git-0315.github.io/kids-type-studio/