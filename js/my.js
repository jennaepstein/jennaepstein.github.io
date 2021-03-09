$(document).ready(function(){

    $(".filter-button").click(function(){
        var filterValue = $(this).attr('data-filter');

        if(filterValue == "all")
        {
           $(".filter").fadeIn('slow');
        }
        else
        {
            $(".filter").not('.'+filterValue).hide();
            $('.' + filterValue).fadeIn('slow');

        }
    });

  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
