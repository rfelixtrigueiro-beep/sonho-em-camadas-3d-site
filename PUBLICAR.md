# Sonho em Camadas 3D

O site é estático e funciona sem instalação ou etapa de compilação.

## Prévia e edição

1. Extraia o ZIP inteiro e abra `index.html` no navegador.
2. Edite os textos e seções em `index.html`. A paleta e os tamanhos ficam em `estilos.css`. A tipografia Geist usa Google Fonts quando há internet e uma fonte do sistema como alternativa.
3. Abra `config.js` e preencha `whatsapp` entre as aspas, com código do país (55 para Brasil), DDD e número comercial, apenas dígitos. Salve e recarregue. O botão do WhatsApp abrirá uma conversa com o pedido preenchido. Com o campo vazio, o site oferece contato pelo Instagram e cópia do pedido nos navegadores compatíveis.
4. O PNG original da logo fica na raiz do repositório. O Camadinho tem uma seção textual com acesso ao Instagram. Você pode acrescentar uma foto do mascote ou dos produtos ao repositório e inserir a imagem na seção correspondente, com descrição no atributo `alt`.

## Publicação

1. Use uma hospedagem de sites estáticos. Faça o upload do conteúdo extraído, com `index.html`, `estilos.css`, `config.js`, `site.js` e o PNG da logo na raiz do site. Você pode deixar este guia fora da pasta publicada.
2. Ative HTTPS na hospedagem. Se usar um domínio próprio, siga as instruções de DNS do provedor.
3. Quando souber a URL final, inclua no `<head>` de `index.html` uma tag `<link rel="canonical" href="…">` e a tag `<meta property="og:url" content="…">`, ambas com o endereço público completo. Para usar a logo como imagem de compartilhamento, acrescente `<meta property="og:image" content="…">` com a URL pública absoluta do PNG. O título, a descrição, as demais tags de compartilhamento e os dados estruturados da organização já estão no HTML.
4. Abra a página publicada no celular e no computador. Confira a navegação, a logo, o Instagram e o botão de orçamento. Com o WhatsApp preenchido, confirme que a conversa abre com a categoria e os detalhes corretos.


