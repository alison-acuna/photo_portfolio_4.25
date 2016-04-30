// Pull Images from imgur to the Page

uploadImgur(base64){
  // ajax request with jquery use personal client id
  $.ajax({
  method: 'POST',
  url: 'https://api.imgur.com/3/image',
  headers: {
    Authorization: 'Client-ID 157c49ead81731a',
  },
  data: {
    image: base64 // base64 string, not a data URI
  }
})
  .done(function (res) {
    console.log(res); // image successfully uploaded
  })
  .error(function (err) {
    console.log(err);
  });
}

$('input:file').on('change', function(event){
  var file = event.target.files[0]
  var reader = new FileReader()
  // this initializes a new file reader object
  // specify onload function to run after the file has been read
  reader.onload = function(event) {
    var dataURI = event.target.result
    console.log(dataURI)
    var base64 = dataURI.replace(/^.*base64,/, '');
    // logging the result of reading our file

    uploadImgur(base64)
  }
  reader.readAsDataURL(file)
// use a url directly as a file

})
