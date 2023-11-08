import './App.css';
import QuoteGen from './components/QuoteGen';


function App() {
  

  // The small container is responsive for most smartphone screens, for tablets use medium and for computers use XL
  return (
    <>
      <div className="container-sm text-center" id="wrapper">
        <div className="row">
          <h1>"Random" Quote Machine</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            
          </div>

          <div className="col-sm-4" id="quote-box">
            <QuoteGen />
            <h7>By Blitz</h7>
          </div>

          <div className="col-sm-4">

          </div>

        </div>
        
      </div>    
    </>
  );
}

export default App;
   