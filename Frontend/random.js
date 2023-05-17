function getRandomNumberAndReload() {
    fetch('http://localhost:3000/random-number')
      .then(response => response.json())
      .then(data => {
        const randomNumber = data.number;
        // Do something with the random number
        console.log(randomNumber);
        // Display the random number in the HTML element
        document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;
        // Reload the page
        location.reload();
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  }