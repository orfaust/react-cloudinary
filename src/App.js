import "./styles.css";

import CldV2Video from "./components/CldV2Video";

export default function App() {
  return (
    <div className="App">
      <CldV2Video path="elephants" />
      <CldV2Video path="dog" />
    </div>
  );
}
