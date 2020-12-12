function displayAlert(msg){
    alert(msg)
}

var refresh_time = 5000
var global_id_list = []
var info;

function checkStatus(item_id){
    for(i=0; i<(info.response).length; i++){
        if(info.response[i].id != undefined && info.response[i].id.toLocaleLowerCase()==item_id.toLocaleLowerCase()){
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(info.response[i].DATAPAYLOAD,"text/xml");
            ava =  xmlDoc.getElementsByTagName("INSTOCKVALUE")[0].childNodes[0].nodeValue
            $( "#"+item_id ).html(ava)
            dict[item_id][1]= ava
            console.log(dict[item_id])
            console.log(dict)
            break;
        }
    }
}
// dictionary {item_id: [time, availability]}
// A dictionary with item_id's as keys and a list containing (time and availability) as values
var dict = {};
var timer = 0;
function checkAvailability(item_id, manufacturer) {
    timer2 = new Date().getTime()
    $( "#"+item_id ).html("...") //to access an item by id "#" is used, to access by class "." is used. //html modifies its html
    if(item_id in global_id_list && timer != 0 && (timer2-timer)<refresh_time){
        //if it is not first instance and not enough time has passed
        //checkStatus(item_id) //then just call the checkStatus function without updating the value of info, means info stays same as it was last time so no .get call to the api to get the updated value of info
        $( "#" + item_id ).html(dict[item_id][1]) //No need to fetch, just use the required data from our dictionary
    }
    else{ //if it is either the very first instance or enough time has passed, now we need to make api call
        url="https://bad-api-assignment.reaktor.com/availability/"+manufacturer
        $( "#"+item_id ).html("Fetching...") //changing html value of button
        $.get(url, function (data2){ //api get request to fetch new data
            info = data2; //update that data into a global info variable
            checkStatus(item_id); //with this function call info's newly fetched value will be used by checkStatus
        })
        global_id_list.push(item_id) //since this id has now been clicked, so it goes to global_id_list for easier future matching
    }

    dict[item_id] = []
    dict[item_id][0] = timer2
    timer=timer2 //Need to give new value to timer in either case, no matter whether "if" or "else" condition was executed
    //console.log(dict)

    //console.log(info) // SUCCESSFUL, IT RETURNED {code: 200, response: Array(8495)}
    //console.log(info.code) // HURRAAAYYY finally WORKED, RETURNED 200 AS EXPECTED
    //console.log(info.response) // WORKINGGGG
    //console.log((info.response).length) // PERFECTO
    //console.log(info.response[0]) // FIRST DETAILED INSTANCE OF NESTED ARRAY
    //console.log(info.response[0].id) // GRABBING THE ID FROM THIS INSTANCE
    //console.log(info.response[0].DATAPAYLOAD) //GRABBING THE SECOND KEY-VALUE PAIR, THIS ONE is in "xml" SO NEED TO SEARCH XML PASRSING METHOD
}

$(document).ready(function() {

  $.get( "https://bad-api-assignment.reaktor.com/products/accessories", function( data ) {

    //for(i=0; i<data.length; i++) {
    for(i=0; i<10; i++){ // to take only first 10 values for testing
        $( ".accessories-list" ).append("<li> \
        <h3> <b> "+data[i].name+" </b> </h3> \
        <h3> "+data[i].manufacturer+"</h3> \
        <h3> "+data[i].color+"</h3> \
        <h3> "+data[i].type+"</h3> \
        <h3> "+data[i].price+"</h3> \
        <button class=\"button\" onclick= \"displayAlert(' "+data[i].manufacturer+" ')\"> Display Manufacturer </button>\
        <button class=\"button\" id= \""+data[i].id+"\" onclick= \"checkAvailability('"+data[i].id+"' , '"+data[i].manufacturer+"')\"> Is item available? </button>\
        </li>")
        //break; //for testing getting only the very first instance from api to reduce loading time
    };
  });
});