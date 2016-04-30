
// Capture photo data

var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };


// Append to file



// $('#submit').click(function() {
//     // when the add file button is clicked append
//     // a new <input type="file" name="someName" />
//     // to a filesContainer div
//     alert("The paragraph was clicked.");
//     // $('.photos').append(
//     //     $('<input/>').attr('type', 'file').attr('name', 'someName')
//     // );
// });



// Accessed JSON file from the same location as a our website
// Source properties were random images found online
//
// var endpoint = 'photos.json'
//
// $.getJSON(endpoint)
//   .done(function (res) {
//     console.log(res)
//     // render the first match
//     // $('<') creates new element that we will need to append to our page.  Example $('<img />')
//     res.map(function (item){
//       $('<img />')
//         .attr('src', item.src)
//         // ? res.descends down the informoation
//         .appendTo('.photos')
//         // .appendTo() takes a selector
//     })
//   })
//
//
// // Allow user to create new albums with their Imgur account
//
//
//
//
// $("#submitImgur").click(function(){
//   alert("The paragraph was clicked.");
//   uploadImgur()
// })
//
// function uploadImgur (base64){
//   $.ajax({
//   method: 'POST',
//   url: 'https://api.imgur.com/3/image',
//   headers: {
//     Authorization: 'Client-ID 157c49ead81731a',
//   },
//   data: {
//     image: base64 // base64 string, not a data URI
//   }
// })
//   .done(function (res) {
//     console.log(res); // image successfully uploaded
//     var imageElement = document.createElement("img")
//     imageElement.setAttribute("src", res.data.link)
//     $(".portfolio").append(imageElement)
//   })
//   .error(function (err) {
//     console.log(err);
//   });
// }
