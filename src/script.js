$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
  };
  $(".slider").slick(slickOptions);

  setInterval(() => {
    const numbersCollection = document.querySelectorAll(".counter__number");

    numbersCollection.forEach((number) => {
      const currentNumber = parseInt(number.innerHTML);
      number.innerHTML = currentNumber + 1;
    });
  }, 1000);

  const counterOptions = {
    disply: 10,
    time: 1000,
  };
  $(".counter__number").counterUp(counterOptions);
});