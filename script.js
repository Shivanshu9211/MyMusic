console.log("Welcome to My Music");

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('Songs/7.m4a');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('song-box'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Aarambh Hai Prachand", filePath: "Songs/1.m4a", coverPath: "images/1.jpg" },
    {songName: "Aarti kijiye Hanuman Lalla ki", filePath: "Songs/2.m4a", coverPath: "images/2.jpg" },
    {songName: "Achutum Keshawam", filePath: "Songs/3.m4a", coverPath: "images/3.jpg" },
    {songName: "Deva Shree Ganesha Deva", filePath: "Songs/4.m4a", coverPath: "images/4.jpeg" },
    {songName: "Hai Katha Sangram Ki", filePath: "Songs/5.m4a", coverPath: "images/5.jpeg" },
    {songName: "Hamare Sath Shree Raghunath", filePath: "Songs/6.m4a", coverPath: "images/6.png" },
    {songName: "Ram ko Dekh kar", filePath: "Songs/7.m4a", coverPath: "images/7.jpeg" },
    {songName: "Ram Siya Ram", filePath: "Songs/8.m4a", coverPath: "images/7.jpeg" },
    {songName: "Shree Krishn Govind", filePath: "Songs/9.m4a", coverPath: "images/3.jpg" },
    {songName: "Vishnu Stotram", filePath: "Songs/10.m4a", coverPath: "images/8.jpeg" },
    {songName: "Deva Deva", filePath: "Songs/11.m4a", coverPath: "images/9.jpeg" },
    {songName: "Namo Namo", filePath: "Songs/12.m4a", coverPath: "images/9.jpeg" },
]

songItems.forEach((element, i )=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})




audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(Progress);
    myProgressBar.value = Progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('song-play')).forEach((element)=>{
    element.classList.remove('fa-pause');    
    element.classList.add('fa-play');

    })
}


Array.from(document.getElementsByClassName('song-play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play'); 
        e.target.classList.add('fa-pause'); 
        audioElement.src = `Songs/${songIndex+1}.m4a`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else {
        songIndex += 1;

    }
    audioElement.src = `Songs/${songIndex+1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else {
        songIndex -= 1;

    }
    audioElement.src = `Songs/${songIndex+1}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})