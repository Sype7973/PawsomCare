document.addEventListener('DOMContentLoaded', function() {
  const petList = document.getElementById('petList');

  petList.addEventListener('click', function(event) {
    const target = event.target;

    if (target.matches('.petEdit')) {
      event.preventDefault();

      const petId = target.getAttribute('data-pet-id');

      // Redirect to the petEdit page with the pet ID
      document.location.replace(`/pets/edit/${petId}`);
    }
  });
});


// delete button on OwnerPets page should be a delete request and not a post, there is no delete page so it should just delete the card from the /pets page
document.addEventListener('DOMContentLoaded', function() {
  const petList = document.getElementById('petList');

  petList.addEventListener('click', async function(event) {
    const target = event.target;

    if (target.matches('.petDelete')) {
      event.preventDefault();

      const petId = target.getAttribute('data-pet-id');

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
    }
  });
});

