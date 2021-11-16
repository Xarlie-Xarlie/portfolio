var listaAnimes = ["https://blogs.opovo.com.br/tomodachinerds/wp-content/uploads/sites/102/2021/05/tsukigamichibikuisekaidouchu_main-740x1036.jpg",
  "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2020/05/Tensei-Shitara-Slime-Datta-Ken-2-adiado-para-2021-1.jpg?resize=640%2C905&ssl=1",
  "https://animefire.net/img/animes/kanojo-mo-kanojo-large.webp?v=1"];


const addAnime = addlink => {
  var adicionado = false;
  listaAnimes.forEach(anime => {
    if (addlink === anime)
      adicionado = true;
  });
  if (!adicionado & addlink !== "" & addlink.endsWith(".jpg"))
    listaAnimes.push(addlink);
  listarNaTela();
};

const listarNaTela = () => {
  document.getElementById("result").innerHTML = "";
  listaAnimes.forEach(anime => {
    document.getElementById("result").innerHTML += `<img class="pictures" src="${anime}">`;
  });
  const imagem = document.querySelectorAll('img.pictures');
  imagem.forEach(image => {
    image.addEventListener('click', e => {
      //listaAnimes.remove(e.target.src);
      e.target.remove();
    });
  });
};

listarNaTela();



