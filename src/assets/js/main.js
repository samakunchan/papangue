document.addEventListener('DOMContentLoaded', () => {
  /**
   * Toggle mobile nav dropdowns
   * TODO A faire en Angular
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach((el) => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    });
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter')
      ? portfolionIsotope.getAttribute('data-portfolio-filter')
      : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout')
      ? portfolionIsotope.getAttribute('data-portfolio-layout')
      : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort')
      ? portfolionIsotope.getAttribute('data-portfolio-sort')
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
