document.addEventListener('DOMContentLoaded', function() {
  const petList = document.getElementById('petList');

  // Add click event listener to the pet "Edit" buttons
  petList.addEventListener('click', async function(event) {
    const target = event.target;

    // Check if the clicked element is an "Edit" button
    if (target.matches('.petEdit')) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the pet ID from the data-pet-id attribute
      const petId = target.getAttribute('data-pet-id');

      try {
        // Fetch the pet details from the server
        const apiUrl = '/pets/' + petId;
        console.log('API URL:', apiUrl); // Add this line
        const response = await fetch(apiUrl);
        console.log('Response:', response); // Add this line

        if (response.ok) {
          const petData = await response.json();

          // Retrieve the form values
          console.log('Retrieving form values...'); // Add this line
          document.querySelector(`#petName${petId}`).value = petData.pet_name;
          document.querySelector(`#petType${petId}`).value = petData.pet_type;
          document.querySelector(`#petBreed${petId}`).value = petData.pet_breed;
          document.querySelector(`#petAge${petId}`).value = petData.pet_age;
          document.querySelector(`#petDescription${petId}`).value = petData.pet_description;
          document.querySelector(`#petSize${petId}`).value = petData.pet_size;
          document.querySelector(`#petAllergies${petId}`).value = petData.pet_allergies;
          document.querySelector(`#petFood${petId}`).value = petData.pet_food;
          document.querySelector(`#petExercise${petId}`).value = petData.pet_exercise;
          document.querySelector(`#petMedication${petId}`).value = petData.pet_medication;
          document.querySelector(`#petGrooming${petId}`).value = petData.pet_grooming;
          // Retrieve other form values...


          console.log('Pet Name:', petName);
          console.log('Pet Type:', petType);
          console.log('Pet Breed:', petBreed);
          console.log('Pet Age:', petAge);
          console.log('Pet Description:', petDescription);
          console.log('Pet Size:', petSize);
          console.log('Pet Allergies:', petAllergies);
          console.log('Pet Food:', petFood);
          console.log('Pet Exercise:', petExercise);
          console.log('Pet Medication:', petMedication);
          console.log('Pet Grooming:', petGrooming);
          // Create an object with the updated pet data
          console.log('Creating updated pet data...'); // Add this line
          const updatedPetData = {
            pet_name: petName,
            pet_type: petType,
            pet_breed: petBreed,
            pet_age: petAge,
            pet_description: petDescription,
            pet_size: petSize,
            pet_allergies: petAllergies,
            pet_food: petFood,
            pet_exercise: petExercise,
            pet_medication: petMedication,
            pet_grooming: petGrooming,
            // Include other properties...
          };

          // Send the updated pet data to the API route for updating the pet
          console.log('Sending updated pet data...'); // Add this line
          const updateResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPetData)
          });

          console.log('Update Response:', updateResponse); // Add this line

          if (updateResponse.ok) {
            // Pet updated successfully, you can redirect or perform other actions
            console.log('Pet updated successfully');
            document.location.reload();
          } else {
            // Handle the error
            console.error('Error:', updateResponse.status);
          }
        } else {
          // Handle the error
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
