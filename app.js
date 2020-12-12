
function displayAlert(msg){
    alert(msg)
}

$(document).ready(function() {
  // initialization code goes here

  //$.get( "http://localhost:8080/", function( data ) {
  $.get( "https://bad-api-assignment.reaktor.com/products/jackets", function( data ) {
  //{  $.get( "https://bad-api-assignment.reaktor.com/products/jackets", function( data ) {

    for (i=0; i<data.length; i++){
    colors = ""
    for (j=0; j<data[i].color.length; j++){
    colors+=("<span class=\"badge\">"+data[i].color[j]+" </span>")
    }
    $( ".list-group" ).append( "<li id="+data[i].id+" class=\"list-group-item\"> <h3>"+data[i].name+" </h3> <h4> " +data[i].manufacturer+ " </h4> <h4>"+data[i].type+" </h4> <h4><b>"+data[i].price+" </b></h4> <div> "+colors+" </div> <button class=\"button\" onclick= \"displayAlert(' "+data[i].name+" ')\"> Display </button> </li> " );

    }
    //alert( "Load was performed." );
    $(".loading").hide();
  });
});