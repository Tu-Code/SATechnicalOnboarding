$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky'); 
        }else{
            $('.navbar').removeClass('sticky'); 
        }
    })
    // toggle menu/navbar scrfipt
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
    //transition
    var typed = new Typed(".typing",{
        strings: [ "Computer Scientist", "Programmer","Back-end Developer", "Machine Learning Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2",{
        strings: [ "Computer Scientist", "Programmer","Back-end Developer", "Machine Learning Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    
    function sendEmail(){
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );
    }
   
});
//need to commit to gh