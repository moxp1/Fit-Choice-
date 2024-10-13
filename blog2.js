document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const article = this.closest('.blog-post');
        const fullContent = article.querySelector('.full-content');
        const previewText = article.querySelector('.preview-text');
        
        if (fullContent.style.display === 'none') {
            fullContent.style.display = 'block';
            previewText.style.display = 'none';
            this.textContent = 'Read Less';
        } else {
            fullContent.style.display = 'none';
            previewText.style.display = 'block';
            this.textContent = 'Read More';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.animated-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Stagger the animation
        item.classList.add('animate'); // Add class to trigger animation
    });
});
// blog.js
// blog.js

// Function to post a comment
document.getElementById('post-comment-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const commentText = commentInput.value.trim();

    if (nameText && commentText) {
        // Get the current date
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${nameText}</strong> <em>(${formattedDate})</em><br>${commentText}`; // Format: Name (Date): Comment

        // Append the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(comment);

        // Clear the input fields
        nameInput.value = '';
        commentInput.value = '';
    } else {
        alert('Please enter both your name and a comment before posting.');
    }
});
// blog.js

// Function to post a comment
document.getElementById('post-comment-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const emailText = emailInput.value.trim();
    const commentText = commentInput.value.trim();

    // Validate inputs
    if (nameText && emailText && commentText) {
        // Get the current date
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${nameText}</strong> <em>(${formattedDate})</em><br>${commentText} <br><small>Email: ${emailText}</small>`; // Format: Name (Date): Comment

        // Append the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(comment);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';
    } else {
        alert('Please enter your name, email, and a comment before posting.');
    }
});
// blog.js

// reply//
// blog.js

// Function to post a comment
document.getElementById('post-comment-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const emailText = emailInput.value.trim();
    const commentText = commentInput.value.trim();

    // Validate inputs
    if (nameText && emailText && commentText) {
        // Get the current date
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${nameText}</strong> <em>(${formattedDate})</em><br>${commentText} <br><small>Email: ${emailText}</small><br>
            <button class="reply-btn">Reply</button>
            <div class="reply-container" style="display: none;"></div>`; // Add reply button and container

        // Append the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(comment);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';

        // Add event listener for the reply button
        const replyButton = comment.querySelector('.reply-btn');
        replyButton.addEventListener('click', function() {
            // Hide all other reply containers
            const allReplyContainers = document.querySelectorAll('.reply-container');
            allReplyContainers.forEach(container => {
                if (container !== replyButton.nextElementSibling) {
                    container.style.display = 'none'; // Hide other reply containers
                }
            });

            const replyContainer = replyButton.nextElementSibling;
            if (replyContainer.style.display === 'none') {
                replyContainer.style.display = 'block';
                replyContainer.innerHTML = `
                    <input type="text" class="reply-input" placeholder="Your Name" />
                    <textarea class="reply-input" placeholder="Write a reply..." rows="2"></textarea>
                    <button class="post-reply-btn">Post Reply</button>
                `;
            } else {
                replyContainer.style.display = 'none';
            }

            // Add event listener for posting a reply
            const postReplyButton = replyContainer.querySelector('.post-reply-btn');
            postReplyButton.addEventListener('click', function() {
                const replyNameInput = replyContainer.querySelector('.reply-input:nth-of-type(1)');
                const replyCommentInput = replyContainer.querySelector('.reply-input:nth-of-type(2)');
                const replyNameText = replyNameInput.value.trim();
                const replyCommentText = replyCommentInput.value.trim();

                if (replyNameText && replyCommentText) {
                    const replyDate = new Date();
                    const replyFormattedDate = replyDate.toLocaleDateString(undefined, options);
                    const reply = document.createElement('div');
                    reply.classList.add('reply');
                    reply.innerHTML = `<strong>${replyNameText}</strong> <em>(${replyFormattedDate})</em><br>${replyCommentText}`;
                    replyContainer.appendChild(reply);

                    // Clear the reply input fields
                    replyNameInput.value = '';
                    replyCommentInput.value = '';
                } else {
                    alert('Please enter your name and a reply before posting.');
                }
            });
        });
    } else {
        alert('Please enter your name, email, and a comment before posting.');
    }
});

/*directed*/
// blog.js

// Function to post a comment
document.getElementById('post-comment-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const emailText = emailInput.value.trim();
    const commentText = commentInput.value.trim();

    // Validate inputs
    if (nameText && emailText && commentText) {
        // Get the current date
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${nameText}</strong> <em>(${formattedDate})</em><br>${commentText} <br><small>Email: ${emailText}</small><br>
            <button class="reply-btn">Reply</button>
            <div class="reply-container" style="display: none;"></div>`; // Add reply button and container

        // Append the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(comment);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';

        // Add event listener for the reply button
        const replyButton = comment.querySelector('.reply-btn');
        replyButton.addEventListener('click', function() {
            // Set the name input to the name of the person being replied to
            nameInput.value = nameText; // Optional: Pre-fill the name input
            commentInput.placeholder = `Replying to ${nameText}...`; // Change placeholder to indicate reply
            commentInput.focus(); // Focus on the comment input area
        });
    } else {
        alert('Please enter your name, email, and a comment before posting.');
    }
});
/*cannot be edited*/
// blog.js

// Function to post a comment
document.getElementById('post-comment-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const emailText = emailInput.value.trim();
    const commentText = commentInput.value.trim();

    // Validate inputs
    if (nameText && emailText && commentText) {
        // Get the current date
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${nameText}</strong> <em>(${formattedDate})</em><br>${commentText} <br><small>Email: ${emailText}</small><br>
            <button class="reply-btn">Reply</button>
            <div class="reply-container" style="display: none;"></div>`; // Add reply button and container

        // Append the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(comment);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';

        // Add event listener for the reply button
        const replyButton = comment.querySelector('.reply-btn');
        replyButton.addEventListener('click', function() {
            // Set the name input to the name of the person being replied to
            nameInput.value = nameText; // Optional: Pre-fill the name input
            commentInput.placeholder = `Replying to ${nameText}...`; // Change placeholder to indicate reply
            commentInput.focus(); // Focus on the comment input area
        });
    } else {
        alert('Please enter your name, email, and a comment before posting.');
    }
});
/*disabled*/
// blog.js

// Function to post a comment
document.getElementById('post-comment-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const commentInput = document.getElementById('comment-input');
    const nameText = nameInput.value.trim();
    const emailText = emailInput.value.trim();
    const commentText = commentInput.value.trim();

    // Validate inputs
    if (nameText && emailText && commentText) {
        // Get the current date
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        // Create a new comment element
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${nameText}</strong> <em>(${formattedDate})</em><br>${commentText} <br><small>Email: ${emailText}</small><br>
            <button class="reply-btn">Reply</button>
            <div class="reply-container" style="display: none;"></div>`; // Add reply button and container

        // Append the new comment to the comments container
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.appendChild(comment);

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';

        // Disable the comment input area
        commentInput.disabled = true;

        // Add event listener for the reply button
        const replyButton = comment.querySelector('.reply-btn');
        replyButton.addEventListener('click', function() {
            // Set the name input to the name of the person being replied to
            nameInput.value = nameText; // Optional: Pre-fill the name input
            commentInput.placeholder = `Replying to ${nameText}...`; // Change placeholder to indicate reply
            commentInput.focus(); // Focus on the comment input area
            commentInput.disabled = false; // Enable the comment input for replying
        });
    } else {
        alert('Please enter your name, email, and a comment before posting.');
    }
});
/*posted comments*/
/* Styling the comments section */
#comments-section {
    width: 60%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

#comments-section h2 {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 20px;
}

#comment-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
}

#comment-form input, #comment-form textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1em;
    outline: none;
}

#comment-form input:focus, #comment-form textarea:focus {
    border-color: #007acc;
}

#post-comment-btn {
    padding: 10px 20px;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

#post-comment-btn:hover {
    background-color: #005f99;
}

#comments-container {
    margin-bottom: 30px;
}

.comment {
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment .comment-author {
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
}

.comment .comment-body {
    font-size: 1em;
    color: #555;
}
