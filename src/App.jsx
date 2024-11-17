import { useState } from "react";
import "./App.css";
import HeaderBase from "./components/HeaderBase";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <HeaderBase />
      </div>
    </>
  );
}

export default App;
