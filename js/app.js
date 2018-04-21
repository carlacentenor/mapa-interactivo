var path = $('path');
path.on('click', function () {

  var id = this.id;
  depPeru.forEach(place => {
    if (place.id == id) {
      path.css('fill', 'rgb(255, 255, 255)');
      $(this).css('fill', 'rgb(177, 243, 226');
      $('#imgplaces').attr("src", `${place.img}`);
      $('#card-title').text(`${place.name}`);
      $('#card-text').text(`${place.des}`);

    }
  })
})