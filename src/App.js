import './App.css';
import UrunListele from './components/UrunListele';
import Uyeler from './components/Uyeler';

function App() {
  return (
    <div className='App'>
      <UrunListele />
      <Uyeler />
      <div>
        <a href='https://netbilio.com' title='Netbilio'>Netbilio</a> | {" "}
        <a href='https://github.com/selamidemir'>Github</a>
      </div>
    </div>
  );
}

export default App;
