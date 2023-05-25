const commentFormHandler = async (event) => {
    console.log('commentFormHandler')
    event.preventDefault();

    // Collect values from the comment form
    const comment_body = document.querySelector('#new-comment').value.trim();
    if (comment_body) {
        const userID_El = document.querySelector('#user-id');
        const user_id = userID_El.getAttribute('data-user-id');;

        const postID_el = document.querySelector('#blog-title');
        var blogPost_id = postID_el.getAttribute('data-blog-id');

        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ comment_body, user_id, blogPost_id }),
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
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
