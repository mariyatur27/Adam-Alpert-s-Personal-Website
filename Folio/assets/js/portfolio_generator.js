async function buildPortfolio(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("portfolio_works");
    let width = document.documentElement.clientWidth;
    console.log(width)
    
    for (const info of portfolio) {
        if (id == null || info.id == id) {
            let the_box = document.createElement("div");  the_box.classList.add("portfolio-item"); the_box.classList.add("filter-app"); the_box.classList.add(info.class); the_box.classList.add("flex-t"); the_box.classList.add("col-md-6");
            if (width <= 500){
                the_box.classList.remove("flex-t"); the_box.classList.remove("col-md-6");
                the_box.classList.add('item2');
                console.log(width)
            }
            // if (screen.matches) {
            //     the_box.classList.remove("flex-t"); the_box.classList.remove("col-md-6");
            //     console.log('media')
            // }else{
            //     the_box.classList.add("flex-t"); the_box.classList.add("col-md-6");
            // }
                let thumbnail = document.createElement("img"); thumbnail.classList.add("img-fluid"); thumbnail.src = info.thumbnail;
                the_box.appendChild(thumbnail);
                let contents = document.createElement("div"); contents.classList.add("box_contents");
                    let title = document.createElement("h4"); title.innerText = info.work_name; title.classList.add("p_title");
                    contents.appendChild(title);
                    let dscr = document.createElement("p"); dscr.innerText = info.work_description; dscr.classList.add("p_dscr");
                    contents.appendChild(dscr);
                    let date = document.createElement("h5"); date.innerText = info.date; date.classList.add("p_date");
                    contents.appendChild(date);
                the_box.appendChild(contents);
                let links = document.createElement("div"); links.classList.add("links");
                    let link1 = document.createElement("a"); link1.href = info.link; link1.setAttribute("target", "a_blank");
                    let icon1 = document.createElement("i"); icon1.classList.add("bi"); icon1.classList.add("bi-link"); icon1.classList.add("link-det-1"); 
                    link1.appendChild(icon1);
                    link1.appendChild(icon1);
                 links.appendChild(link1);
                the_box.appendChild(links);
            section.appendChild(the_box);
        }
    }
}

// the_box.classList.add("flex-t"); the_box.classList.add("col-md-6");