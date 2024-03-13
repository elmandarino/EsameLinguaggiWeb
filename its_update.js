
    const response = await fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json");
    const json = await response.json();
    

    let testo = document.getElementsByClassName("item_text");
    console.log(testo);

    for (let i = 0; i < testo.length; i++)
{
    testo[i].innerText = json.programming_languages_popular[i];
}

    

    let immagine = document.getElementsByTagName("img");
    console.log(immagine);
     immagine[0].attributes.src.textContent = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/300px-W3Schools_logo.svg.png";
     immagine[3].attributes.src.textContent = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/300px-W3Schools_logo.svg.png";
     