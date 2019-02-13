document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var FloatButton = M.FloatingActionButton.init(elems,{direction: 'left'});

    var textAreas = document.getElementsByTagName("textarea");
    for(var x = 0; x < textAreas.length; x++){
        textAreas[x].classList.add("materialize-textarea")
    }
  });