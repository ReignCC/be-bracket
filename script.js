let audio = new Audio ("bgm/music.mp3");
audio.volume = 5;
var count = 0;
function playMusic(){
  if(count == 0){
      count = 1;
      audio.play();    
      }
      else{
        count = 0;
        audio.pause();
      }   
}
