document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.btn-menu');
  const navList = document.querySelector('.menu ul');

  // Toggle do menu hamburger em mobile
  btnMenu?.addEventListener('click', () => {
    navList.classList.toggle('ativo');
  });

  // Exemplo de efeito interativo usando jQuery (se estiver carregado)
  if (window.jQuery) {
    $('.botao-fade').on('click', function() {
      $('#alvo').fadeIn(500);
    });
  }
});