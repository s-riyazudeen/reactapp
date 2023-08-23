import logo from './logo.svg';
import './App.css';
//import student component
import StudentListing from './components/StudentListing';

function App() {
  return (
    <div className="App">
     {/* render the Student component */}
      <StudentListing/>
    </div>
  );
}

export default App;
