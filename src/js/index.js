/* 



*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto")
}
botaoTrailer.addEventListener("click", ()=> {
    alternarModal()
    video.setAttribute("scr", linkDoVideo);
}); 

botaoFecharModal.addEventliistener("clik", () =>{
    alternarModal()
    video.setAttribute("src", "");
});


