  // Grab input field and value, number headline, number-paragraph
  let numberInput = document.querySelector('#numberInput');
  let factDiv = document.querySelector('#fact');
  let factText = document.querySelector('#factText');
  // Event listener on input, fetching data from API
  numberInput.addEventListener('input', fetchApi);

  // Function: fetch API data
  function fetchApi(){
    let number = numberInput.value;
    
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
