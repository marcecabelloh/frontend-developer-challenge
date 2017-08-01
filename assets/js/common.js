$(document).ready(function(){
        $.ajax({
        url: 'https://api.darksky.net/forecast/f5d360fb438a13b1091a598b835b37eb/-33.4143,-70.6608',
        type: 'GET',
        dataType: 'jsonp',
    })
    .done(function(e) {
        $("#encuentrame").click(function(){
            $('#map').append('<div>Ciudad: ' + e.timezone + '</div>'+'<div class="temperatura">Temperatura: ' + e.currently.temperature + '</div>'+'<div>Humedad: ' + e.currently.humidity + '</div>'+'<div>Indice UV: ' + e.currently.uvIndex + '</div>'+'<div>Presion: ' + e.currently.pressure + '</div>'+'<div>Viento: ' + e.currently.windSpeed + '</div>');
        console.log(e.timezone);
        console.log(e);
        })
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
})