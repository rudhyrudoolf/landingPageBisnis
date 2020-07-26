var countdownDate = new Date("Aug 24,2020 15:37:25").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance =  countdownDate - now;

    //perhitungan waktu untuk hari ini
    var days = Math.floor( distance/ (1000*60*60*24));
    var hour = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var secon = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("timecountDown").innerHTML = days + " Hari " + hour + " : "+ minute + " : "+secon; 
    
    if(distance < 0)
    {
        clearInterval(x);
        document.getElementById("timecountDown").innerHTML = "Discount Expired";

    }

},1000);