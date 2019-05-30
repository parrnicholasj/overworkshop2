function addPost(e) {
  e.preventDefault();

  const title = $('#title')
    .val()
    .trim();
  const link = $('#link')
    .val()
    .trim();
  const desc = $('#desc')
    .val()
    .trim();
  
  const photo = document.getElementById('screenshot').files[0];

  const postData = new FormData();
  postData.append('title', title);
  postData.append('link', link);
  postData.append('desc', desc);
  postData.append('screenshot', photo);

  console.log(postData);

  $.ajax({
    url: '/api/posts/add',
    method: 'post',
    data: postData,
    contentType: false,//prevents from being treated like json
    processData: false //^^^^^^^^^^^
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}