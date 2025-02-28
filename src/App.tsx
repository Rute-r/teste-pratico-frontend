import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-00">
        <Home />
      </div>
    </>
  );
}

export default App;
