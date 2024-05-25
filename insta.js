$(document).ready(function(){
    $('#main-form').validate({
        rules:{
            em:{
                required:true,
                minlength:5,
            },
            fn:{
                required:true,
                minlength:5,
            },
            un:{
                required:true,
                minlength:5,
            },
            pw:{
                required:true,
                minlength:5,
            }
        },
        messages:{
            em:{
                required:"This field is required ",
                minlength:"requires min 5 characters ",
               
            },
            fn:{
                required:"This field is required",
                minlength:"requires min 5 characters ",
            },
            un:{
                required:"This field is required",
                minlength:"requires min 5 characters ",
            },
            pw:{
                required:"This field is required",
                minlength:"requires min 5 characters ",
            }
        }
       

    });
    $('.SU').click(function(){
       // alert('loading...');
        $('.msg').show();

    })

    
});