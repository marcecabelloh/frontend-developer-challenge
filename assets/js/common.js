$(document).ready(function(){
        $.ajax({
        url: 'https://api.darksky.net/forecast/f5d360fb438a13b1091a598b835b37eb/-33.4143,-70.6608',
        type: 'GET',
        dataType: 'jsonp',
    })

//llamo al id de mi caja encuentrame para que imprima lo q esta dentro de json
    .done(function(e) {
        $("#encuentrame").click(function(){
            var temperatura = (((e.currently.temperature-32) * 5/9).toFixed(1));
            $('#map').append('<img class="center-block" src= dist/drive-download-20170801T163958Z-001/1498814616_cloud.png>'+'<div class="temperatura center">' + temperatura + ' °C</div>'+'<div class="center">Ciudad: ' + e.timezone + '</div>' +'<div class="center">Humedad: ' + e.currently.humidity + ' %</div>'+'<div class="center">Indice UV: ' + e.currently.uvIndex + '</div>'+'<div class="center">Presion: ' + e.currently.pressure + ' hPa</div>'+'<div class="center">Viento: ' + e.currently.windSpeed + ' m/s</div>');
        console.log(e.timezone);
        console.log(e);
  

  //trato de llamar a la temperatura max y min de los distintos dias junto a los iconos
            $("#caja").append(e.daily.data.icon +'<div>Lunes :'+ e.daily.data.apparentTemperatureMin+ '</div>' + '<div>' + e.daily.data.apparentTemperatureMax+ '</div>');

        })
    })


    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
})