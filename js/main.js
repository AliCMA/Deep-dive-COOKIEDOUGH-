class Cookie{
    name = "";
    htmlElement = undefined;
    score = undefined;
    constructor(newName, newHTMLElement,newScore){
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.onclick = this.onCookieClicked;
        this.score = newScore;
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

const score = new Score(0, "Default Score", document.getElementById("js--score"));
const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"), score);
cookie.score.htmlElement.style.background = "red";

