import './App.css';
import { FetchDogs } from './FetchDogs';
import FetchFoxes from './FetchFoxes';
import { RandomUser } from './RandomUser';

function App() {
  return (
    <div className="App">
      <div className='Block'>
        <FetchFoxes/>
      </div>
      <div className='Block'>
        <FetchDogs/>
      </div>
      <div className='Block'>
        <RandomUser/>
      </div>
    </div>
  );
}

export default App;
