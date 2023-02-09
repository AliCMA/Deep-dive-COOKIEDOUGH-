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

    onCookieClicked = () =>{
        this.score.onCookieClicked();
    }
}

class Score{
    score;
    name = "";
    htmlElement = undefined;

    constructor(newScore, newName, newHTMLElement){
        this.score = newScore;
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.innerText = newScore;
    }

    onCookieClicked(){
        this.score = this.score + 1;
        this.htmlElement.innerText = this.score;
    }
}

const score = new Score(100, "Default Score", document.getElementById("js--score"));
const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"), score);

