document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var FloatButton = M.FloatingActionButton.init(elems,{direction: 'left'});

    var textAreas = document.getElementsByTagName("textarea");
    for(var x = 0; x < textAreas.length; x++){
        textAreas[x].classList.add("materialize-textarea")
    }

    var mrQuestionTable = document.getElementsByClassName("mrQuestionTable")[0]
    var spans
    if(mrQuestionTable !== undefined){
        spans= mrQuestionTable.getElementsByTagName("span")
    }
    if(spans){
        for(var x = 0; x < spans.length; x++){
    
            var input = spans[x].getElementsByClassName("mrMultiple")[0] || undefined
            
            if(input !== undefined){
                label = spans[x].getElementsByTagName("label")[0]
                var innSpan = label.getElementsByTagName("span")[0]
    
                label.removeChild(innSpan);
                spans[x].removeChild(input);
                label.appendChild(input);
                label.appendChild(innSpan);
            }
        }
    }

  });