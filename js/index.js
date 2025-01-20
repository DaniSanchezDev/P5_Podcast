// document.getElementById('scroll-podcast').addEventListener('click', function () {
//     const targetPodcast = document.querySelector('#podcast');


//     if (targetPodcast) {
//         targetPodcast.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }

// });


// document.getElementById('scroll-episodios').addEventListener('click', function () {
//     const targetEpisodios = document.querySelector('#episodios');

//     if (targetEpisodios) {
//         targetEpisodios.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }
// });

const toggleButton = document.getElementById('toggleButton');
const notes = document.getElementById('notes');
const toggleButtonText = document.querySelector('#toggleButton .front a');

toggleButton.addEventListener('click', () => {
    if (notes.style.display === 'none' || notes.style.display === '') {
        notes.style.display = 'block'; 
        toggleButtonText.textContent = 'Ocultar Notas'; 
    } else {
        notes.style.display = 'none'; 
        toggleButtonText.textContent = 'Ver Notas'; 
    }
});



// function showHide(){
//     let container = document.querySelector('.notesHidden');

//     if(container.classList.contains('visible')){
//         container.classList.remove('visible');
//     } else {
//         container.classList.add('visible');
//     }
// }
