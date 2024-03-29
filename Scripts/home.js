const btnList = document.querySelector("#btnList");
// const guideBtn = document.querySelector("#guideBtn");
// const aboutBtn = document.querySelector("#aboutBtn");
// const cmtBtn = document.querySelector("#cmtBtn");
const closeModalList = document.querySelectorAll(".closeModalBtn");

btnList.childNodes.forEach(btn => {
    btn.addEventListener("click", () => {
        let modalID = btn.id.slice(0, -3)+ "Modal";
        // addActive(document.getElementById(`${modalID}`));
        // Không nên bởi vì display: none thì getElementById như bỏ-> query cho an toàn
        addActive(document.querySelector(`#${modalID}`));
    })
})

closeModalList.forEach(btn => {
    btn.addEventListener("click", () => {
        removeActive(document.querySelector(`#${btn.parentElement.parentElement.id}`));
    })
})

function removeActive(modal) {
    modal.parentElement.classList.remove("active");
    modal.classList.remove("active");
}

function addActive(modal) {
    modal.parentElement.classList.add("active");
    modal.classList.add("active");
}

// pane.forEach(panel => {
//     panel.addEventListener("click", () => {
//         const activatedPanel =  panel.closest(".navBar").querySelector(".active");
//         deActivate(activatedPanel);
//         Activate(panel);
//     })
// })