import './App.css';
import QuoteGen from './components/QuoteGen';


function App() {
  // Generate two random numbers, the first between 0 and 12 and the second between 0 and 8
  // Pick a random color from the colors array, using a prop in the element QuoteGen
  // Change the body background color to that
  // Pick a random quote object from the library and display it's information
  // When you click the new quote button update the state and display a new quote and change background-color
  

  // The small container is responsive for most smartphone screens, for tablets use medium and for computers use XL
  // This element just return the app layout, the components are the ones that do all the work
  return (
    <>
      <div className="container-sm text-center" id="wrapper" >
        <div className="row">
          <h1>"Random" Quote Machine</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            
          </div>

          <div className="col-sm-4" id="quote-box">
            <QuoteGen />
            {/* This could be an anchor tag to your github or something else */}
            <h6>By Blitz</h6>
          </div>

          <div className="col-sm-4">

          </div>

        </div>
        
      </div>    
    </>
  );
}

export default App;
   