// Select the first <button> element in the document and assign it to the variable 'btn'
let btn = document.querySelector("button");

// Add an event listener to the 'btn' element that listens for a 'click' event
// When the button is clicked, the attached function (which is an async function) will execute
btn.addEventListener("click", async () => {
  // Call the 'getFacts' function asynchronously and wait for it to complete
  // Store the returned fact in the variable 'fact'
  let fact = await getFacts();

  // Log the fact to the console for debugging or informational purposes
  console.log(fact);

  // Select the <h3> element with the ID 'result' from the document and assign it to the variable 'h3'
  let h3 = document.querySelector("#result");

  // Update the text content of the selected <h3> element to display the retrieved fact
  h3.innerText = fact;
});

// Define the URL endpoint from which we will fetch the cat fact
let url = "https://catfact.ninja/fact";

// Define an asynchronous function 'getFacts' that will fetch a random cat fact from the API
async function getFacts() {
  try {
    // Use axios to send a GET request to the specified URL, and wait for the response
    let res = await axios.get(url);

    // Log the entire response object to the console for debugging or informational purposes
    console.log(res);

    // Return the 'fact' property from the response data (this is the actual cat fact)
    return res.data.fact;
  } catch (error) {
    // If an error occurs during the fetch operation, log the error to the console
    console.log("error - ", error);

    // Return a fallback message indicating that no fact was found
    return "No fact found!";
  }
}
