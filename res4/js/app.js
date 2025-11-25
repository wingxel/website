"use strict";

$(() => {
    let mColor = "rgb(255, 81, 0)";

    const form = document.getElementById("search_form");
    let not_found = document.getElementById("result");

    let d = document.getElementById("dt_d");
    if (d != null) {
        d.textContent = new Date().getFullYear();
    }

    form.addEventListener("submit", event => {
        let query = form.elements.search_fm.value.trim();
        if (query.length !== 0) {
            not_found.style.color = "red";
            setTimeout(() => {
                not_found.style.color = "white";
                not_found.value = "";
            }, 1000);
        } else {
            not_found.value = "";
        }
        event.preventDefault();
    });
});
