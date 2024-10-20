//videonun oynatılması oynatma koşulları 
const video = document.getElementById('video');
  const playPauseButton = document.getElementById('bağlılık');
  const kapat =document.getElementById('kapat');
  
  
video.removeAttribute("controls");//videonun altındaki barı kaldırmak için

  playPauseButton.addEventListener('click', function() {
    if (video.paused&video1.paused&video2.paused&video3.paused) {
      kapat.style.display='inline-block';
      video.style.display='inline-block';
      video.play();
      
    } else {
     
    }
  });
  video.addEventListener("ended", function() {
    // Video bittiğinde yapılacak işlemler
    video.style.display = "none"; // Videoyu gizle
    kapat.style.display='none';//buttonu gizle
});

kapat.addEventListener('click', function(){
  video.pause();
  video.style.display = "none";
  kapat.style.display='none';
})

const video1 = document.getElementById('video1');
  const playPauseButton1 = document.getElementById('yenilik');
  
  
  video1.removeAttribute("controls");//videonun altındaki barı kaldırmak için

  playPauseButton1.addEventListener('click', function() {
    if (video.paused&video1.paused&video2.paused&video3.paused) {
      kapat.style.display='inline-block';
      video1.style.display='inline-block';
      video1.play();
      
    } else {
     
    }
  });
  video1.addEventListener("ended", function() {
    // Video bittiğinde yapılacak işlemler
    video1.style.display = "none"; // Videoyu gizle
    kapat.style.display='none';
});
kapat.addEventListener('click', function(){
  video1.pause();
  video1.style.display = "none";
  kapat.style.display='none';
})

const video2 = document.getElementById('video2');
  const playPauseButton2 = document.getElementById('takımçal');
  
  
  video2.removeAttribute("controls");//videonun altındaki barı kaldırmak için

  playPauseButton2.addEventListener('click', function() {
    if (video.paused&video1.paused&video2.paused&video3.paused) {
      kapat.style.display='inline-block';
      video2.style.display='inline-block';
      video2.play();
      
    } else {
     
    }
  });
  video2.addEventListener("ended", function() {
    // Video bittiğinde yapılacak işlemler
    video2.style.display = "none"; // Videoyu gizle
    kapat.style.display='none';
});
kapat.addEventListener('click', function(){
  video2.pause();
  video2.style.display = "none";
  kapat.style.display='none';
})
const video3 = document.getElementById('video3');
  const playPauseButton3 = document.getElementById('sürdürebilirlilik');
  
  
  video3.removeAttribute("controls");//videonun altındaki barı kaldırmak için

  playPauseButton3.addEventListener('click', function() {
    if (video.paused&video1.paused&video2.paused&video3.paused) {
      kapat.style.display='inline-block';
      video3.style.display='inline-block';
      video3.play();
      
    } else {
     
    }
  });
  video3.addEventListener("ended", function() {
    // Video bittiğinde yapılacak işlemler
    video3.style.display = "none"; // Videoyu gizle
    kapat.style.display='none';
});
kapat.addEventListener('click', function(){
  video3.pause();
  video3.style.display = "none";
  kapat.style.display='none';
})

//hareketli resimler//


window.sr=ScrollReveal(); // değerlerimiz ve yazıların efekti
sr.reveal('.anime-left',{
  origin:'left',
  duration:1000,
  distance:'25rem',
  delay:300
})
sr.reveal('.anime-right',{
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay:500
})
sr.reveal('.anime-top',{
  origin:'top',
  duration:1000,
  distance:'25rem',
  delay:500
})
sr.reveal('.anime-bottom',{
  origin:'bottom',
  duration:1000,
  distance:'25rem',
  delay:500
})

ScrollReveal().reveal('.ani1',{delay:250});//sayısal değerler geçikme sürelerini vermek için
ScrollReveal().reveal('.ani2',{delay:500});
ScrollReveal().reveal('.ani3',{delay:750});





const resim = document.getElementById('23');

let uyarildi = false; // Değişken, uyarının sadece bir kez gösterilmesi için kullanılacak

resim.addEventListener('mouseenter', function() {
    if (!uyarildi) {
        alert('Resimlerin üzerindeki parçalara basarak videolarını izleyebilirsiniz!!');
        uyarildi = true;
    }
});