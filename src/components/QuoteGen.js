import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faQuoteLeft, faQuoteRight, faShare} from '@fortawesome/free-solid-svg-icons';

function QuoteGen() {
  // State variable declaration
  const [quote, setQuote] = useState(''); 
  const [author, setAuthor] = useState('');
  const [colorId, setColorId] = useState(0);
  const [picture, setPicture] = useState("https://static.independent.co.uk/2022/06/07/13/newFile-4.jpg");

  // Background-color-collection
    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];

      // Since this is a starter project, the quotes are not fetched from an API (coming soon...)
      const quoteLib = [
        {quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
        author: "Bill Cosby",
        imageSrc: "https://www.insightvacations.com/media/expbwfn2/canadian-rockies-pacific-coast-guided-tour-14.jpg"},
        {quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
        author: "Chinese Proverb",
        imageSrc: "https://149650922.v2.pressablecdn.com/wp-content/uploads/2022/09/New-Hampshire-Fall-Foliage-1024x766.jpg"},
        {quote: "The mind is everything. What you think you become.",
        author: "Buddha",
        imageSrc: "https://www.worldatlas.com/upload/8a/1d/e0/shutterstock-1258905145.jpg"},
        {quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
        imageSrc: "https://media.cntraveler.com/photos/56cb76deb19e7d9b785202d9/master/pass/notre-dame-basilica-montreal-cr-getty.jpg"},
        {quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        author: "Christopher Columbus",
        imageSrc: "https://assets.slice.ca/wp-content/uploads/2018/10/most-beautiful-places-in-ontario-feature.jpg"},
        {quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill",
        imageSrc: "https://www.attractionsofamerica.com/images/all_thingstodo/20200905094821_Multnomah-Falls-Oregon.jpg"},
        {quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        imageSrc: "https://www.travelandleisure.com/thmb/dYCWsy26IvQImo8qV1p57_9piGY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-crested-butte-colorado-SMCOTOWNS0921-ece59cb9b92e4ccc8fa8e79010611933.jpg"},
        {quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        imageSrc: "https://static.independent.co.uk/2022/06/07/13/newFile-4.jpg"}
      ];

      // Variable placeholder
      
      // Helper Methods/functions

      // Data fetching functions
      //This executes on the first page load only once
      useEffect(()=>{
        GetData()
      },[]);

      //This is the function that gets the data from the API, put this in your click handler
      const GetData = () => {
        //This is the url that contains the data, can he that localhost:3001 on a json server as well
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
        // Here we request the data with the deafult GET to the url (server)
        fetch(url).then((res)=>(res.json())).then((data) => {
          // This variable is an array of objects
          let dataQuotes = data.quotes; //store the quotes in a local variable (memory space)
          // Debugging the data we just got
          // console.log(dataQuotes[randomInt(0,dataQuotes.length)]);
          //Update your state variables
          setQuote(dataQuotes[randomInt(0,dataQuotes.length)].quote);
          setAuthor(dataQuotes[randomInt(0,dataQuotes.length)].author);

        });
      };

      // Random integrer generator
      function randomInt(mn, mx) {
        // This function excludes the maximum number, the results range from(0,max-1)
        let w = Math.random() * (mx - mn) + mn;
        return Math.floor(w);
      }

      //Click handler (does stuff when you click the button)
      function handleClick() {
        console.log("\n");
        // Image change method call        
        setPicture(quoteLib[randomInt(0, quoteLib.length)].imageSrc);        

        // Insert here your fetch method call
        GetData();
        // console.log(`Quote: ${quote}, Author: ${author}`); //Debugging the state variables

        // Insert here your color change function call
        setColorId(randomInt(0,colors.length)); //update the color
        // console.log("Color: " + colorId); //Debugging the color change

      }
      
      // The tweet and tumbl buttons need to be anchors
      
    return (
        <>
          <div className="card">
            <img src={picture} className="card-img-top" alt="A view of Mt Shasta during the fall in a lonely bus stop." />
            <div className="card-body">                
              <p className="card-text" id="text"><FontAwesomeIcon icon={faQuoteLeft} /> {quote}<FontAwesomeIcon icon={faQuoteRight} /></p>
              <h6 className="card-title" id="author">- {author}</h6>
              <div className="row">
              
                <div className="col-3">
                  <a href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Life%20is%2010%25%20what%20happens%20to%20me%20and%2090%25%20of%20how%20I%20react%20to%20it.%22%20Charles%20Swindoll" className="btn btn-primary" id="tweet-quote"><FontAwesomeIcon icon={faShare} /> </a>
                </div>
                <div className="col-3">
                  <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Charles%20Swindoll&content=Life%20is%2010%25%20what%20happens%20to%20me%20and%2090%25%20of%20how%20I%20react%20to%20it.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" className="btn btn-primary" id="tumblr-quote"><FontAwesomeIcon icon={faThumbsUp} /> </a>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary" id="new-quote" onClick={handleClick}>New Quote</button>
                </div>

              </div>
            </div>
          </div>
        </>
        
    );
}

export default QuoteGen;