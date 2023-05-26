document.addEventListener('DOMContentLoaded', async function() {
    // Find the form and submit button by their ids
    const form = document.getElementById('petForm');
    const submitButton = document.getElementById('submitButton');
  
    // Add an event listener to the submit button
    submitButton.addEventListener('click', async function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Collect the values from the input fields
      const petName = document.querySelector('input[name="petName"]').value.trim();
      const petType = document.querySelector('select[name="petType"]').value.trim();
      const petBreed = document.querySelector('input[name="petBreed"]').value.trim();
      const petAge = document.querySelector('input[name="petAge"]').value.trim();
      const petDescription = document.querySelector('textarea[name="petDescription"]').textContent.trim();
      const petSize = document.querySelector('select[name="petSize"]').value.trim();
      const petAllergies = document.querySelector('input[name="petAllergies"]').value.trim();
      const petFood = document.querySelector('input[name="petFood"]').value.trim();
      const petExcercise = document.querySelector('input[name="petExercise"]').value.trim();
      const petMedication = document.querySelector('input[name="petMedication"]').value.trim();
      const petGrooming = document.querySelector('input[name="petGrooming"]').value.trim();
  
      // Collect values for other input fields...
  
      // Create an object to hold the collected data
      const formData = {
        pet_name: petName,
        pet_type: petType,
        pet_breed: petBreed,
        pet_age: petAge,
        pet_description: petDescription,
        pet_size: petSize,
        pet_allergies: petAllergies,
        pet_food: petFood,
        pet_excercise: petExcercise,
        pet_medication: petMedication,
        pet_grooming: petGrooming,
        // Add other properties...
      };
  
      try {
        // Send the data to the server using a POST request
        const response = await fetch('/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        // Handle the response from the server
        if (response.ok) {
          window.location.href = '/success'; // Redirect to success page
        } else {
          console.error(error)
          // Handle the error and provide feedback to the user
        }
      } catch (error) {
        console.error(error);
        // Handle any network or server errors
      }
    });
  });