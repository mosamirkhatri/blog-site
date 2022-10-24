function like(postId) {
  const likeCount = document.getElementById(`likes-count-${postId}`);
  const likeButton = document.getElementById(`like-button-${postId}`);
  fetch(`/like-post/${postId}`, { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      likeCount.innerText = data.likes;
      likeButton.className = data.liked
        ? "fas fa-thumbs-up"
        : "far fa-thumbs-up";
    })
    .catch(() => alert("Cound not like the Post"));
}
