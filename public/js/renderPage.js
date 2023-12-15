function renderPage(data) {
    // get poem container to append poem to
    const poemContainer = document.getElementById("poem-container");
    poemContainer.replaceChildren(); // clear poem container

    // create h2 for poem title
    const poemTitle = document.createElement("h2");
    poemTitle.innerText = data.title;
    poemTitle.className = "header";
    poemContainer.appendChild(poemTitle);

    // create h3 for poem author
    const poemAuthor = document.createElement("h3");
    poemAuthor.innerText = data.author;
    poemAuthor.className = "header";
    poemContainer.appendChild(poemAuthor);

    // create ordered list to show poemn lines
    const poem = document.createElement("ol");
    for (let i = 0; i < data.lines.length; i++) {
        // chcek for empty lines, don't render empty lines
        if (data.lines[i].length !== 0) {
            // create list item for every single line in poem
            const line = document.createElement("li");
            line.innerText = data.lines[i];
            poem.appendChild(line); // append line to poem ol
        }
    }
    // append poem to poemContaine
    poemContainer.appendChild(poem);
}

export { renderPage };