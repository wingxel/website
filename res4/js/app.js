"use strict";

$(() => {
    let mColor = "rgb(255, 81, 0)";

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
                button.style.color = mColor;
                button.textContent = preText;
            }, 700);
            event.preventDefault();
        });
    }

    let websiteLink = $("#website_link");
    let googlePlayLink = $("#googlePlay");

    websiteLink.on("click", clickWebsiteEvent => {
        let p = websiteLink.text();
        websiteLink.text("Sorry! website is down.");
        websiteLink.attr("class", "link-light");
        setTimeout(() => {
            websiteLink.text(p);
            websiteLink.attr("class", "link-secondary");
        }, 4000);
        clickWebsiteEvent.preventDefault();
    });

    googlePlayLink.on("click", clickPlayLinkEvent => {
        let p = googlePlayLink.text();
        googlePlayLink.text(
            "Sorry! My apps on Google Play Store are not accessible due to unforeseen circumstances." +
            " You can find them on Amazon App Store. Thanks!"
        );
        googlePlayLink.attr("class", "link-light");
        setTimeout(() => {
            googlePlayLink.text(p);
            googlePlayLink.attr("class", "link-secondary");
        }, 10000);
        clickPlayLinkEvent.preventDefault();
    });

    $("#navbarCollapse").on("show.bs.collapse", () =>
        $("a.nav-link").click(() => 
        $("#navbarCollapse").collapse("hide"))
    );
});
