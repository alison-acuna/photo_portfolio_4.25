// How do I test the knot of code we got?

// Capture photo data

document.load = function (){
  console.log("Hello");
}();

// attach to event listener




var openFile = function (event) {
  var input = event.target;
  console.log(input)
  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    uploadImgur(dataURL)
  };
  reader.readAsDataURL(input.files[0]);
}();

document.addEventListener("drop", openFile)

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
