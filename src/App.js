import logo from './logo.svg';
import './App.css';
import UserCard from './Components/Card';
import ButtonsList from './Components/ButtonsList';


function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
      <UserCard></UserCard>
      <ButtonsList></ButtonsList>
    </div>
  );
}

export default App;
