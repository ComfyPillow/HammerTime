(function(){
	window.onload = function() {
		var myElement = document.getElementById('myElement');
		$('#shapearea').css({'height':($(window).height()/3 * 2) + 'px','width':$(window).width() + 'px' });
		$('#myElement').css({'height': $(window).height()/3});
		// create a simple instance
		// by default, it only adds horizontal recognizers
		var mc = new Hammer(myElement);
		var mySvg = d3.select('#shapearea')

		// listen to events...
		mc.on("panleft panright panup pandown tap rotate press", function(ev) {
		    myElement.textContent = ev.type +" gesture detected.";
		    // Enables Rotate
		    mc.get('rotate').set({enable:true});
		    // Allows for Up and Down Swipes
		    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
		    mc.get('rotate').set({threshold: 10});
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

		//Rotate fills and changes to a rectangle
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
  				.attr('x', $(window).width()/5);
		});

		//Slides Right
		mc.on("panright press", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('x', ($(window).width()/5 * 4));
		});

		//Slides Up
		mc.on("panup press", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('y', $(window).height()/30);
		});

		//Slides Left
		mc.on("pandown press", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('y', $(window).height()/2);
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