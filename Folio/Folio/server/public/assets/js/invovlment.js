async function invovleBoxes(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("slider_section");
    
    for (const info of involvements) {
        if (id == null || info.id == id) {
            let the_box = document.createElement("div"); the_box.classList.add('swiper-slide');
                let img = document.createElement("img"); img.src = info.image; img.classList.add('img-fluid'); img.setAttribute('alt', info.name); img.classList.add("img-f2");
                the_box.appendChild(img);
            section.appendChild(the_box);
        }
    }
}