import "./App.css";
import moment from "moment";

function App() {
  const time = moment().format("dddd [,] MMMM Do YYYY [|] h:mm:ss a");
  return (
    <div className="App">
      <h1>Displaying the Current Date & Time</h1>

      <div className="time">{time}</div>
    </div>
  );
}

export default App;
