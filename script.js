console.log("Welcome to Wired");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem');

let songs = [
    {songName: "The Spectre", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Faded", filePath: "2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Dreamer", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Alone", filePath: "4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Alone II", filePath: "5.mp3", coverPath: "covers/5.jpg"},
    {songName: "On My Way", filePath: "6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Darkside", filePath: "7.mp3", coverPath: "covers/7.jpg"}
    
]

songItems.forEach((element)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = i.filePath;

})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})