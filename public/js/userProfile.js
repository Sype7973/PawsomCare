document.addEventListener('DOMContentLoaded', function() {
    const petList = document.getElementById('petList');
  
    // Add click event listener to the pet "Edit" buttons
    petList.addEventListener('click', async function(event) {
      const target = event.target;
  
      // Check if the clicked element is an "Edit" button
      if (target.matches('.button.is-small.is-link petEdit')) {
        event.preventDefault(); // Prevent the default link behavior
  
        // Get the pet ID from the data-pet-id attribute
        const petId = target.getAttribute('data-pet-id');
  
        try {
          // Fetch the pet details from the server
          const apiUrl = '/pets/' + petId;
          const response = await fetch(apiUrl);
  
          if (response.ok) {
            const petData = await response.json();
  
            // Retrieve the form values
            const petName = document.querySelector(`#petName${petId}`).value.trim();
            const petType = document.querySelector(`#petType${petId}`).value.trim();
            const petBreed = document.querySelector(`#petBreed${petId}`).value.trim();
            const petAge = document.querySelector(`#petAge${petId}`).value.trim();
            const petDescription = document.querySelector(`#petDescription${petId}`).value.trim();
            const petSize = document.querySelector(`#petSize${petId}`).value.trim();
            const petAllergies = document.querySelector(`#petAllergies${petId}`).value.trim();
            const petFood = document.querySelector(`#petFood${petId}`).value.trim();
            const petExercise = document.querySelector(`#petExercise${petId}`).value.trim();
            const petMedication = document.querySelector(`#petMedication${petId}`).value.trim();
            const petGrooming = document.querySelector(`#petGrooming${petId}`).value.trim();
            // Retrieve other form values...
  
            // Create an object with the updated pet data
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
            const updateResponse = await fetch(apiUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedPetData)
            });
  
            if (updateResponse.ok) {
              // Pet updated successfully, you can redirect or perform other actions
              console.log('Pet updated successfully');
            } else {
              throw new Error('Error:', updateResponse.statusText);
            }
          } else {
            throw new Error('Error:', response.statusText);
          }
        } catch (error) {
            console.log(error);
        }
      }
    });
  });