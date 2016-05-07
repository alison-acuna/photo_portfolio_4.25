// Allow user to create new albums with their Imgur account

// This function is not called here.  It sets up the functions below

function openFile (event) {
  var input = event.target;
  console.log(input)
  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    uploadImgur(dataURL)
  };
  reader.readAsDataURL(input.files[0]);
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



// This prevents default behavior we don't want

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

// Color Change on dragenter and dragleave

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

// When drop - color change and function called

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
            // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "blue";
          openFile(event)
          // I'm not sure what to feed in openFile() above
        }
  }, false);




function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
