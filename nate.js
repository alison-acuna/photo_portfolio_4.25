// Allow user to create new albums with their Imgur account

// This function is not called here.  It sets up the functions below

function FileToUri (file) {
  var reader = new FileReader();
  reader.onload(function(event))
  var base64Uri = reader.readAsDataURL(file);
  console.log(base64Uri);
  base64Uri.repalce(/^.*base64,/,'')
  reader.onload = function(){
    var dataURL = reader.result;
    uploadImgur(dataURL)
  };
  reader.readAsDataURL(file);
}


// Allow user to create new albums with their Imgur account


function uploadImgur (base64){
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
    var imageElement = document.createElement("img")
    imageElement.setAttribute("src", res.data.link)
    $(".portfolio").append(imageElement)
  })
  .error(function (err) {
    console.log(err);
  });
}

$("#submit").on("click", function(event){
  console.log($("#file"));
  var fileInput = $("#file")[0];
  var file = fileInput.files[0];
  console.log(event);
});

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
