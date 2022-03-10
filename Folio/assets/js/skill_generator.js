async function skillSlides(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("swiper-wrapper");
    
    for (const skill of skills) {
        if (id == null || info.id == id) {
            var slide = document.createElement("div"); slide.classList.add("swiper-slide");
                var contents = document.createElement("div"); contents.classList.add("services-block");
                    var name = document.createElement("span"); name.innerText = skill.title;
                    contents.appendChild(name);
                    var dscr = document.createElement("p"); dscr.classList.add("separator"); dscr.innerText = skill.description;
                    contents.appendChild(dscr);
                slide.appendChild(contents);
            section.appendChild(slide);
        }
    }
}