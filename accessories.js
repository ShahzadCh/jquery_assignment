$(document).ready(function() {
  //alert( "Jackets load was performed." );

  $.get( "https://bad-api-assignment.reaktor.com/products/accessories", function( data ) {
    //console.write(stringify(data));
    //alert( "Jackets load was performed." );
    //$( ".jackets-list" ).append(data)
    //console.log(JSON.stringify(data));

    for(i=0; i<data.length; i++) {
    $( ".accessories-list" ).append("<li id="+data[i].id+"> <h2><i> Item number "+(i+1)+" </i></h2> <h3> <b> "+data[i].name+" </b> </h3> <h3> "+data[i].manufacturer+"</h3> <h3> "+data[i].color+"</h3> <h3> "+data[i].type+"</h3> <h3> "+data[i].price+"</h3></li>")

    }
  });
});