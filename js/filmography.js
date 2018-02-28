$(document).ready(function(){
    //Detailed Info expand and collapse
    $(".filmography-ul-container").hide();
         $(".filmography-title").click(function(){
        if($(this).next(".filmography-ul-container").css("display")=="none"){
            $(this).next(".filmography-ul-container").show();
            $(this).find("img").attr("src","images/white_minus.gif");
        }
        else{
            $(this).next(".filmography-ul-container").hide();
            $(this).find("img").attr("src","images/white_plus.gif");
        }
    });

});