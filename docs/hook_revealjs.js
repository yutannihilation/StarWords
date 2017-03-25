Reveal.addEventListener( 'ready', function( event ) {
  document.querySelector("div.reveal").classList.add("star-wars-intro");
  var slides = document.querySelector("div.slides");
  slides.outerHTML = '<div class="main-content">' + slides.outerHTML + '</div>';

  document.querySelectorAll(".star-wars-intro p").forEach(function(x) { x.classList.add("content-body"); });

  document.querySelector("section.present").classList.add("title-content");
});


Reveal.addEventListener( 'slidechanged', function( event ) {
	var title_content_slides = document.querySelectorAll(".title-content");
  title_content_slides.forEach(function(x) { x.classList.remove("title-content"); });

	document.querySelector("section.present").classList.add("title-content");
});
