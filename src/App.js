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
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
