import { useState, useEffect } from 'react';
import './App.css';

function getUrl(path){
  return process.env.NODE_ENV === 'development' ? 'http://localhost:5000' + path : path
}

function App() {
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    fetch(getUrl('/api/hello'))
      .then( res => res.json())
      .then( data => setMessage(data.message))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        { message }
      </header>
    </div>
  );
}

export default App;
