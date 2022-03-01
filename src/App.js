import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Todo</h1>
        <button>change css</button>
      </div>
      <List />
      <div className='list-container'>
        
      </div>



Drag and drop to reorder list
    </div>
  );
}

export default App;
