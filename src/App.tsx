// src/App.tsx
import Navbar from './navbar/navbar';
import Slider from './slider/slider';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Slider />
      </div>
    </>
  );
}

export default App;
