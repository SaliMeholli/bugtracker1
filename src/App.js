import './App.css';
import {useState} from 'react';
import AddIssue from './components/AddIssue/AddIssue';
import CurrentIssue from './components/CurrentIssue/CurrentIssue';

function App() {
  const [addIssue, setAddIssue] = useState(true);
  const showAddIssue = () => {
      setAddIssue(true);
  }
  const showCurrentIssue = () => {
      setAddIssue(false);
  }
  return (
    <div className="App">
      <h1>SM BugTracker</h1>
      <div className='grey-card-container'>
        {addIssue ? <AddIssue/> : <CurrentIssue /> }
      </div>
      <div className='view-selection-div'>
        <button className='view-button' onClick={() => showCurrentIssue()}>Current Issues</button>
        <button className='view-button active' onClick={() => showAddIssue()}>Add Issue</button>
      </div>
    </div>
  );
}

export default App;
