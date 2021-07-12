const tick = () => {
    $('#names li:first').slideUp(function () {
        $(this).appendTo($('#names')).slideDown();
    });
}
const openNav = () => {
    document.getElementById("contact-btn").innerHTML = 'X';
    document.getElementById("contact-nav").style.width = "600px";
    document.getElementById("contact-btn").style.border = "1px solid #DDD";
    document.getElementById("contact-btn").onclick = closeNav;
    document.getElementById("contact-btn").blur();
}
const closeNav = () => {
    document.getElementById("contact-btn").innerHTML = '<img class="icon" src="./assets/icons/ico-contact.svg" alt="Contact icon" />';
    document.getElementById("contact-nav").style.width = "0px";
    document.getElementById("contact-btn").style.border = "4px solid black";
    document.getElementById("contact-btn").onclick = openNav;
    document.getElementById("contact-btn").blur();
}

setInterval(() => { tick() }, 3000);