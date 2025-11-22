
document.getElementById('postButton').addEventListener('click', createPost);
function createPost() {
    const contentBox = document.getElementById('postContent');
    const content = contentBox.value.trim();
    if (content === '') return;
    const postDiv = document.createElement('div');
    postDiv.className = 'post'; 
    postDiv.innerHTML = `
        <p>${content}</p>
        <div class="actions">
            <button onclick="likePost(this)">Like (<span>0</span>)</button>
            <button onclick="toggleCommentSection(this)">Comment</button>
        </div>
        <div class="comment-section" style="display:none;">
            <input type="text" placeholder="Write a comment..." onkeydown="addComment(event, this)">
            <div class="comments"></div>
        </div>
    `;
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.prepend(postDiv);
    contentBox.value = '';
}
function likePost(buttonElement) {
    const likeSpan = buttonElement.querySelector('span');
    let currentLikes = parseInt(likeSpan.textContent);
    currentLikes += 1; 
    likeSpan.textContent = currentLikes;
}
function toggleCommentSection(buttonElement) {
    const commentSection = buttonElement.parentElement.nextElementSibling;

    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block';
    } else {
        commentSection.style.display = 'none';
    }
}
function addComment(event, inputBox) {
    if (event.key === 'Enter') {
        const commentText = inputBox.value.trim();

        if (commentText === '') return;
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;
        const commentsContainer = inputBox.nextElementSibling;
        commentsContainer.appendChild(commentDiv);
        inputBox.value = '';
    }
}
