"use strict";

// MUSIC
// this function turns the tabs into tabs
$(function () {
    $(".tabs").tabs();
});

// this function makes a request to the postman api and displays the data returned
$(function () {
    $.ajax({
        url: `https://4e8d0861-66cc-4822-a77b-2438e8661969.mock.pstmn.io/albums`,
        dataType: "json",
        method: "GET"
    }) // closes ajax

        // creates space for each letter
        // technically this works, but I would question if it is the most efficient or best way to filter through the alphabet? 
        // I tried thinking of ways to use a for loop with unicode and concatenation, but I couldn't figure out how to do it
        .done(function (data) {
            let htmlA = "";
            let htmlB = "";
            let htmlC = "";
            let htmlD = "";
            let htmlE = "";
            let htmlF = "";
            let htmlG = "";
            let htmlH = "";
            let htmlI = "";
            let htmlJ = "";
            let htmlK = "";
            let htmlL = "";
            let htmlM = "";
            let htmlN = "";
            let htmlO = "";
            let htmlP = "";
            let htmlQ = "";
            let htmlR = "";
            let htmlS = "";
            let htmlT = "";
            let htmlU = "";
            let htmlV = "";
            let htmlW = "";
            let htmlX = "";
            let htmlY = "";
            let htmlZ = "";
            for (let i = 0; i < data.length; i++) {
                let firstLetter = data[i].artist.charAt(0);

                //fills the space for each letter
                switch (firstLetter) {
                    case 'A':
                        htmlA += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularA").html(htmlA);
                        break;
                    case 'B':
                        htmlB += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularB").html(htmlB);
                        break;
                    case 'C':
                        htmlC += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularC").html(htmlC);
                        break;
                    case 'D':
                        htmlD += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularD").html(htmlD);
                        break;
                    case 'E':
                        htmlE += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularE").html(htmlE);
                        break;
                    case 'F':
                        htmlF += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularF").html(htmlF);
                        break;
                    case 'G':
                        htmlG += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularG").html(htmlG);
                        break;
                    case 'H':
                        htmlH += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularH").html(htmlH);
                        break;
                    case 'I':
                        htmlI += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularI").html(htmlI);
                        break;
                    case 'J':
                        htmlJ += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularJ").html(htmlJ);
                        break;
                    case 'K':
                        htmlK += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularK").html(htmlK);
                        break;
                    case 'L':
                        htmlL += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularL").html(htmlL);
                        break;
                    case 'M':
                        htmlM += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularM").html(htmlM);
                        break;
                    case 'N':
                        htmlN += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularN").html(htmlN);
                        break;
                    case 'O':
                        htmlO += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularO").html(htmlO);
                        break;
                    case 'P':
                        htmlP += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularP").html(htmlP);
                        break;
                    case 'Q':
                        htmlQ += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularQ").html(htmlQ);
                        break;
                    case 'R':
                        htmlR += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularR").html(htmlR);
                        break;
                    case 'S':
                        htmlS += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularS").html(htmlS);
                        break;
                    case 'T':
                        htmlT += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularT").html(htmlT);
                        break;
                    case 'U':
                        htmlU += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularU").html(htmlU);
                        break;
                    case 'V':
                        htmlV += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularV").html(htmlV);
                        break;
                    case 'W':
                        htmlW += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularW").html(htmlW);
                        break;
                    case 'X':
                        htmlX += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularX").html(htmlX);
                        break;
                    case 'Y':
                        htmlY += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularY").html(htmlY);
                        break;
                    case 'Z':
                        htmlZ += `<section class="album"><img src="${data[i].image}" alt="${data[i].alt}" width="200" height="200"><br><button class="details"><span class="arrow"></span></button><div><p>"${data[i].album}"<br>Artist: ${data[i].artist}<br><span>Genre: ${data[i].genre}</span><br><span>Year: ${data[i].year}</span></p></div></section>`;
                        $("#popularZ").html(htmlZ);
                        break;
                    default:
                        console.log("Sorry, match not found.");
                }
            }
            // displays the dropdown details
            $(".details").on("click", function (e) {
                $(e.target).next("div").slideToggle();
                $(e.target).children(".arrow").toggleClass("opened");
            }); // closes slides
            $(".album div").hide();
        }) // closes success
        .fail(function (jqXHR) {
            console.log("hello from fail");
            popularAlbums.html("There was a problem with the music database");
            //console.error(jqXHR.responseJSON.status_message);
        }); // closes fail
}); // closes function


// BOOKS
// variables
let slides = $(".slider");
let dotsContainer = $(".carousel");
let interval = 3000;
let currentIndex = 0;

// creates space for dots
for (let i = 0; i < slides.length; i++) {
    dotsContainer.append('<span class="dot" data-index="' + i + '"></span>');
}
let dots = $(".dot");

// lets only one picture show at a time
function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
    dots.removeClass("active");
    dots.eq(index).addClass("active");
}
showSlide(currentIndex);

// cycles through the slides
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
let sliderInterval = setInterval(autoSlide, interval);

// lets the user click on a specific slide
dots.click(function () {
    let dotIndex = $(this).data("index");
    showSlide(dotIndex);
    currentIndex = dotIndex;
    clearInterval(sliderInterval);
    sliderInterval = setInterval(autoSlide, interval);
});

// SHOWS
// variables
let slidesShows = $(".sliderShows");
let dotsContainerShows = $(".carouselShows");
let intervalShows = 3000;
let currentIndexShows = 0;

// creates space for dots
for (let i = 0; i < slidesShows.length; i++) {
    dotsContainerShows.append('<span class="dotShows" data-index="' + i + '"></span>');
}
let dotsShows = $(".dotShows");

// lets only one picture show at a time
function showSlideShows(index) {
    slidesShows.hide();
    slidesShows.eq(index).show();
    dotsShows.removeClass("active");
    dotsShows.eq(index).addClass("active");
}
showSlideShows(currentIndexShows);

// cycles through the slides
function autoSlideShows() {
    currentIndexShows = (currentIndexShows + 1) % slidesShows.length;
    showSlideShows(currentIndexShows);
}
let sliderIntervalShows = setInterval(autoSlideShows, intervalShows);

// lets the user click on a specific slide
dotsShows.click(function () {
    let dotIndex = $(this).data("index");
    showSlideShows(dotIndex);
    currentIndexShows = dotIndex;
    clearInterval(sliderIntervalShows);
    sliderIntervalShows = setInterval(autoSlideShows, intervalShows);
});

// Accordian
// makes the accordian into an accordian
$(function () {
    $("#accordion").accordion();
});

// Storage
// variables
function getChoice() {
    let cats = document.getElementById("prefCat");
    let dogs = document.getElementById("prefDog");
    let fish = document.getElementById("prefFish");
    let chickens = document.getElementById("prefChicken");
    let turtles = document.getElementById("prefTurtle");
    let choice = "";

    // determines what the user chose
    if (cats.checked) {
        choice = "cats";
    }
    if (dogs.checked) {
        choice = "dogs";
    }
    if (fish.checked) {
        choice = "fish";
    }
    if (chickens.checked) {
        choice = "chickens";
    }
    if (turtles.checked) {
        choice = "turtles";
    }

    // stores user choice into storage
    localStorage.setItem("pref", choice);

    // retrieves the choice from storage and displays image to user
    // this updates in real time, but disappears if the page is refreshed, even though the storage isn't cleared
    if (localStorage.getItem("pref") == "dogs") {
        $("#storage").addClass("dogs");
        $("#storage").removeClass("cats");
        $("#storage").removeClass("fish");
        $("#storage").removeClass("chickens");
        $("#storage").removeClass("turtles");
    }
    if (localStorage.getItem("pref") == "cats") {
        $("#storage").addClass("cats");
        $("#storage").removeClass("dogs");
        $("#storage").removeClass("fish");
        $("#storage").removeClass("chickens");
        $("#storage").removeClass("turtles");
    }
    if (localStorage.getItem("pref") == "fish") {
        $("#storage").addClass("fish");
        $("#storage").removeClass("dogs");
        $("#storage").removeClass("cats");
        $("#storage").removeClass("chickens");
        $("#storage").removeClass("turtles");
    }
    if (localStorage.getItem("pref") == "chickens") {
        $("#storage").addClass("chickens");
        $("#storage").removeClass("dogs");
        $("#storage").removeClass("fish");
        $("#storage").removeClass("cats");
        $("#storage").removeClass("turtles");
    }
    if (localStorage.getItem("pref") == "turtles") {
        $("#storage").addClass("turtles");
        $("#storage").removeClass("dogs");
        $("#storage").removeClass("fish");
        $("#storage").removeClass("chickens");
        $("#storage").removeClass("cats");
    }

}

// this makes the image stay when refreshing the page
// technically this method is working, but I would question if this is the most efficient or best way to do it?
if (localStorage.getItem("pref") == "dogs") {
    $("#storage").addClass("dogs");
    $("#storage").removeClass("cats");
    $("#storage").removeClass("fish");
    $("#storage").removeClass("chickens");
    $("#storage").removeClass("turtles");
}

if (localStorage.getItem("pref") == "cats") {
    $("#storage").addClass("cats");
    $("#storage").removeClass("dogs");
    $("#storage").removeClass("fish");
    $("#storage").removeClass("chickens");
    $("#storage").removeClass("turtles");
}
if (localStorage.getItem("pref") == "fish") {
    $("#storage").addClass("fish");
    $("#storage").removeClass("dogs");
    $("#storage").removeClass("cats");
    $("#storage").removeClass("chickens");
    $("#storage").removeClass("turtles");
}
if (localStorage.getItem("pref") == "chickens") {
    $("#storage").addClass("chickens");
    $("#storage").removeClass("dogs");
    $("#storage").removeClass("fish");
    $("#storage").removeClass("cats");
    $("#storage").removeClass("turtles");
}
if (localStorage.getItem("pref") == "turtles") {
    $("#storage").addClass("turtles");
    $("#storage").removeClass("dogs");
    $("#storage").removeClass("fish");
    $("#storage").removeClass("chickens");
    $("#storage").removeClass("cats");
}

document.getElementById("saveBtn").addEventListener("click", getChoice);