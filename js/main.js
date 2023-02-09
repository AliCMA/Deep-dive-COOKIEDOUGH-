class Cookie{
    name = "";
    htmlElement = undefined;
    constructor(newName, newHTMLElement){
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.onclick = this.onCookieClicked;
    }

    onCookieClicked(){
        console.log("geklikt!");
    }
}

class Score{
    defaultScore = 10000;
    name = "";
    htmlElement = undefined;

    constructor(newDefaultScore, newName, newHTMLElement){
        this.defaultScore = newDefaultScore;
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.innerText = newDefaultScore;
    }
}

const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"));
const score = new Score(0, "Default Score", document.getElementById("js--score"));
console.log('cookie');
console.log('score');

