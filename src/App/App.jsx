import './App.scss';
import Form from "../components/Form/Form";


function App() {
  return (
    <div className='wrapper'>
      <img
          className='img' 
          src={require('../images/image.png')} 
        />
      <Form />
    </div>
  );
}

export default App;