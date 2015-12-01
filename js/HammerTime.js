(function(){
	window.onload = function() {
		var myElement = document.getElementById('myElement');
		$('#shape').css({'height':($(window).height()/3 * 2) + 'px','width':$(window).width() + 'px' });
		$('#myElement').css({'height': $(window).height()/3});
		// create a simple instance
		// by default, it only adds horizontal recognizers
		var mc = new Hammer(myElement);
		var mySvg = d3.select('#shape')

		// listen to events...
		mc.on("panleft panright tap press", function(ev) {
		    myElement.textContent = ev.type +" gesture detected.";
		});

		//Creates initial Circle - see if you can get it to add one each tap?
		mc.on("tap", function(ev){

			mySvg.append('circle')
			    .attr('r', 50)
			    .attr('cx', $(window).width()/2)
			    .attr('cy', $(window).height()/3)
			    .attr('fill', '#add8e6')
		});

		//Slides Left
		mc.on("panleft press", function(ev) {
		    mySvg.selectAll('circle')
    			.transition()
    			.duration(2000)
  				.attr('cx', $(window).width()/4);
		});

		//Slides Right
		mc.on("panright press", function(ev) {
		    mySvg.selectAll('circle')
    			.transition()
    			.duration(2000)
  				.attr('cx', ($(window).width()/4 * 3));
		});

		//Slides back to center
		mc.on("press", function(ev){
			mySvg.selectAll('circle')
				.transition()
    			.duration(2000)
    			.attr('cx', $(window).width()/2)
			    .attr('cy', $(window).height()/3)
		}); 
 
	}
}());