const postFormHandler = async (event) => {
    console.log('postFormHandler')
    event.preventDefault();

    // Collect values from the comment form

    // TO DO!!!!! SAVE IMAGE URL TO DATABASE
    const title = document.querySelector('#new-title').value.trim();
    const body = document.querySelector('#new-body').value.trim();
    const pet_category = document.querySelector('#new-category select').value;
    const post_type = document.querySelector('#new-type select').value;
    
    if (title && body && pet_category && post_type) {
        const userID_El = document.querySelector('#user-id');
        const user_id = userID_El.getAttribute('data-user-id');;

        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogPost/', {
            method: 'POST',
            body: JSON.stringify({ title, body, pet_category, post_type, user_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, refresh to view comment
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', postFormHandler);
