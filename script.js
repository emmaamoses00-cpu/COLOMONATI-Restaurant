// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// =========================
// MENU FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-button");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        foodCards.forEach(function (card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// =========================
// RESERVATION FORM
// =========================

const reservationForm =
    document.getElementById("reservationForm");

const reservationMessage =
    document.getElementById("reservationMessage");

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("guestName").value.trim();

    const phone =
        document.getElementById("guestPhone").value.trim();

    const date =
        document.getElementById("bookingDate").value;

    const guests =
        document.getElementById("bookingGuests").value;

    const time =
        document.getElementById("bookingTime").value;

    if (!name || !phone || !date || !guests || !time) {

        reservationMessage.textContent =
            "Please complete the required reservation details.";

        return;
    }

    reservationMessage.textContent =
        `Thanks ${name}! Your table request for ${guests} on ${date} at ${time} has been received.`;

    reservationForm.reset();

});