// blog.js
// blog.js
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
// blog.js
function searchBlog() {
    const input = document.getElementById('blogSearchBar');
    const filter = input.value.toLowerCase();
    const blogContainer = document.getElementById('blogContainer');
    const blogPosts = blogContainer.getElementsByClassName('blog-post');

    for (let i = 0; i < blogPosts.length; i++) {
        const title = blogPosts[i].getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            blogPosts[i].style.display = ""; // Show the post
        } else {
            blogPosts[i].style.display = "none"; // Hide the post
        }
    }
}