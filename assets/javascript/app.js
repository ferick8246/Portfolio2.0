$(document).ready(() => {
  AOS.init();
  $(".body-transition").hide();

  let renderAnimation = () => {
    intro = $("<h1>");
    intro.addClass(
      "space-mono accent-color px-18 skew rounded animated zoomIn slow intro-element"
    );
    intro.text("E");
    let container = $("<div>");
    container.addClass("lead-container");
    let row = $("<div>");
    row.addClass("row text-center d-flex justify-content-center");
    let col = $("<div>");
    col.addClass("col-md-12 d-flex justify-content-center");
    col.append(intro);
    row.append(col);
    container.append(row);
    $("body").append(container);
  };
  renderAnimation();

  let addZoomOut = () => {
    intro.addClass("animated zoomOut blur");
  };

  const renderAutoTyper = () => {
    const displayBio = $("#display-bio");
    const words = "I build things for the web.".split("");
    let i = 0;

    let bioInterval = setInterval(() => {
      const letters = words[i];
      if (!letters) {
        clearInterval(bioInterval);
      } else {
        displayBio.append(letters);
        i++;
      }
    }, 100);
  };

  // Renders the portfolio, this runs after the intro animation is over
  const renderPortfolio = () => {
    $(".intro-element").hide();
    $(".body-transition").show();
    showAutoTyper = setTimeout(renderAutoTyper, 2300);
  };

  // These setTimeouts call the addZoomOut function first then finally the renderPortfolio function
  addZoomOutClass = setTimeout(addZoomOut, 3000);
  show = setTimeout(renderPortfolio, 4300);


    // Toggle class on navbar when scrolling
    $(document).scroll(function () {
      let nav = $(".navbar");
      nav.toggleClass('scrolled', $(this).scrollTop() > nav.height() * 20);
    });
});
