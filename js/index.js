// show the table of selected school and hide the other schools' tables
// Reference: http://jsfiddle.net/FvMYz/6587/
function selectSchool(){
    $('#schools').on('change', function() {
      if ( this.value == 'smith')
      {
        $("#smith").show();
        $("#hampshire").hide();
        $("#amherst").hide();
        $("#umass").hide();
      }
      
      if ( this.value == 'hampshire')
      {
        $("#hampshire").show();
        $("#smith").hide();
        $("#amherst").hide();
        $("#umass").hide();
      }
      
      if ( this.value == 'amherst')
      {
        $("#amherst").show();
        $("#hampshire").hide();
        $("#smith").hide();
        $("#umass").hide();
      }
      if ( this.value == 'umass')
      {
        $("#umass").show();
        $("#hampshire").hide();
        $("#amherst").hide();
        $("#smith").hide();
      }
     });
  }

function load(){
  $('tbody > tr > th').replaceWith(function(){
    return $("<th> <input type= \"checkbox\" / class =\"largerCheckbox\" name = \"check\"> &nbsp; </th>")
  });

  //reference: https://stackoverflow.com/questions/30981765/how-to-divide-table-to-show-in-pages-the-table-data-is-filled-dynamically-with
  $(document).ready(function() {
    var table = $("table").DataTable({
        "iDisplayLength": 10,
        "aLengthMenu": [[10, 25, 50, 100,  -1], [10, 25, 50, 100, "All"]]
      });
  
  // replace indices of tables into checkboxes
  // Reference for checkbox: https://stackoverflow.com/questions/11873711/i-want-to-add-a-check-box-beside-each-row-in-a-table-using-html/11873727
    $("#submitBtn").click(function(){
      var inst = new Array();
      var sub = new Array();
      var title = new Array();
      var typ = new Array();
      var num = new Array();
      var sec = new Array();
      var instr = new Array();
      var tim = new Array();

      /* Reference for checking checkboxes across multiple pages: https://www.gyrocode.com/articles/jquery-datatables-how-to-add-a-checkbox-column/
      https://datatables.net/forums/discussion/36866/unable-to-remember-checkboxes-across-pages
      */
      var checkbox = table.$("input[type=checkbox]");
      checkbox.each(function(i){
      // Reference: https://stackoverflow.com/questions/36217098/checkboxes-only-work-on-first-page-datatables-rails
      if(this.checked){
        var tr = checkbox.parent().parent().eq(i);
        var td = tr.children();

        var institution = td.eq(1).text();
        var subject = td.eq(2).text();
        var name = td.eq(3).text();
        var type = td.eq(4).text();
        var number = td.eq(5).text();
        var section = td.eq(6).text();             
        var instructor = td.eq(7).text();
        var time = td.eq(8).text();
        
        inst.push(institution)
        sub.push(subject);
        title.push(name);
        typ.push(type);
        num.push(number);
        sec.push(section);
        instr.push(instructor);
        tim.push(time);
      }
  }); 
  result(inst, sub, title, typ, num, sec, instr, tim);
  });
});
}

// print out user's selection into table
function result(inst, sub, title, typ, num, sec, instr, tim){
  $("#resultBody").empty();
    for(var i = 0; i < inst.length; i++){
        $("#resultBody").append("<tr>");
        $("#resultBody").append("<td> <input type= \"checkbox\" / class =\"largerCheckbox\" name = \"courses\"> &nbsp; </td>");
        $("#resultBody").append("<td>" + inst[i] + "</td>");
        $("#resultBody").append("<td>" + sub[i] + "</td>");
        $("#resultBody").append("<td>" + title[i] + "</td>");
        $("#resultBody").append("<td>" + typ[i] + "</td>");
        $("#resultBody").append("<td>" + num[i] + "</td>");
        $("#resultBody").append("<td>" + sec[i] + "</td>");
        $("#resultBody").append("<td>" + instr[i] + "</td>");
        $("#resultBody").append("<td>" + tim[i] + "</td>");
        $("#resultBody").append("</tr>");
    }
  }

function remove(){
    $("#removeBtn").click(function(){
      var checkbox = $("input[name=courses]:checked");
      checkbox.each(function(){
        $("#resultBody checkbox").parents("tr").remove();
    });
  });

    $("#resetBtn").click(function(){
      $("#resultBody").empty();
    });
}
