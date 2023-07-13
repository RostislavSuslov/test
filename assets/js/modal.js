var objRef = document.body;
const modalLayout = document.querySelectorAll("[data-modal]")
const callModalBtns = document.querySelectorAll("[data-togle-modal]");
const modalClose = document.querySelectorAll('.modal-close, .animate-box')
const modalOverlay = document.querySelectorAll('.modal')

function closeModal() {
    modalOverlay.forEach(item => item.style.display = "none");
    objRef.classList.remove('overflow-hidden')
}
const getDataAttr = (selector) => selector.forEach(selector => {

    selector.addEventListener('click', (event) => {
        event.preventDefault();
        id = selector.getAttribute('data-togle-modal');
        document.querySelector("#" + id).style.display = "block";
        objRef.classList.add('overflow-hidden')
    });
});

const modalId = getDataAttr(callModalBtns)
// console.log(modalId);

// const showModal = (id) => {
//   document.querySelector("#" + id).classList.add('show')
// }
// showModal(modalId)

modalClose.forEach(btnClose => {
    btnClose.addEventListener('click', () => {
        closeModal();
    })
})

window.onclick = function(event) {
    modalOverlay.forEach(item => {
        if (event.target == item) {
            closeModal();
        }
    })
}