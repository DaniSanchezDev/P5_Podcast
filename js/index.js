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

toggleButton.addEventListener('click', () => {
  // Alterna entre mostrar y ocultar el div con las notas
  if (notes.style.display === 'none') {
    notes.style.display = 'block'; // Muestra las notas y ocupa espacio
    toggleButton.textContent = 'Ocultar Notas'; // Cambia el texto del botón
  } else {
    notes.style.display = 'none'; // Oculta las notas y no ocupa espacio
    toggleButton.textContent = 'Ver Notas'; // Cambia el texto del botón
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
