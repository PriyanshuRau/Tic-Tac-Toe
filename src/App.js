import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';

const initialState=["", "", "", "", "" ,"" ,"" ,"", ""];

function App() {
   const [gameState, setGamestate]=useState(initialState);
   const [steps, setSteps]=useState(0);
   const [winner,setWinner]=useState(null);

   useEffect(() => {
     checkforWinner(gameState);
   },[gameState]);

  function setOnclick(event){
    //  console.log(event.target.id)
    //  setGamestate(["", "", "X", "", "" ,"" ,"" ,"", ""]);
    const copyofgameState=[...gameState];
    if(!event.target.innerText){
      copyofgameState[event.target.id]=steps%2===0 ? "X" :"O";
      setSteps(steps+1);
      setGamestate(copyofgameState);
    }
  };

  function restartgame(){
    setGamestate(initialState);
    setSteps(0);
    setWinner(null);
  };

  function checkforWinner(gameState){
    const winningconditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    winningconditions.forEach((condition) => {
      const [a,b,c]=condition;

      if (
        gameState[a] &&
        gameState[a]===gameState[b] &&
        gameState[a]===gameState[c]
      ) {
        setWinner(gameState[a]);
        console.log(gameState[a]);
      }
      });
    };

  
  return (
    <div className='container'>
      <div className='left-container'>
        <div className='left-text'>Let's play the Tic-Tac-Toe game!</div>
        <div className='button' onClick={restartgame}>Start a new game</div>
      </div>
      {!winner && steps<9 && (
      <div className='right-container'>
        <div className='players'>
          <div className={`player ${steps%2===0 && "playerX"}`}>Player X</div>
          <div className={`player ${steps%2===1 && "playerO"}`}>Player O</div>
        </div>
        <div className='game-container' onClick={setOnclick}>
          <Square id={0} state={gameState[0]} border="border-right-bottom"/>
          <Square id={1} state={gameState[1]} border="border-right-bottom"/>
          <Square id={2} state={gameState[2]} border="border-bottom"/>
          <Square id={3} state={gameState[3]} border="border-right-bottom"/>
          <Square id={4} state={gameState[4]} border="border-right-bottom"/>
          <Square id={5} state={gameState[5]} border="border-bottom"/>
          <Square id={6} state={gameState[6]} border="border-right"/>
          <Square id={7} state={gameState[7]} border="border-right"/>
          <Square id={8} state={gameState[8]} />
        </div>
      </div>
      )}
      {/* {(winner || steps===9) && (
        <div className='winner-wrapper'>
           <img src={require("./images/winner.png")} width={120} height={100} alt='winner' />
           <div className='winner-text'>{steps===9 && !winner ? 'its a Draw!' : `${winner} wins!`}</div> 
        </div>
      )} */}

      {(winner && steps<=9) && (
        <div className='winner-wrapper'>
           <img src={require("./images/winner.png")} width={120} height={100} alt='winner' />
           <div className='winner-text'>{ `${winner} wins!`}</div> 
        </div>
      )}

      {(!winner && steps===9) && (
        <div className='winner-wrapper'>
           <img src={require("./images/draw.png")} width={120} height={100} alt='draw' />
           <div className='winner-text'>{'its a Draw!' }</div> 
        </div>
      )}

    </div>
  );  
}

export default App;
