"use strict";

$(() => {
    const form = document.getElementById("search_form");
    let not_found = document.getElementById("result");

    form.addEventListener("submit", event => {
        let query = form.elements.search_fm.value.trim();
        if (query.length !== 0) {
            not_found.style.color = "red";
            setTimeout(() => {
                not_found.style.color = "black";
                not_found.value = "";
            }, 1000);
        } else {
            not_found.value = "";
        }
        event.preventDefault();
    });

    const downloadButtons = document.querySelectorAll(".d_load");
    for (let button of Array.from(downloadButtons)) {
        button.addEventListener("click", event => {
            button.textContent = "Link Error!";
            button.style.color = "red";
            setTimeout(() => {
                button.style.color = "green";
                button.textContent = "Download";
            }, 700);
            event.preventDefault();
        });
    }
});