import './App.css';
import Header from './components/parts/Header';
import Main from './components/parts/Main';
import Footer from './components/parts/Footer';
import { NextUIProvider } from "@nextui-org/react";

function App() {

  return (
    <div className="App">
      <NextUIProvider>
        <Header />
        <Main />
        <Footer />
      </NextUIProvider>
    </div>
  );
}

export default App;
