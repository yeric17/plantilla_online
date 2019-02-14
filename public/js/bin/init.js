document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var FloatButton = M.FloatingActionButton.init(elems,{direction: 'left'});

    var textAreas = document.getElementsByTagName("textarea");
    for(var x = 0; x < textAreas.length; x++){
        textAreas[x].classList.add("materialize-textarea")
    }

    var table = document.getElementsByClassName("mrQuestionTable")[0]
    if(table !== undefined){
        var tds = table.getElementsByTagName("td")
    }
    if(tds !== undefined){
        table.classList.add("responsive-table")
        table.classList.add("highlight")
        for(var x = 0; x < tds.length; x++){
            var input = tds[x].getElementsByTagName("input")[0]
            if(input !== undefined){
                var label = document.createElement("label")
                var span = document.createElement("span")

                label.appendChild(span)
                label.setAttribute("for",input.id)
                tds[x].appendChild(label)
            }
        }
    }

    var inputFields = document.getElementsByClassName("input-field");

    for(var x = 0; x < inputFields.length; x++){
        var span = inputFields[x].getElementsByTagName("span")[0];
        var textA = span.getElementsByClassName("mrEdit")[0];
        var label = inputFields[x].getElementsByTagName("label")[0];
        
        inputFields[x].removeChild(label);
        inputFields[x].removeChild(span);

        inputFields[x].appendChild(textA);
        inputFields[x].appendChild(label);
    }


  });