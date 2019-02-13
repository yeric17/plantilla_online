document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var FloatButton = M.FloatingActionButton.init(elems,{direction: 'left'});
    
    elems = document.querySelectorAll('.datepicker');
    var DatePicker = M.Datepicker.init(elems, {format: "dd/mm/yyyy"});

    var elems = document.querySelectorAll('.timepicker');
    var TimePicker = M.Timepicker.init(elems, {defaultTime:"now"});

    var textAreas = document.getElementsByTagName("textarea")
    for(var x = 0; x < textAreas.length; x++){
        textAreas[x].classList.add("materialize-textarea")
    }
  });