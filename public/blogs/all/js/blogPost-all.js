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

        // let image_url = document.querySelector('#new-image-url').text;

        let image_url;
        // if (image_url === 'No file uploaded') {

            if (pet_category === 'Cats') {
                image_url = './img/cat-placeholder.png';
            } else {
                image_url = './img/dog-placeholder.png';
            }
        // }

        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogPost/', {
            method: 'POST',
            body: JSON.stringify({ title, body, pet_category, post_type, user_id, image_url}),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log('response', response    )
        if (response.ok) {
            // If successful, refresh to view
            document.location.reload();
            // window.location.href = `/blogs/${response.id}`;
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', postFormHandler);

    
document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.delete-blog');
    const userID = document.querySelector('#user-id').getAttribute('data-user-id');

    deleteButtons.forEach(button => {
        const blogOwner = button.getAttribute('data-blog-owner');
        console.log('blogOwner', blogOwner)
        console.log('userID', userID)
        if (blogOwner === userID) {
            button.classList.remove('is-hidden');
        } else {
            button.classList.add('is-hidden');
        }
    });
});

const deleteButtons = document.querySelectorAll('.delete-blog');

deleteButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    event.stopPropagation();

    const blogID = event.target.getAttribute('data-blog-id');

    const response = await fetch(`/api/blogPost/${blogID}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
});