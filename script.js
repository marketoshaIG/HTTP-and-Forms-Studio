// Create the actions object
let actions = {
    "google": "https://www.google.com/search",
    "duckduckgo": "https://duckduckgo.com/",
    "bing": "https://www.bing.com/",
    "ask": "https://www.ask.com/web"
  };
  
  // Create the setSearchEngine function
  function setSearchEngine(event) {
    event.preventDefault(); // Prevent form submission to handle it programmatically
    //console.log("setSearchEngine function is running!");
    // Get the selected radio button
    let radioButton = document.querySelector('input[name=engine]:checked');
  
    // Get the value of the radio button
    let engine = radioButton.value;
  
    // Get the action URL for the selected search engine
    let actionURL = actions[engine];
  
    // Set the action attribute of the form
    let form = document.querySelector('form');
    form.setAttribute('action', actionURL);
  
    // Submit the form
    form.submit();
  }
  
  // Register the handler when the page loads
  window.addEventListener("load", function() {
    let form = document.querySelector('form');
    form.addEventListener('submit', setSearchEngine);
  });
  