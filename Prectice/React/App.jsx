import React from 'react'

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);
  return (
    <BrowserRouter>
    <div>
      <Routes>

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;

