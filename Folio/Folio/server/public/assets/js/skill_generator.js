async function skillSlides(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("swiper-wrapper");
    
    for (const skill of skills) {
        if (id == null || info.id == id) {
            var slide = document.createElement("div"); slide.classList.add("swiper-slide");
                var contents = document.createElement("div"); contents.classList.add("services-block");
                    var icon = document.createElement("i"); icon.classList.add("bi"); icon.classList.add(skill.icon_name);
                    contents.appendChild(icon);
                    var name = document.createElement("span"); name.innerText = skill.title;
                    contents.appendChild(name);
                    var dscr = document.createElement("p"); dscr.classList.add("separator"); dscr.innerText = skill.description;
                    contents.appendChild(dscr);
                slide.appendChild(contents);
                var links = document.createElement("div"); links.classList.add("link");
                    let link1 = document.createElement("a"); link1.setAttribute("target", "a_blank");
                    let icon1 = document.createElement("i"); icon1.classList.add("bi"); icon1.classList.add("bi-link"); icon1.classList.add("link-det-2");
                    link1.appendChild(icon1);

                    let link2 = document.createElement("a"); link2.setAttribute("target", "a_blank");
                    let icon2 = document.createElement("i"); icon2.classList.add("bi"); icon2.classList.add("bi-heart"); icon2.classList.add("link-det-2");
                    link2.appendChild(icon2);

                 links.appendChild(link2);
                 links.appendChild(link1);
                slide.appendChild(links);
            section.appendChild(slide);
        }
    }
}