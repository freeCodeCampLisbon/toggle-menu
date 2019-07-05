(function () {
  const $el = document.querySelector('.toggle-menu');
  const $menu = document.querySelector('.menu-drawer');
  $el.addEventListener('click', function(){
    this.classList.toggle('active');
    $menu.classList.toggle('open');
  });
})();
