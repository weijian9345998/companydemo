$(function(){
var a=0;
var t=setInterval(function(){
        move();
		a++;
    },2000);

/*$(".st-a").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000);
    })*/
	
function move(){
	$(".mida").eq(a).addClass('shadow up').siblings().removeClass('shadow up');;
	$(".stbg3 ol i").eq(a).addClass('big').siblings().removeClass('big');
	if(a==3){a=-1};
}
})