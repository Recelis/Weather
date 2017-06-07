 /* https://openweathermap.org/current#geo 
 get weather api call
 get geolocation
 input location if not too possible
api.openweathermap.org/data/2.5/weather?q={city name},{country code} 
 997b12fce3184c02353654296fdb1df5 weather key
 
 */

 $(document).ready(function(){
  var manifesto = document.getElementById('manifesto');
  manifesto.innerHTML = "My Manifesto\
    Today, I swear to not see the world as I want it to be, but accept it as it is.\
    I promise to always learn about the world and to learn to become better.\
    I promise to remove all of my vices.\
    I promise to seek positive snowballs, so that my well-being increases exponentially.\
    I promise to dream big.\
    I promise to always be optimistic about the future.\
    I promise to help people achieve what they truly desire.\
    I promise that my actions be kind, caring, virtuous, and of a great man.\
    I must always have conviction in my actions.\
    I promise to work towards a life where I do what I want but not just what I want." +  
    "I promise to always move forward and look at the bigger picture.";


  var urlLoc = "https://ipapi.co/json/";
  var celsius = true;
  var temperature;
  $.ajax({
    type: "GET", 
    url: urlLoc,
    success: function(data){
      console.log("iplocation" + data);
      console.log(data["latitude"] + " " + data["longitude"]); // can't use data values outside of ajax call?
      $("#city").html(data["city"]);
      $("#country").html(data["country"]);
      getWeatherData(data);
    },
    error:function(exception){console.log(exception);}
  });

 function getWeatherData(dataLoc){
   console.log(dataLoc);
   var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +dataLoc["latitude"] + "&lon=" + dataLoc["longitude"] + "&APPID=997b12fce3184c02353654296fdb1df5";
   console.log(url);
   $.ajax({
     type: "GET",
     url: url,
     success: function(data){
       console.log("weather data");
       console.log(data);
       temperature = Math.floor(data["main"]["temp"] -272.150);
       $(".toggle").html(temperature+ "&deg C");
       $("#condition").html(data["weather"][0]["description"]);
       $("#humidity").html(data["main"]["humidity"] + "%");
       console.log(data["weather"][0]["main"]);
      switch(data["weather"][0]["main"]){
        case "Clear":
          $("body").css("background-image", "url(http://lookingtothesky.com/wp-content/uploads/2011/02/Blue-Sky.jpg)");
          $(".formatting").css("color", "white");
          break;
        case "Clouds":
          $("body").css("background-image", "url(https://w-dog.net/wallpapers/10/17/335596661241855/nature-sea-water-night-sunset-sky-clouds-sea-sunset-sky-background-wallpaper-widescreen-full-screen-widescreen-hd-wallpapers-background-wallpaper.jpg)");  
          $(".formatting").css("color", "white");
          break;
        case "Thunderstorm":
          $("body").css("background-image", "url(https://i.ytimg.com/vi/11Xug-gnCXU/maxresdefault.jpg)");
          $(".formatting").css("color", "white");
          break;
        case "Drizzle":
          $("body").css("background-image", "url(http://images2.fanpop.com/images/photos/7800000/Amazing-Nature-Wallpapers-national-geographic-7896953-1280-960.jpg)");  
          $(".formatting").css("color", "white");
          break;
        case "Rain":
          $("body").css("background-image", "url(https://az616578.vo.msecnd.net/files/2016/05/28/636000076698153744-318535480_maxresdefault.jpg)");
          $(".formatting").css("color", "white");
          break;
        case "Snow":
          $("body").css("background-image", "url(http://wallup.net/wp-content/uploads/2015/12/63204-road-snow-trees-vintage-Tokyo.jpg)");
          $(".formatting").css("color", "white");
          break; 
       case "Extreme":
          // $("body").css("background-image", "url(http://www.syfy.com.au/sites/syfy.com.au/files/movie/images/sharknado_1.jpg)");
          $("body").css("background-image", "url(https://fanart.tv/fanart/movies/331446/moviebackground/sharknado-3-oh-hell-no-559df0811ac24.jpg)");
          $(".formatting").css("color", "white");
          break;  
       case "Additional":
          $("body").css("background-image", "url(http://wallarthd.com/wp-content/uploads/2015/04/Amazing-Double-Rainbow-Wallpaper-Desktop.jpg)");
          $(".formatting").css("color", "white");
          break; 
       case "Atmosphere":
          $("body").css("background-image", "url(http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2006/10/the_earth_s_atmosphere_seen_from_space/9239425-5-eng-GB/The_Earth_s_atmosphere_seen_from_space.jpg)");
          $(".formatting").css("color", "white");
          break;
       case "Fog":
          $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/3/39/Foggy_morning_at_Twin_Peaks_11.jpg)");
          // $("body").css("background-image", "url(images/cloudy-sunset-over-the-sea-7209.jpg)");
          $(".formatting").css("color", "black");
          break;
        case 'mist':
          $("body").css("background-image", "url(images/cloudy-sunset-over-the-sea-7209.jpg)");
          $(".formatting").css("color", "white");
          break;
        default:
          $("body").css("background-image", "url(images/cloudy-sunset-over-the-sea-7209.jpg)");
          $(".formatting").css("color", "black");
          break;
    }
      $(".toggle").click(function(){
        if (celsius == true){
          celsius = false;
          $(".toggle").html(Math.floor((temperature+32)*9/5)+ "&deg F");
        } else{
          celsius = true;
          $(".toggle").html(temperature+ "&deg C");
        }
        // alert("boo!");   
      });
     },
     error:function(exception){console.log(exception);}
   });
  //  var currentDate;
  //  var day;
  //  var month;
  //  var year;
  //  var hour;
  //  var minute;
  //  var second;
   setInterval(function(){  
      var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var hour = currentDate.getHours();
      var minute = currentDate.getMinutes();
      var second = currentDate.getSeconds();
      $(".cdate").html(date+"/"+month+"/"+year);
      $(".ctime").html(hour+":"+minute+"."+second);
      if (hour < 12 && hour > 5){
        $(".subTitleClass").html("Good Morning Jacky!");
      } else if (hour >= 12 && hour < 18){
        $(".subTitleClass").html("Good Afternoon Jacky!");
      } else if(hour >= 18 && hour <= 21){
        $(".subTitleClass").html("Good Evening Jacky!");
      } else if(hour <= 5 || hour > 21){
        $(".subTitleClass").html("Darn it! Go To Sleep Jacky!!")
        
    }
      else{
        $(".subTitleClass").html("Not sure what time it is but go to sleep!")
      }

    }, 1000
    );

    setInterval(function(){  
      var urlLoc = "http://ip-api.com/json";
      // get location
      $.ajax({
        type: "GET", 
        url: urlLoc,
        success: function(data){
        // console.log(data);
        console.log(data["lat"] + " " + data["lon"]); // can't use data values outside of ajax call?
        $("#city").html(data["city"]);
        $("#country").html(data["country"]);
        getWeatherData(data); // update weather
      }
    })
    
    }, 1200000 );
  // change css
 }
 });



 