function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function table(){
  $('tbody > tr > th').replaceWith(function(){
    return $("<th> <input type= \"checkbox\" / name = \"courses\">    &nbsp; </th>")
  });
  $("#selectBtn").click(function(){
      var rowData = new Array();
      var inst = new Array();
      var sub = new Array();
      var title = new Array();
      var typ = new Array();
      var num = new Array();
      var sec = new Array();
      var instr = new Array();
      var tim = new Array();
      var tdArr = new Array();

      var checkbox = $("input[name=courses]:checked");

      checkbox.each(function(i){
        var tr = checkbox.parent().parent().eq(i);
        var td = tr.children();
        rowData.push(tr.text());

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
  });
  result(inst, sub, title, typ, num, sec, instr, tim);
});
}

function result(inst, sub, title, typ, num, sec, instr, tim){
  document.write("<h3>Your Courses</h3>")
  document.write("<table border=\"1\" class=\"dataframe\">");
  document.write("<thead> <tr style=\"text-align: left;\"> <tr> <th>Institution</th> <th>Subject</th> <th>Title</th> <th>Type</th> <th>Number</th> <th>Section</th> <th>Instructor</th> <th>Date</th> </tr>");
  for(i = 0; i < inst.length; i++){
    document.write("<tr>");
      document.write("<td>" + inst[i] + "</td>");
      document.write("<td>" + sub[i] + "</td>");
      document.write("<td>" + title[i] + "</td>");
      document.write("<td>" + typ[i] + "</td>");
      document.write("<td>" + num[i] + "</td>");
      document.write("<td>" + sec[i] + "</td>");
      document.write("<td>" + instr[i] + "</td>");
      document.write("<td>" + tim[i] + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

function select(){
  $('#schools').change(function(){
    $('.table').hide();
    $('#' + $(this).val()).show();
});
}