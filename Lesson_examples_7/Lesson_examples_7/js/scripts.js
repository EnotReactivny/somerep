/**
 * События. Продолжение
 */
let testLink = document.querySelector(".testLink a");
let changingLi = document.querySelector("ul li:first-child");

testLink.addEventListener("click", testLinkPrepare);

function testLinkPrepare() {
    event.preventDefault();
    event.stopPropagation();
    
    //alert("Вы действительно хотите перейти по ссылке?");
    changingLi.innerHTML = "Вы действительно хотите перейти по ссылке?";
}

let allLi = document.querySelectorAll("li");

for (let i = 0; i <= allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
                                            alert("Кликнули на li");
                                        });
}