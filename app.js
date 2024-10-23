document.getElementById('flightSearchForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const homeAirport = document.getElementById('homeAirport').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
  
    // Placeholder for submitting to backend API
    console.log('Searching flights from:', homeAirport, 'to:', destination, 'on:', departureDate, 'returning:', returnDate);
  
    // Call flight search API (to be integrated later)
    searchFlights(homeAirport, destination, departureDate, returnDate);
  });
  
  function searchFlights(homeAirport, destination, departureDate, returnDate) {
    // For now, display a dummy result
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <div class="flight-result">
        <p><strong>Flight:</strong> ${homeAirport} to ${destination}</p>
        <p><strong>Departure Date:</strong> ${departureDate}</p>
        <p><strong>Return Date:</strong> ${returnDate}</p>
        <p><strong>Price:</strong> $200 (dummy data)</p>
      </div>
    `;
  
    // In the future, replace the above with a real API call to your backend
  }
  