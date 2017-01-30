$(document).ready(function() {
    $('#pengineer').hide();
    $('#pproduct').hide();
    $('#pgovt').hide();

    $('#pceo').hide();
    $('#pmanaging').hide();
    $('#pcustservice').hide();
    $('#pchief').hide();
    $('#crudetoggle').hide();
    $('#result').hide();



    $('#engineer').click(function(){
        $('#pengineer').toggle(1500);
    });

    $('#product').click(function(){
        $('#pproduct').toggle(1000);
    });
    $('#govt').click(function(){
        $('#pgovt').toggle(1000);
    });

    $('#vin').click(function(){
        $('#pceo').toggle(1000);
    });

    $('#abc').click(function(){
        $('#pchief').toggle(1000);
    });

    $('#xyz').click(function(){
        $('#pmanaging').toggle(1000);
    });

    $('#pqr').click(function(){
        $('#pcustservice').toggle(1000);
    });

    $('#crudeLink').click(function(){
        $('#crudetoggle').toggle(1000);
    });

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(localWeather);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function localWeather(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var location;
        var state;
        var temp_c;

        var link = "http://api.wunderground.com/api/3677c95da861f6a1/geolookup/q/"+lat+","+long+".json";
        $.ajax({
            url : link,
            dataType : "jsonp",
            success : function(parsed_json) {
                location = parsed_json['location']['city'];
                state = parsed_json['location']['state'];
                $('#city').text(location+", "+state);

                var link2 = "http://api.wunderground.com/api/3677c95da861f6a1/conditions/q/"+state+"/"+location+".json";
                $.ajax({
                    url : link2,
                    dataType : "jsonp",
                    success : function(parsed_json) {
                        temp_c = parsed_json['current_observation']['temp_c'];
                        $('#temperature').text(temp_c+" deg C");
                    }
                });
            }
        });


    }


    getLocation();


});

function surveyClick() {
    $('#csurvey').hide().fadeIn(2000);

}

function roicalculate(){
    var bill = document.getElementById('bill').value;
    var panels = document.getElementById('panels').value;
    var years = document.getElementById('years').value;

    var saved = (10/9)*bill*0.1*panels*years*12;

    var saving5 = bill*0.1*panels*5*12;

    var saving10 = bill*0.1*panels*10*12;

    $('#savings').text("$ "+ Math.round(saved));
    $('#save5').text("$ "+Math.round(saving5));
    $('#save10').text("$"+Math.round(saving10));

    $('#result').show(1000);




}
