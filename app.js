let input = document.getElementsByTagName("input").length;

for (let i = 0; i < input; i++) {
    document.getElementsByTagName("input")[i].addEventListener("focusin", function() {

        this.style.transition = "border 0.3s ease-in-out 0.0s";

        this.style.border = "5px solid teal";


    })


    document.getElementsByTagName("input")[i].addEventListener("focusout", function() {

        this.style.transition = "border 0.3s ease-in-out 0.0s";


        this.style.border = "0px solid teal";


    })

}