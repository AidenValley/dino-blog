import logo from './logo.svg';
import './App.css';
import Dino from './Dino';

const dino = {
  title: 'Dinosaurs are Super Duper Awesome',
  author: 'Stealthy Stegosaurus',
  body: 'Check out this body property!',
  comments: ["First!", "Great post", "Hire this author now!"]
};

function App() {
  return (
    <div className="App">
     <Dino creature={dino}/>
    </div>
  );
}

export default App;
