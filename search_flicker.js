var endpoint = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'

// $('.flickrSearch').on('click', function(event){
//   alert(".text")
// })


$('#flickrSearch').on('click', function(event){
  $.getJSON(endpoint, {
    format: 'json',
    tagmode: 'any',
    tags: $('#fluffy').val(),
  })
  .done(function (res) {
    res.items.map(function (item){
      $('<img />')
        .attr('src', item.media.m)
        // ? res.descends down the informoation
        .prependTo('.photos')
        // .appendTo() takes a selector
    })
  })
})
