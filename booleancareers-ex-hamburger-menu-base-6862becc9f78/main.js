// PER IL CARICAMENTO DELLA PAGINA
$(document).ready(function(){

  //VEDO
  $('.header-right a').click(function(){
    $('.hamburger-menu').fadeIn();
  });

  //CHIUDO
  $('.close i').click(function(){
    $('.hamburger-menu').fadeOut();
  });

});
