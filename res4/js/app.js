"use strict";

$(() => {
    const form = document.getElementById("search_form");
    let not_found = document.getElementById("result");

    let d = document.getElementById("dt_d");
    d.textContent = new Date().getFullYear();

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

    const downloadButtons = document.querySelectorAll(".d_load");
    for (let button of Array.from(downloadButtons)) {
        button.addEventListener("click", event => {
            let preText = button.textContent;
            button.textContent = "Link Error!";
            button.style.color = "red";
            setTimeout(() => {
                button.style.color = "rgb(255, 81, 0)";
                button.textContent = preText;
            }, 700);
            event.preventDefault();
        });
    }

    $("#navbarCollapse").on("show.bs.collapse", () =>
        $("a.nav-link").click(() => 
        $("#navbarCollapse").collapse("hide"))
    );
});
