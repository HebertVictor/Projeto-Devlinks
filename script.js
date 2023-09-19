function toggleMode() {
  const html = document.documentElement
  /*document é representação do documento em formato de objeto javascript.
  o ponto . é para acessar atributos e funcionalidades (nesse caso pegou a tag html)*/

  html.classList.toggle("light") //se tiver o light ele tira, do contrario coloca

  // pegar tag img
  const img = document.querySelector("#profile img") // querySelector é função que pesquisa pelo seletor

  //substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png") //ajustar um atributo, mudei o valor de src

    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo com óculos escuros e jaqueta"
    )
  }
  // sem light mode, mantem imagem padrão
  else {
    img.setAttribute("src", "./assets/avatar.png ")

    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
