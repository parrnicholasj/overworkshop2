
$(".voteUp").on("click", function(){

  const getId=$(this).attr("upVoteId")

  console.log(getId)


  if (!authenticate()) {
    return
  }

  $.ajax({
    url: `/upvotepost/${getId}`,
    method: "PUT"
  }).then(location.reload())
  .catch(err => console.log(err))

})

$(".voteDown").on("click", function(){

  const getId=$(this).attr("downVoteId")

  console.log(getId);
  
  $.ajax({
    url: `/downvotepost/${getId}`,
    method: "PUT"
  }).then(location.reload())
  .catch(err => console.log(err))

})