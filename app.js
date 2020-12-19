var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");


//url
var serverURL = "https://api.funtranslations.com/translate/navi.json"


//change url with ?
function getTranslateUrl(input) {
    return serverURL + "?" + "text=" + input
}


//input part 
function onClick() {
    var inputText = txtInput.value;


    fetch(getTranslateUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
}


btnTranslate.addEventListener("click", onClick)