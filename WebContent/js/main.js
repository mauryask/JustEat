$(document).ready(function()
		{
	        $('#signup').click(function(){
	        	
	        	show_signup();
	        	
	        });
	        
	        
	        $('#login').click(function(){
	        	
	        	show_log();
	        	
	        });
	        
	        $('.cancel_login, .cancel_signup').click(function(){
	        	
	        	cancel();
	        	
	        });
	        
	        $('.go_to_login').click(function(){
	        	show_log();
	        	TweenMax.to('.signup-screen',0.5,{scaleY: 0});
	        	TweenMax.to('.login-screen',0.5,{scaleY: 1});
	        });
	        
	        $('.go_to_sign_up').click(function(){
	        	TweenMax.to('.signup-screen',0.5,{scaleY: 1});
	        	TweenMax.to('.login-screen',0.5,{scaleY: 0});
	        });
	        
		});
		

function show_signup()
{
 TweenMax.to('.signup-screen',0.5,{scaleY: 1});
 $('.search-box').fadeOut("slow");
}

function show_log()
{
	TweenMax.to('.login-screen',0.5,{scaleY: 1});
	 $('.search-box').fadeOut("slow");
}

function cancel()
{
	TweenMax.to('.signup-screen',0.5,{scaleY: 0});
	TweenMax.to('.login-screen',0.5,{scaleY: 0});
	$('.search-box').fadeIn("slow");
}
