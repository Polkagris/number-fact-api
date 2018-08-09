  // Grab input field and value, number headline, number-paragraph
  let numberInput = document.querySelector('#numberInput');
  let factDiv = document.querySelector('#fact');
  let factText = document.querySelector('#factText');
  // Grab buttons
  let nButton = document.querySelector('#numberButton');
  let yButton = document.querySelector('#yearButton');
  // Button values
  let nbValue = 0;
  let ybValue = 0;
  // Event listener on year button
  yButton.addEventListener('click', setYear);
  // Event listener on number button
  nButton.addEventListener('click', setNumber);
  // Event listener on input, fetching data from API
  numberInput.addEventListener('input', fetchApi);


  // Function: set yearButton
    function setYear(){
    ybValue = 1;
    nbValue = 0;
    console.log('year:'+ybValue);
    console.log('number:'+nbValue);
    return ybValue;
  }
  // Function: set numberButton
  function setNumber(){
    nbValue = 1;
    ybValue = 0;
    console.log('number'+nbValue);
    console.log('year:'+ybValue);
    return nbValue;
  }

  // Value after button click


  // Function: fetch API data
  function fetchApi(setNumber, setYear){
    let number = numberInput.value;
    // Check if each button is pressed
    if(ybValue == 1){
      console.log("YEAR!!");
    }else{
      console.log("NUMBER!!!");
    }


    // Fetch the json object from the url
    fetch('http://numbersapi.com/'+number+'?json')
      // Json-object response
      .then(response => response.json())
      // Data in json format
      .then(data => {
        // Set the text in the factText-paragraph to the random fact
        factText.innerText = data.text;
        return data.text;
      });

    // Make sure input is not empty
    if(number !== ''){
      // Change style of #fact to visible
      fact.style.display = 'block';
    }else{
      // If the input is empty set the factDiv back to hidden
      fact.style.display = 'none';
    }
  }

  // Make it possible to choose between numbers and years
  // Year format: http://numbersapi.com/[your_number_here]/year
