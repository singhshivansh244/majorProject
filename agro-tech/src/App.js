import './App.css';
import { useState } from 'react'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowSize(window.innerWidth));
  // if (windowSize < 1000) {
  //   return (
  //     <div>
  //       <h1>
  //         Website is Available for desktop view only.(Screen Size: 1400X500)
  //         {window.innerWidth}
  //       </h1>
  //     </div>
  //   )
  // }
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
