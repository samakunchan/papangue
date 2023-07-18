document.addEventListener('DOMContentLoaded', () => {
  /**
   * Porfolio isotope and filter
   */
  let portfolioIsotope = document.querySelector('.portfolio-isotope');

  if (portfolioIsotope) {
    let portfolioFilter = portfolioIsotope.getAttribute('data-portfolio-filter')
      ? portfolioIsotope.getAttribute('data-portfolio-filter')
      : '*';
    let portfolioLayout = portfolioIsotope.getAttribute('data-portfolio-layout')
      ? portfolioIsotope.getAttribute('data-portfolio-layout')
      : 'masonry';
    let portfolioSort = portfolioIsotope.getAttribute('data-portfolio-sort')
      ? portfolioIsotope.getAttribute('data-portfolio-sort')
      : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort,
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function (el) {
        el.addEventListener(
          'click',
          function () {
            document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter'),
            });
            if (typeof aos_init === 'function') {
              aos_init();
            }
          },
          false,
        );
      });
    });
  }

  /**
   * Animation on scroll function and init
   * TODO Il y a peut etre que ça d'utile ici
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }

  window.addEventListener('load', () => {
    aos_init();
  });
});
