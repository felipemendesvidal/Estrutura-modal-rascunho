//selecionando o a e criando evento
// $('a').click(function(){
//     $('.abrir-modal').text('clisou');
// });

//.click é um atalho para esa função abaixo, a diferença é que a forma de baixo te da mais felexibilidade de usar o mesmo codigo em outros eventos
// $('a').on('click', function(){
//     $('a').text('mudara')
// });

//da para usar o referenciador de objetos internos 'this
// $('a').on('click', function(){
//     $(this).text('clicou');
// });

//a variavel da function, é criada como objeto, onde eles terão varios paramentros
//$('a').click(function(e){
    //e.preventDefault(); //ele previne o funcionamento pradrão do objeto, ou seja, ele não vai mais fazer o que o objeto faria por padrão e faz o que voce quer na função.
//});

//outros efeitos mouseenter, mesma coisa do click, mas fara quando o mouse passar por cima do objeto
// mouseleave mesma Coisa, so que quando o mouse sai
//scroll

$(document).on('scroll', function(){
    $('a').text('deu scrol');
});

//ricize
$(window).on('resize', function(){
    $('a').text($('body').width());
});
//adicionando classe
$('.abrirmodal').click(function(){
    $('.modal').toggleClass('active');
     //togleClass adicona quando o elemento não exite, e quando exite remove
    
});
//hasClass() verifica se a classe existe e retorna falso ou verdadeiro
$('a').click(function(){
    var condition = $(this).hasClass('active');
    if (condition){
        console.log('grapesisgood');
    }
});

