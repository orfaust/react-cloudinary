import "./styles.css";

import Video from "./components/CldV2Video";

export default function App() {
  return (
    <div className="App">
      <Video path="elephants" />
      <Video path="dog" />
    </div>
  );
}
