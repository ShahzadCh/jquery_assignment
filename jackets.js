

$(document).ready(function() {
  //alert( "Jackets load was performed." );

  $.get( "https://bad-api-assignment.reaktor.com/products/jackets", function( data ) {
    //console.write(stringify(data)); //trying to print the data
    //alert( "Jackets load was performed." ); //trying to get the page loaded at least
    //$( ".jackets-list" ).append(data)
    //It took me some time to at least get the data printed on console, until I remembered Stringify
    //console.log(JSON.stringify(data)); //This made all the data printed for me

    //Now that I was able to successfully retrieve all the data in my console, time for 'for loop'
    //for(i=0: i<len(data): i++) //apparently length works differently than it does in python
    for(i=0; i<data.length; i++) {
    //j_colors = ""
    //for(j=0; j<data[i].color.length; j++) {}; //decided to implement this once I am at least
    //able to print some general info about the product.
    //<h3>"+Name of Product+"</h3>  did not work somehow
    $( ".jackets-list" ).append("<li id="+data[i].id+"> <h2><i> Item number "+(i+1)+" </i> </h2> <h2> <b> "+data[i].name+" </h2> </h2> <h3> "+data[i].manufacturer+"</h3> <h3> "+data[i].color+"</h3> <h3> "+data[i].type+"</h3> <h3> "+data[i].price+"</h3></li>")

    }
  });
});