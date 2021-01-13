import Body from './Parts/Body';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from './Parts/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
       <header className="App-header">
          <Body/>
       </header>
    </div>
  );
}

export default App;
