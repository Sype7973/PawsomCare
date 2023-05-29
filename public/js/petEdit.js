// submit button on petEdit page should be a put request and not a post, there is no edit page so it should just edit the card from the /pets page
document.addEventListener('DOMContentLoaded', async function() {
    const form = document.getElementById('petForm');
    const submitButton = document.getElementById('submitButton');
  
    const petIdContainer = document.getElementById('petIdContainer');
    const petId = petIdContainer.getAttribute('data-pet-id');
    
    // add an event listener to the submit button
    submitButton.addEventListener('click', async function(event) {
      event.preventDefault(); // prevent the default form submission
    
        // collect the values from the input fields
        const petName = document.querySelector('input[name="petName"]').value;
        const petType = document.querySelector('select[name="petType"]').value;
        const petBreed = document.querySelector('input[name="petBreed"]').value;
        const petAge = document.querySelector('input[name="petAge"]').value;
        const petDescription = document.querySelector('textarea[name="petDescription"]').value;
        const petSize = document.querySelector('select[name="petSize"]').value;
        const petAllergies = document.querySelector('input[name="petAllergies"]').value;
        const petFood = document.querySelector('input[name="petFood"]').value;
        const petExcercise = document.querySelector('input[name="petExercise"]').value;
        console.log(petExcercise);
        const petMedication = document.querySelector('input[name="petMedication"]').value;
        const petGrooming = document.querySelector('input[name="petGrooming"]').value;
        // collect values for other input fields...
    
        // create an object to hold the collected data
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
          // add other properties...
        };
    
        try {
            // send the data to the server using a PUT request for that specific pet
            const response = await fetch(`/api/pets/${petId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            // handle the response from the server
            if (response.ok) {
              window.location.href = '/pets'; // redirect to success page
            } else {
              console.error("error");
              // handle the error and provide feedback to the user
            }
          } catch (error) {
            console.error(error);
            // handle any network or server errors
          }
        });
      });