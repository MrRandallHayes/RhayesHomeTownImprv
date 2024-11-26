var carousel;


carousel = ['https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/7d/82/41.jpg', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/06/1d/56.jpg', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/06/1d/63.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxYqaxI9krMYxNtrI3cKF3nzDVDQ9Exaizg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKhv5yKOR2mKJL3N-Taf3xACTChVl7B2xmw&s'];
let element_image_display = document.getElementById('image-display');
element_image_display.setAttribute("src", carousel[0]);


document.getElementById('prev-btn').addEventListener('click', (event) => {
  let element_image_display2 = document.getElementById('image-display');
  carousel.unshift(carousel.pop());
  element_image_display2.setAttribute("src", carousel.slice(-1)[0]);

});

document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_image_display3 = document.getElementById('image-display');
  carousel.push(carousel.shift());
  element_image_display3.setAttribute("src", carousel[0]);

});

