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
		mc.on("panleft panright tap rotate press", function(ev) {
		    myElement.textContent = ev.type +" gesture detected.";
		    mc.get('rotate').set({enable:true});
		});

		//Creates initial Circle - see if you can get it to add one each tap?
		mc.on("tap", function(ev){

			mySvg.append('rect')
			    .attr('rx', 100)
			    .attr('ry', 100)
			    .attr('x', $(window).width()/2 - 50)
			    .attr('y', $(window).height()/3 - 50)
			    .attr('width', 100)
			    .attr('height', 100)
			    .attr('fill', '#add8e6')
		});

		mc.on("rotate press", function(ev){
			mySvg.selectAll('rect')
				.transition()
    			.duration(2000)
    			.attr('rx', 0)
			    .attr('ry', 0)
			    .attr('fill', '#B23AEE')
		}); 

		//Slides Left
		mc.on("panleft press", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('x', $(window).width()/4);
		});

		//Slides Right
		mc.on("panright press", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('x', ($(window).width()/4 * 3));
		});

		//Slides back to center
		mc.on("press", function(ev){
			mySvg.selectAll('rect')
				.transition()
    			.duration(2000)
    			.attr('rx', 100)
			    .attr('ry', 100)
			    .attr('fill', '#add8e6')
    			.attr('x', $(window).width()/2 - 50)
			    .attr('y', $(window).height()/3 - 50)
		}); 
 
	}
}());