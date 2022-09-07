import { useContext } from 'react';
import './App.css';
import Shop from './component/Shop';
import { Storage } from './component/Storage';


function App() {
  const detail = useContext(Storage)
  return (
    <div className={detail.mode && 'App'}>
      <Shop />
    </div>
  );
}

export default App;
