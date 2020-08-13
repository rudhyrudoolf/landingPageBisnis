$( document ).ready(function() {
  //console.log( "ready!" );
  $('#autoWidth').lightSlider({
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
    } 
});  
});


var countdownDate = new Date("Aug 24,2020 15:37:25").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance =  countdownDate - now;

    //perhitungan waktu untuk hari ini
    var days = Math.floor( distance/ (1000*60*60*24));
    var hour = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var secon = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hour").innerHTML = hour;     
    document.getElementById("Minute").innerHTML = minute;     
    document.getElementById("Secon").innerHTML = secon;     

    
    if(distance < 0)
    {
        clearInterval(x);
        document.getElementById("timecountDown").innerHTML = "Discount Expired";
        

    }

},1000);

window.addEventListener("scroll",function(){
 var nav_ = document.querySelector("nav");
 var three = document.getElementById("blok-image");
 var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
// console.log(currentScroll);
if(currentScroll >= 600)
{
  nav_.classList.toggle("sticky",window.scrollY);
  three.classList.add("actived");
  // $('.three-block .tagline').each(function(){
  //   console.log("ok")
  // });
}
else
{
  nav_.classList.remove("sticky");
  // three.classList.remove("actived")
}

});