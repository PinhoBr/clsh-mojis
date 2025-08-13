$(document).ready(function () {
  // Inicializa o Select2 com imagens
  $('#emojis').select2({
    templateResult: formatOption,
    templateSelection: formatOption
  });

  // Botão de adicionar
  $('#adicionar').on('click', function () {
    const valor = $('#emojis').val();
    const imagem = $('#emojis').find(':selected').data('image');

    if (imagem) {
      const img = document.createElement('img');
      img.src = imagem;
      img.alt = valor;
      document.querySelector('#emojiGalery').appendChild(img);
    }
  });
});

// Função para renderizar imagem + texto no select
function formatOption(option) {
  if (!option.id) return option.text;

  const imagem = $(option.element).data('image');
  const texto = option.text;

  if (imagem) {
    return $(`
      <span><img src="${imagem}" style="width:20px; height:20px; margin-right:8px;">${texto}</span>
    `);
  } else {
    return option.text;
  }
}
