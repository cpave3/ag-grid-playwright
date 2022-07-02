import { useState } from "react";
import { DataGrid } from "./components/DataGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DataGrid />
    </div>
  );
}

export default App;
