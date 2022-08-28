import './App.css';
import {useState, useEffect} from "react";
import Square from './Components/Square';
import { Patterns } from './Patterns';

function App() {
  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("O");
  const [result,setResult] = useState({winner: "nil", state:"nil"} );

  useEffect(()=>{
    checkWin();
    checkTie();
    if(player =="X"){
      setPlayer("O")
    }
    else{
      setPlayer("X");
    }


  },[board]);

  useEffect(()=>{
    if(result.state!="nil"){
    alert(`winner: ${result.winner}`);
    restartGame();
    }
  },[result]);



  const chooseSquare = (square) =>{
    setBoard(board.map((val,idx)=>{
      if( val =="" && idx == square ){
        return player;
      }
      return val;
    }))
    
  }

  const checkWin = () => {
    Patterns.forEach((currPattern)=> {
      const firstPlayer = board[currPattern[0]];
      if(firstPlayer=="") return;
      let found = true;
      currPattern.forEach((idx)=>{
        if(board[idx]!=firstPlayer){
          found =false;
        }
      });
      if(found){
        setResult({winner: player, state: "won"});
      }
    });
  };


  const checkTie = () => {
    let filled = true;
    board.forEach((square)=> {
      if(square ==""){
        filled = false;
      }
    })
    if(filled){
      setResult({winner:"nil", state: "tie"})
    }
  }

  const restartGame =() =>{
    setBoard(["","","","","","","","",""])
    setPlayer("O");
  }


  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={()=>{chooseSquare(0);}} />
          <Square val={board[1]} chooseSquare={()=>{chooseSquare(1);}} />
          <Square val={board[2]} chooseSquare={()=>{chooseSquare(2);}} />
        </div>
        <div className='row'>
        <Square val={board[3]} chooseSquare={()=>{chooseSquare(3);}} />
        <Square val={board[4]} chooseSquare={()=>{chooseSquare(4);}} />
        <Square val={board[5]} chooseSquare={()=>{chooseSquare(5);}} />
        </div>
        <div className='row'>
        <Square val={board[6]} chooseSquare={()=>{chooseSquare(6);}} />
        <Square val={board[7]} chooseSquare={()=>{chooseSquare(7);}} />
        <Square val={board[8]} chooseSquare={()=>{chooseSquare(8);}} />
        </div>
      </div>
    </div>
  );
}

export default App;
