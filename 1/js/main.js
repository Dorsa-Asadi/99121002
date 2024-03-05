let display = true;
function myfunction() {
    const element = document.getElementById("pid");
    const mybox = document.getElementById("mybox");
    
    
    if(display){

        element.style.display="none";
        display=false;
        

    }else{

        element.style.display="block";
        display=true;

    }

    mybox.style.left="300px";

    alert("you click on link!")
}