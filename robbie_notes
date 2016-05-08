
// File details displayed in console

console.log("hi")
function stop (event) {
  event.preventDefault();
  event.stopPropagation();
}



$('.dropzone').on('dragenter dragover', stop);

$('.dropzone').on('drop', function(event) {

  stop(event);
  console.log(event)
  console.log(event.originalEvent.dataTransfer.files[0])
})


// recopied for changes

$('.dropzone').on('drop', function(event) {
  stop(event);
  var originalEvent = event.originalEvent;
  var dataTransfer = originalEvent.dataTransfer;
  // console.log(dataTransfer.files[0])

})


function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
