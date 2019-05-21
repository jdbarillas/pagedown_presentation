slideshow.on('afterShowSlide', function(slide) { 
  n_slide = slide.getSlideIndex();
  current_timer = document.querySelector('#air_timer_' + n_slide);
  if (!current_timer) return;
  current_timer.click();
  console.log(n_slide);
});