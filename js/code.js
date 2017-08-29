/* for HuberPortfolio Deliverable2 */

function MontyPython(){    

    var name = document.getElementsByName("Name")[0].value;
    var quest = document.getElementsByName("Quest")[0].value;
    var color;
    
    for(var i=0, j=document.getElementsByName("Color").length; i<j; i++){
        if(document.getElementsByName("Color")[i].selected = "true"){
            color = document.getElementsByName("Color")[i].value;
        }
    }
    
    if(name.length <1){
        name = "Sir Galahad";
    }
    if(quest.length <1){
        quest = "seek the Holy Grail"
    }
    
    var results = name + " is on a quest to " + quest + "!";
    
    document.getElementById("formResults").innerHTML = results;
    document.getElementById("formResults").style.color = color;
    document.getElementById("formResults").style.display="block";
    document.getElementById("video").style.display="block";
    
};
