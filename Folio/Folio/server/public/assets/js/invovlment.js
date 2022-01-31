async function invovleBoxes(id=null) {
    if (!dataFetched) {
        await fetch_data();
    }

    let section = document.getElementById("involvements");
    
    for (const info of involvements) {
        if (id == null || info.id == id) {
            let box = document.createElement("div"); box.classList.add("info-box");
                let icon = document.createElement('i'); icon.classList.add("bi"); icon.classList.add(info.icon);
                box.appendChild(icon);
                let title = document.createElement("h3"); title.innerText = info.name;
                box.appendChild(title);
                let dscr = document.createElement('p'); dscr.innerText = info.description;
                box.appendChild(dscr);
                let lrn = document.createElement('i'); lrn.classList.add("bi"); lrn.classList.add("bi-box-arrow-right");
                box.appendChild(lrn);
            section.appendChild(box);
        }
    }
}