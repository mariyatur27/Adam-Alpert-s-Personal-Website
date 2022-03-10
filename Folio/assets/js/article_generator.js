// List of recipes on the front page
async function builArticle(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("article_section");
    
    for (const info of articles) {
        if (id == null || info.id == id) {
            console.log(info);
            let box = document.createElement("div"); box.classList.add("article_box");
                let thumbnail  = document.createElement("img"); thumbnail.classList.add("thumbnail"); thumbnail.src = info.image;
            box.appendChild(thumbnail);
            let content = document.createElement("div"); content.classList.add("w_content");
                let title = document.createElement("h2"); title.classList.add("article_title"); title.innerText = info.title;
                content.appendChild(title);
                let dscr = document.createElement("p"); dscr.classList.add("article_dscr"); dscr.innerText = info.description;
                content.appendChild(dscr);
                let button = document.createElement("button"); button.classList.add("rd_mr2"); button.id="rd_mr"; button.innerHTML = "Continue Reading"; button.id='black';
                let a_link = document.createElement("a"); a_link.href = info.link; a_link.setAttribute("target", "a_blank");
                a_link.appendChild(button);
                content.appendChild(a_link);
            box.appendChild(content);
            section.appendChild(box);
        }
    }
}