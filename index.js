let letter = 0;
const text = '     Gabriel Marinho';
let contadorMenu = 0;
function animar(){
    const btn = document.getElementById("btn-menu");
    btn.classList.toggle('ativar');
    if(contadorMenu % 2 == 0){
        $(".menu-escondido").css("transform", "scaleY(1)");
    }else{
        $(".menu-escondido").css("transform", "scaleY(0)");
    }
    contadorMenu = contadorMenu +1;
}

function typeWriter() {
    if(letter < text.length) {
        document.querySelector(".principal__sentence").innerHTML += text.charAt(letter);
        letter++;
        setTimeout(typeWriter, 180)
    }
}
$('.link-header a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'), 
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 75
    }, 1000)
})

$('.menu-escondido a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'), 
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 75
    }, 1000)
})


$(".html").hover(
    function(){
        $(".htmlimg1").css('opacity', '0');
        $(".htmlimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-html").css('display', 'block');
    },
    function(){
        $(".htmlimg1").css('opacity', '1');
        $(".htmlimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-html").css('display', 'none');
    }
)
$(".css").hover(
    function(){
        $(".cssimg1").css('opacity', '0');
        $(".cssimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-css").css('display', 'block');
    },
    function(){
        $(".cssimg1").css('opacity', '1');
        $(".cssimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-css").css('display', 'none');
    }
)
$(".js").hover(
    function(){
        $(".jsimg1").css('opacity', '0');
        $(".jsimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-js").css('display', 'block');
    },
    function(){
        $(".jsimg1").css('opacity', '1');
        $(".jsimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-js").css('display', 'none');
    }
)
$(".react").hover(
    function(){
        $(".reactimg1").css('opacity', '0');
        $(".reactimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-react").css('display', 'block');
    },
    function(){
        $(".reactimg1").css('opacity', '1');
        $(".reactimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-react").css('display', 'none');
    }
)
$(".php").hover(
    function(){
        $(".phpimg1").css('opacity', '0');
        $(".phpimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-php").css('display', 'block');
    },
    function(){
        $(".phpimg1").css('opacity', '1');
        $(".phpimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-php").css('display', 'none');
    }
)
$(".wordpress").hover(
    function(){
        $(".wordpressimg1").css('opacity', '0');
        $(".wordpressimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-wordpress").css('display', 'block');
    },
    function(){
        $(".wordpressimg1").css('opacity', '1');
        $(".wordpressimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-wordpress").css('display', 'none');
    }
)
$(".python").hover(
    function(){
        $(".pythonimg1").css('opacity', '0');
        $(".pythonimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-python").css('display', 'block');
    },
    function(){
        $(".pythonimg1").css('opacity', '1');
        $(".pythonimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-python").css('display', 'none');
    }
)
$(".cplus").hover(
    function(){
        $(".cplusimg1").css('opacity', '0');
        $(".cplusimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-cplus").css('display', 'block');
    },
    function(){
        $(".cplusimg1").css('opacity', '1');
        $(".cplusimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-cplus").css('display', 'none');
    }
)
$(".java").hover(
    function(){
        $(".javaimg1").css('opacity', '0');
        $(".javaimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-java").css('display', 'block');
    },
    function(){
        $(".javaimg1").css('opacity', '1');
        $(".javaimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-java").css('display', 'none');
    }
)
$(".sql").hover(
    function(){
        $(".sqlimg1").css('opacity', '0');
        $(".sqlimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-sql").css('display', 'block');
    },
    function(){
        $(".sqlimg1").css('opacity', '1');
        $(".sqlimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-sql").css('display', 'none');
    }
)
$(".git").hover(
    function(){
        $(".gitimg1").css('opacity', '0');
        $(".gitimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-git").css('display', 'block');
    },
    function(){
        $(".gitimg1").css('opacity', '1');
        $(".gitimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-git").css('display', 'none');
    }
)
$(".git-hub").hover(
    function(){
        $(".githubimg1").css('opacity', '0');
        $(".githubimg2").css('opacity', '1');
        $(".texto-pri").css('display', 'none');
        $(".texto-github").css('display', 'block');
    },
    function(){
        $(".githubimg1").css('opacity', '1');
        $(".githubimg2").css('opacity', '0');
        $(".texto-pri").css('display', 'block');
        $(".texto-github").css('display', 'none');
    }
)

$(".nav-exp button").click(function(e){
    var name = $(this).attr('name');
    var classes =  $(this).attr('class');
    
    if(name == "IC"){
        if(classes != "button-nav active-button"){
            $(".Lafeea").css("transform", "translate(0px)");
            $(".embusca").css("transform", "translate(0px)");
            $(".IntegraUerj").css("transform", "translate(0px)");
            $(".vendas").css("transform", "translate(0px)");
            $(".embusca").css("transition", '0s');
            $(".Lafeea").css("transition", '0s');
            $(".IntegraUerj").css("transition", '0s');
            $(".vendas").css("transition", '0s');
            $(".active-button").removeClass('active-button');
            $(this).addClass('active-button');
            $(".vendas").css("opacity", "0");
            $(".embusca").css("opacity", "0");
            $(".IntegraUerj").css("opacity", "0");
            $(".Lafeea").css("opacity", "0");
            $(".projetoIC").css("left", '-30px');
            $(".projetoIC").css("transition", '0.3s');
            $(".projetoIC").css("transform", "translate(30px)")
            $(".projetoIC").css("opacity", "1");
        }
    }
    if(name == "busca"){
        if(classes != "button-nav active-button"){
            $(".Lafeea").css("transform", "translate(0px)");
            $(".projetoIC").css("transform", "translate(0px)");
            $(".IntegraUerj").css("transform", "translate(0px)");
            $(".vendas").css("transform", "translate(0px)");
            $(".vendas").css("transition", '0s');
            $(".Lafeea").css("transition", '0s');
            $(".IntegraUerj").css("transition", '0s');
            $(".projetoIC").css("transition", '0s');
            $(".active-button").removeClass('active-button');
            $(this).addClass('active-button');
            $(".vendas").css("opacity", "0");
            $(".projetoIC").css("opacity", "0");
            $(".IntegraUerj").css("opacity", "0");
            $(".Lafeea").css("opacity", "0");
            $(".embusca").css("left", '-30px');
            $(".embusca").css("transition", '0.3s');
            $(".embusca").css("transform", "translate(30px)")
            $(".embusca").css("opacity", "1");
        }
    }
    if(name == "vendas"){
        if(classes != "button-nav active-button"){
            $(".Lafeea").css("transform", "translate(0px)");
            $(".embusca").css("transform", "translate(0px)");
            $(".IntegraUerj").css("transform", "translate(0px)");
            $(".projetoIC").css("transform", "translate(0px)");
            $(".embusca").css("transition", '0s');
            $(".Lafeea").css("transition", '0s');
            $(".IntegraUerj").css("transition", '0s');
            $(".projetoIC").css("transition", '0s');
            $(".active-button").removeClass('active-button');
            $(this).addClass('active-button');
            $(".embusca").css("opacity", "0");
            $(".projetoIC").css("opacity", "0");
            $(".IntegraUerj").css("opacity", "0");
            $(".Lafeea").css("opacity", "0");
            $(".vendas").css("left", '-30px');
            $(".vendas").css("transition", '0.3s');
            $(".vendas").css("transform", "translate(30px)")
            $(".vendas").css("opacity", "1");
        }
    }
    if(name == "Integra"){
        if(classes != "button-nav active-button"){
            $(".Lafeea").css("transform", "translate(0px)");
            $(".embusca").css("transform", "translate(0px)");
            $(".projetoIC").css("transform", "translate(0px)");
            $(".vendas").css("transform", "translate(0px)");
            $(".embusca").css("transition", '0s');
            $(".Lafeea").css("transition", '0s');
            $(".vendas").css("transition", '0s');
            $(".projetoIC").css("transition", '0s');
            $(".active-button").removeClass('active-button');
            $(this).addClass('active-button');
            $(".vendas").css("opacity", "0");
            $(".embusca").css("opacity", "0");
            $(".projetoIC").css("opacity", "0");
            $(".Lafeea").css("opacity", "0");
            $(".IntegraUerj").css("left", '-30px');
            $(".IntegraUerj").css("transition", '0.3s');
            $(".IntegraUerj").css("transform", "translate(30px)")
            $(".IntegraUerj").css("opacity", "1");
        }
    }
    if(name == "lafeea"){
        if(classes != "button-nav active-button"){
            $(".projetoIC").css("transform", "translate(0px)");
            $(".embusca").css("transform", "translate(0px)");
            $(".IntegraUerj").css("transform", "translate(0px)");
            $(".vendas").css("transform", "translate(0px)");
            $(".embusca").css("transition", '0s');
            $(".vendas").css("transition", '0s');
            $(".IntegraUerj").css("transition", '0s');
            $(".projetoIC").css("transition", '0s');
            $(".active-button").removeClass('active-button');
            $(this).addClass('active-button');
            $(".vendas").css("opacity", "0");
            $(".embusca").css("opacity", "0");
            $(".projetoIC").css("opacity", "0");
            $(".IntegraUerj").css("opacity", "0");
            $(".Lafeea").css("left", '-30px');
            $(".Lafeea").css("transition", '0.3s');
            $(".Lafeea").css("transform", "translate(30px)")
            $(".Lafeea").css("opacity", "1");
        }
    }
})

typeWriter();