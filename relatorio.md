Relatório Técnico do Portfólio Front-End
1. Introdução
Este relatório detalha as escolhas de design, arquitetura, tecnologias utilizadas e desafios enfrentados durante o desenvolvimento deste site-portfólio. O objetivo do projeto é apresentar de forma clara e atraente os trabalhos de desenvolvimento Front‑End, aplicando conceitos estudados em disciplina de Programação Front‑End.
2. Escolhas de Design
 Tipografia e Layout
Fonte Principal (Arial, sans-serif): legível e amplamente suportada.


Hierarquia de Títulos: <h1> para título da página, <h2> para seções, garantindo estrutura semântica.


Grid Layout: em .grid-projetos para distribuir cards de projetos de forma responsiva.


Flexbox: em .lista-skills para alinhar “skills” horizontalmente com wrap.


3. Arquitetura do Site
portfolio/
│
├── index.html      ← Página inicial
├── sobre.html      ← Sobre Mim
├── projetos.html   ← Detalhamento de projetos
├── contato.html    ← Formulário de contato
│
├── css/
│   └── style.css   ← Estilos globais
│
├── js/
│   ├── main.js    ← Menu mobile e efeitos interativos
│   └── form-validation.js ← Validação de formulário
│
├── assets/
│   ├── img/       ← Capturas de tela e imagens de projetos
│   └── logos/     ← Logos de tecnologias
│
└── docs/
    └── relatorio_tecnico.md ← Documento técnico

Cada página HTML é independente, chamando o mesmo CSS e scripts JS.


Organização modular: estilos em css/style.css, lógica em js/, recursos em assets/.


4. Tecnologias Utilizadas
Tecnologia
Uso
HTML5
Marcações semânticas e acessibilidade
CSS3
Estilos, variáveis CSS, Grid, Flexbox, media queries
JavaScript (ES6)
Manipulação de DOM, menu hamburger, smooth scroll




Git & GitHub
Controle de versão e hospedagem no GitHub Pages

5. Aplicação de Conceitos da Disciplina
Semântica HTML5: uso de <header>, <nav>, <main>, <section>, <footer>.


Responsividade: media queries adaptando layout para múltiplos tamanhos de tela.


Interatividade: validação de formulário (JavaScript), smooth scroll e hover effects.


SEO Básico: meta tags (description, keywords), textos alternativos em imagens e headings apropriados.


6. Desafios Enfrentados
Consistência Visual: encontrar a paleta equilibrada de cores que fosse acessível.


Grid Responsivo: ajustar minmax() e auto-fit para que os cards não ficassem muito estreitos.


Validação de Formulário: criar validações simples porém robustas para diferentes tipos de input.


7. Conclusão
O portfólio cumpre os requisitos de responsividade, interatividade e boas práticas de SEO aprendidos na disciplina. A estrutura modular facilita manutenção e extensões futuras, como adição de mais projetos ou integração com APIs.
