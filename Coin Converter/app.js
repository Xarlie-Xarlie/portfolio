function Convert(value, currency) {
    var url = `https://economia.awesomeapi.com.br/last/USD-${currency},BTC-USD`;
    if (!value) value = 0;

    value = parseFloat(value);

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
            var resposta = JSON.parse(request.responseText);
            var tax = resposta[`USD${currency}`].high;
            var taxBTC = 1 / resposta.BTCUSD.high;
            var convertedValueToBRL = value * tax;
            var convertedValueToBTC = value * taxBTC;
            var valueConvertedDolHTML = document.getElementById("valorConvertido");
            var valueConvertedBTCHTML = document.getElementById("valueBTC");
            valueConvertedDolHTML.innerHTML =
                "Valor em USD convertido para " +
                currency +
                " é " +
                convertedValueToBRL.toFixed(2);
            valueConvertedBTCHTML.innerHTML =
                "Valor em USD convertido para BTC é " + convertedValueToBTC.toFixed(7);
        }
    };

    request.onerror = function () {
        console.log("Erro:" + request);
    };
    request.send();
}
