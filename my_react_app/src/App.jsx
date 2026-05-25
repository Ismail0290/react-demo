import Button from "./components/Button";
const name = "ismail";
const isStudent = true;
const num = 7;
const hasFess = true;
function App() {
  
  return (
    <>
      App
      <Button />
      <h2>{name.toUpperCase()} </h2>
      <p>{num}</p>
      {isStudent ? <p>Currently Studying</p> : <p>Working Professional</p>}
      {hasFess ? <button>Pay Fees</button> : <p></p>}
    </>
    // JSX expression 
    
  );
}

export default App;
