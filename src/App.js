import './App.css';
import Users from './Getdata'

function App() {
const {data} = Users()
  return (
    <div className="App">
     {data && data.map(i =>{
       return `name ${i.name} `
     })}
    </div>
  );
}

export default App;
