import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home.tsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
)

export default App
