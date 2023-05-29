document.addEventListener('DOMContentLoaded', async function () {
  // Find the form and submit button by their ids
  const form = document.getElementById('petForm');
  const submitButton = document.getElementById('submitButton');

  // Add an event listener to the submit button
  submitButton.addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the values from the input fields
    const petName = document.querySelector('input[name="petName"]').value;
    const petType = document.querySelector('select[name="petType"]').value;
    const petBreed = document.querySelector('input[name="petBreed"]').value;
    const petAge = document.querySelector('input[name="petAge"]').value;
    const petDescription = document.querySelector('textarea[name="petDescription"]').value;
    const petSize = document.querySelector('select[name="petSize"]').value;
    const petAllergies = document.querySelector('input[name="petAllergies"]').value;
    const petFood = document.querySelector('input[name="petFood"]').value;
    const petExcercise = document.querySelector('input[name="petExercise"]').value;
    const petMedication = document.querySelector('input[name="petMedication"]').value;
    const petGrooming = document.querySelector('input[name="petGrooming"]').value;

    // Collect values for other input fields...

    let pet_image_url;

    if (petType === 'cat') {
      pet_image_url = './img/cat-placeholder.png';
    } else {
      pet_image_url = './img/dog-placeholder.png';
    }
    
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
      pet_image_url: pet_image_url,
      // Add other properties...
    };

    try {
      // Send the data to the server using a POST request
      const response = await fetch('/api/pets', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Handle the response from the server
      if (response) {
        document.location.replace('/pets'); // Redirect to success page
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error("error");
      // Handle any network or server errors
    }
  });
});