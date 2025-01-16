document.getElementById('scroll-podcast').addEventListener('click', function () {
    const targetPodcast = document.querySelector('#podcast');


    if (targetPodcast) {
        targetPodcast.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

});


document.getElementById('scroll-episodios').addEventListener('click', function () {
    const targetEpisodios = document.querySelector('#episodios');

    if (targetEpisodios) {
        targetEpisodios.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

function showHide(){
    let container = document.querySelector('.notesHidden');

    if(container.classList.contains('visible')){
        container.classList.remove('visible');
    } else {
        container.classList.add('visible');
    }
}
