import { useState } from "react";

function App() {
  // state (état, données)
  const [prenom, setPrenom] = useState("Fred")
  const [count, setCount] = useState(1)

  // components
  const handleClick = () => {
    setCount(count + 1)
  }

  // affichage (render)
  return <div>

  </div>
}

export default App;
