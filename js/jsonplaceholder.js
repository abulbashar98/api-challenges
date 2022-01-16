const loadComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    displayComments(data);
}




const displayComments = comments => {
    console.log(comments)

    const commentsContainerDiv = document.getElementById('comments-container')

    comments.forEach(comment => {

        const div = document.createElement('div')
        div.innerHTML = `
        <div   class="card"  onclick="loadCommentById('${comment.id}')" >
        <img src="..." class="card-img-top" alt="...">
        <div  class="card-body">
          <h5 class="card-title">Name: ${comment.name}</h5>
          <h6>Email: ${comment.email}</h6>
          <p class="card-text">Comment: ${comment.body}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
`
        commentsContainerDiv.appendChild(div)
    });
}




const loadCommentById = async id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const response = await fetch(url);
    const singleCommentDetail = await response.json();
    displayCommentDetail(singleCommentDetail);
}


const displayCommentDetail = comment => {

    const commentDetailContainer = document.getElementById('comment-detail')
    commentDetailContainer.textContent = '';


    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div  class="card-body bg-info">
    <h5 class="card-title">Name: ${comment.name}</h5>
    <h6>Email: ${comment.email}</h6>
    <p class="card-text">Comment: ${comment.body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    `
    commentDetailContainer.appendChild(div)



}







