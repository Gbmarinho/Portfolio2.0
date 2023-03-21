let letter = 0;
const text = '     Gabriel Marinho';

function typeWriter() {
    if(letter < text.length) {
        document.querySelector(".principal__sentence").innerHTML += text.charAt(letter);
        letter++;
        setTimeout(typeWriter, 180)
    }
}
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


typeWriter();