import Header from './components/Header';
import Scoreboard from './components/ScoreBoard';
import GameBoard from './estado/GameBoard';


function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <GameBoard />
    </div>
  );
}

export default App;
