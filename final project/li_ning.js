$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/app9T6xQJ88UdG60q/lining?api_key=keysvB4lHDB6fjPJK";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.year);
                     items.push(value.fields.revenue);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "年份",
                     defaultContent:""},
                   { title: "营业收入",
                       defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
            data: {
                columns: dataSet,
                type : 'bar'
            },
            axis: {
              x: {label: 'Product'},
              y: {label: '# of Items'}
            },
            bar: {
                title: "# of Items by Product Category:",
            }
        });

      }); // end .getJSON

   }); // end button

}); // document ready