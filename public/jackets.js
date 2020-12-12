function displayAlert(msg){
    alert(msg)
}

var refresh_time = 10000
var info;

function checkStatus(item_id){
    for(i=0; i<(info.response).length; i++){
        if(info.response[i].id != undefined && info.response[i].id.toLocaleLowerCase()==item_id.toLocaleLowerCase()){
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(info.response[i].DATAPAYLOAD,"text/xml");
            item_availability =  xmlDoc.getElementsByTagName("INSTOCKVALUE")[0].childNodes[0].nodeValue
            $( "#"+item_id ).html(item_availability)
            $( "#"+item_id ).prop("disabled",false);
            dict[item_id][1]= item_availability
            //console.log(dict[item_id])
            //console.log(dict)
            break;
        }
    }
}

var dict = {}; //OR USE var dict = new Object()
function checkAvailability(item_id, manufacturer) {
    current_time = new Date().getTime()

    if(dict[item_id] === undefined){
        dict[item_id] = [0,0]
    }
    //console.log("here",dict[item_id])
    last_click_time = dict[item_id][0]
    dict[item_id][0] = current_time //am I updating this time a little too early??

    console.log(last_click_time != 0 , (current_time - last_click_time) , current_time , last_click_time)
    if(last_click_time != 0 && (current_time - last_click_time) <= refresh_time){
        $( "#" + item_id ).html(dict[item_id][1])
    }
    else{
        url="https://bad-api-assignment.reaktor.com/availability/"+manufacturer
        $( "#"+item_id ).html("Fetching...")
        $( "#"+item_id ).prop("disabled",true);
        $.get(url, function (data2){
            info = data2;
            checkStatus(item_id);
        })
    }

}
$(document).ready(function( ) {
  $.get( "https://bad-api-assignment.reaktor.com/products/jackets", function( data ) {
        //console.log(JSON.stringify(data)); //This made all the data printed for me
        //for(i=0; i<data.length; i++) {
        for(i=0; i<10; i++){ // to take only first 10 values for testing
            $( ".jackets-list" ).append("<li> \
            <h3> <b> "+data[i].name+" </b> </h3> \
            <h3> "+data[i].manufacturer+"</h3> \
            <h3> "+data[i].color+"</h3> \
            <h3> "+data[i].type+"</h3> \
            <h3> "+data[i].price+"</h3> \
            <button class=\"button\" onclick= \"displayAlert(' "+data[i].manufacturer+" ') \"> Display Manufacturer </button> \
            <button class=\"button\" id= \""+data[i].id+"\" onclick= \"checkAvailability('"+data[i].id+"' , '"+data[i].manufacturer+"' )\"> Is item available? </button> \
            </li>")
            //break; //for testing getting only the very first instance from api to reduce loading time
        };
  });
});