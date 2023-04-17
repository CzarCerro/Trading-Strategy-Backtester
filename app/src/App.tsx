import styles from './app.module.css'
import { useState, useEffect } from 'react';

const App = () => {
  const originalCapital = 10000;

  const [winRate, setWinRate] = useState(0);
  const [numberOfTrades, setNumberOfTrades] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [capital, setCapital] = useState(originalCapital);

  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  const [winAmount, setWinAmount] = useState(150);
  const [lossAmount, setLossAmount] = useState(100);

  const addProfit = () => {
    setCapital(capital + winAmount)
    setNumberOfTrades(numberOfTrades + 1)
    setWins(wins + 1)
  }

  const addLoss = () => {
    setCapital(capital - lossAmount)
    setNumberOfTrades(numberOfTrades + 1)
    setLoses(loses + 1)
  }

  useEffect(() => {
    setTotalProfit(capital - originalCapital)
    setWinRate(Number(((wins / (wins + loses)) * 100).toFixed(2)))

  }, [capital, loses, wins]);

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <div className={styles.control}>
          <div className={styles.statistics}>
            <span>Winrate: {winRate}%</span>
            <span>Number of trades: {numberOfTrades}</span>
            <span>Total Profit: ${totalProfit}</span>
            <span>Capital: ${capital}</span>
            <span>Total wins: {wins}</span>
            <span>Total loses: {loses}</span>
          </div>
          <div>
            <div className={styles.addTrade}>
              <input type="number" value={winAmount} onChange={event => setWinAmount(parseInt(event.target.value))} />
              <button onClick={addProfit}>Add Profit</button>
            </div>
            <div className={styles.addTrade}>
              <input type="number" value={lossAmount} onChange={event => setLossAmount(parseInt(event.target.value))}></input>
              <button onClick={addLoss}>Add Loss</button>
            </div>
          </div>
        </div>
        <div className={styles.graph}></div>
      </div>
    </div>
  );
}

export default App;
