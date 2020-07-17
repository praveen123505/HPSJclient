
   function fetchissues(){
   
    var str1 = document.getElementById("allissues").value;
    var str2 = document.getElementById("actionrate").value;
    var str3 = document.getElementById("Assigned").value;
   // console.log('The Issue is:'+str1);
   // console.log('Effect:'+str2);
   // console.log('Pesrson taking Care:'+str3);
//    document.write(str1);
//   document.write(str2);
//    document.write(str3);
var score = 1;
localStorage.score = 1;
var score = parseInt(localStorage.score);
var myissues;
 if(Number){
   function precarica( img ) {
      $( img ).each( function () {
         $( '<img/>' )[ 0 ].src = this;
      });
   }
   precarica([
         'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png',
         'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png',
         'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png',
         'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png',
         'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png'
      ]);
         
/*******jQuery for external title*********/
         
   jQuery(document).ready(function () {
      $('.title-blue').mouseout(function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
      }),
      $('.title-blue').mouseover( function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png');
      });
      $('.title-red').mouseout(function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
      }),
      $('.title-red').mouseover( function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png');
      });
      $('.title-green').mouseout(function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
      }),
      $('.title-green').mouseover( function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png');
      });	
      $('.title-yellow').mouseout(function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
      }),
      $('.title-yellow').mouseover( function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png');
      });
      $('.title-pink').mouseout(function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png');
      }),
      $('.title-pink').mouseover( function(){
         $("#map").attr('src', 'http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png');
      });	
   });					
 
}

