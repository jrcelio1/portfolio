document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
    let errors = [];

    // Validação de nome (mínimo 2 caracteres)
    if (nome.length < 2) {
      errors.push('Por favor, insira um nome válido (mínimo 2 caracteres).');
    }

    // Validação de e-mail
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      errors.push('Por favor, insira um e-mail válido.');
    }

    // Validação de mensagem (mínimo 10 caracteres)
    if (mensagem.length < 10) {
      errors.push('A mensagem deve ter pelo menos 10 caracteres.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      // Aqui você pode enviar os dados com fetch()
      alert('Formulário enviado com sucesso!');
      this.reset();
    }
  });
});