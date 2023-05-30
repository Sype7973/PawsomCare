
// delete button on OwnerPets page should be a delete request and not a post, there is no delete page so it should just delete the card from the /pets page
document.addEventListener('DOMContentLoaded', function() {
    const petDelete = document.getElementById('petDelete');
  
    petDelete.addEventListener('click', async function(event) {
        const petId = petDelete.getAttribute('data-pet-id');
  
        try {
          const response = await fetch(`/api/pets/${petId}`, {
            method: 'DELETE'
          });
        
          if (response.ok) {
            document.location.replace('/pets'); // redirect to success page
          }
          else {
            // handle the error and provide feedback to the user
          }
        } catch (error) {
          // handle any network or server errors
        }
    });
  });