(function($){
	$.fn.randomIMG = function(){
		
		return
			var path: 'images/';
			var myImages: ['1.jpg', '2.jpg', '3.jpg' ];
			
	}
			randomImage:function(config) {
				
				var config = $.extend({}, $.randomImage.defaults, config); 
				
				 return this.each(function() {
						
						var imageNames = config.myImages;
						
						//get size of array, randomize a number from this
						// use this number as the array index

						var imageNamesSize = imageNames.length;

						var lotteryNumber = Math.floor(Math.random()*imageNamesSize);

						var winnerImage = imageNames[lotteryNumber];

						var fullPath = config.path + winnerImage;
						
						
						//put this image into DOM at class of randomImage
						// alt tag will be image filename.
						$(this).attr( {
										src: fullPath,
										alt: winnerImage,
									});
				
						
				});	
			}
			
	});
})(jQuery);

$.randomImage = {
		defaults: {
			
			//you can change these defaults to your own preferences.
			
		}			
	}