import GameBoard from './components/GameBoard';
import ResetButton from './components/ResetButton';
import useGame from './estado/useGame';

const App = () => {
  const { resetGame } = useGame();

  return (
    <div>
      <h1>Juego de Memoria</h1>
      <GameBoard />
      <ResetButton onReset={resetGame} />
    </div>
  );
};

export default App;
