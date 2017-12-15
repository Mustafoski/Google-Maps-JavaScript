// AIzaSyBeh47W7e_8CXydTeB9YgXb-MnI-REt2GM   AIzaSyBQz-dulnebn0pqnUxRai6D4L6I5smV-h8


// Map options
window.initMap= function(){
    var options = {
        zoom:8,
        center:{lat:41.608635,lng:21.745274999999992}
    }   
    
    // New Map
    var map = new 
 google.maps.Map(document.getElementById('map'),options);
    
// Array of markers

var markers = [
    {
    coords:{lat:41.1231,lng:20.8016},
    content:'<h1>Ohrid</h1>'
    },
    {
    coords:{lat:41.03143,lng:21.33474},
    content:'<h1>Bitola</h1>'
    },
    {
    coords:{lat:41.9973,lng:21.4280},
    content:'<h1>Skopje</h1>'
    }
]
    
// loop 

for(var i = 0; i<markers.length;i++){
    addMarker(markers[i]);
}
    
    // add marker function
function addMarker(props){
    var marker = new google.maps.Marker({
        position:props.coords,
        map:map
    });
    
    if(props.content){
         var infoWindow = new google.map.InfoWindow({
         content:props.content
    });
    
    marker.addListener('click', function() {
        infoWindow.open(map,marker);
    }); 
    }
    
  }
}