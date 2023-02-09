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

const cookie = new Cookie("Default", document.getElementById("js--cookie"));


