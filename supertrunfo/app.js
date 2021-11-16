var cartas = [
    { nome: "Cyber End Dragon", imagem: "https://pm1.narvii.com/6281/015390478a7e8fa9646ee138fcbd2a31c1fb8946_hq.jpg", atributos: { ATK: 4000, DEF: 2800 } },
    { nome: "Slifer The Sky Dragon", imagem: "https://cdn.shoplightspeed.com/shops/645219/files/35455924/1652x1652x2/kotobukiya-preorder-yu-gi-oh-slifer-the-sky-dragon.jpg", atributos: { ATK: 3000, DEF: 3000 } },
    { nome: "Obelisk the Tormentor", imagem: "https://pm1.narvii.com/6372/f3a75f1770f4910c4e5aff1be4d84b1d5bdfa571_hq.jpg", atributos: { ATK: 4000, DEF: 4000 } },
    { nome: "The Winged Dragon of RA", imagem: "https://ms.yugipedia.com//5/59/TheWingedDragonofRa-TF06-JP-VG.png", atributos: { ATK: 2000, DEF: 4000 } }
];

let cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];
let cartaJogador = cartas[parseInt(Math.random() * cartas.length)];

const sortearCarta = () => {
    do {
        cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
    } while (cartaMaquina == cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador(cartaJogador, 'carta-jogador');
};


const jogar = () => {
    let divResultado = document.getElementById('resultado');
    let atributoSelecionado = null;
    let resultado = null;
    let atributos = document.getElementsByName('atributo');
    for (let i = 0; i < atributos.length; i++) {
        //console.log(atributos[i]);
        if (atributos[i].checked == true)
            atributoSelecionado = atributos[i].value;
    }
    if (atributoSelecionado) {
        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado])
            resultado = `<p class="resultado-final">Vencemo, Cr7.</p>`;
        else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado])
            resultado = `<p class="resultado-final">Perdemo, Messi.</p>`;
        else
            resultado = `<p class="resultado-final">Empatamo, Neymar.</p>`;
    }
    divResultado.innerHTML = resultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaJogador(cartaMaquina, 'carta-maquina');
};

const exibirCartaJogador = (cartaJogador, id) => {
    let divCartaJogador = document.getElementById(id);
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = '<div id="opcoes" class="carta-status">';
    let opcoesDoJogador = Object.entries(cartaJogador.atributos);
    let opcoes = '';
    opcoesDoJogador.forEach(atributo => {
        if (id.includes('jogador'))
            opcoes += `<input type="radio" name="atributo" value="${atributo[0]}"> ${atributo[0]}: ${atributo[1]} <br>`;
        else
            opcoes += `<p name="atributo" style="margin-left: 20px;">${atributo[0]}: ${atributo[1]}</p>`;
    });
    let nome = `<p class="carta-subtitle" style="margin-left: 50px;">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoes + '</div>';

};
console.log('carta-jogador'.includes('jogador'));