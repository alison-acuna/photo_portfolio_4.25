var endpoint = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'

$.('.flickrSearch').on('click', function(event){
  $.getJSON(endpoint, {
    format: 'json',
    tagmode: 'any',
    tags: 'dog'
  })
  .done(function (res) {
    console.log(res)
    // render the first match
    // $('<') creates new element that we will need to append to our page.  Example $('<img />')
    res.items.map(function (item){
      $('<img />')
        .attr('src', res.items[0].media.m)
        // ? res.descends down the informoation
        .appendTo('.photos')
        // .appendTo() takes a selector
    })
  })
})
