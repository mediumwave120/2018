$(function(){
	$('#box ul li').hover(function(){
		$(this).stop().animate({width:'400px'},300).siblings().stop().animate({width:'134px'},300)
		$(this).children('p').hide();
		$(this).css('margin','0 1px');
	},function(){
		$('#box ul li').stop().animate({width:'172px'},300)
		$(this).children('p').show();
		$(this).css('margin','0');
	});
});
