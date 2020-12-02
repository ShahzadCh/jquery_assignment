
//$(document).ready(function(){
    //$.fn.name_printer = function(){
                //return(name)}
    //});
    //alert("name-printer function successfully created")});

$(document).ready(function() {
  // initialization code goes here

  $.get( "https://bad-api-assignment.reaktor.com/products/shirts", function( data ) {
    //$.fn.name_printer = function(){
            //return(name)}
    //$(".list-group").click(name_printer(){
    //});

    for (i=0; i<data.length; i++){
    colors = ""
    for (j=0; j<data[i].color.length; j++){
    colors+=("<span class=\"badge\">"+data[i].color[j]+" </span>")
    }
    $( ".list-group" ).append( "<li id="+data[i].id+" class=\"list-group-item\"> <h3>"+data[i].name+" </h3> <h4> " +data[i].manufacturer+ " </h4> <h4>"+data[i].type+" </h4> <h4><b>"+data[i].price+" </b></h4> <div> "+colors+" </div>  </li> " );
    //.append(<b>"+fn.name_printer(data[i].name)+"</b>)
    //$( ".list2" ).append( "<li>  "+data[i].name+"  </li>");
    //$( ".list-group" ).alert("I am pressed")

    //$( ".list-group" ).click(function() {
    //$( this ).alert("I am clicked");});
    }
    //alert( "Load was performed." );
    $(".loading").hide();
  });
});