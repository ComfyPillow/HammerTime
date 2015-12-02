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
		mc.on("panleft panright panup pandown tap rotate pinch press", function(ev) {
		    myElement.textContent = ev.type +" gesture detected.";
		    // Enables Rotate
		    mc.get('rotate').set({enable:true});
		    // Enables Pinch
		    mc.get('pinch').set({enable:true});
		    // Allows for Up and Down Swipes
		    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
		    mc.get('rotate').set({threshold: 10});
		});

		//Creates initial Circle 
		mc.on("tap", function(ev){
			mySvg.append('rect')
			    .attr('rx', 100)
			    .attr('ry', 100)
			    .attr('x', $(window).width()/2 - 50)
			    .attr('y', $(window).height()/3 - 50)
			    .attr('width', 100)
			    .attr('height', 100)
			    .attr('fill', '#add8e6')
			    .each(function(){
			    	addHammerListener(this);
			    })
		});

		var addHammerListener = function(that) {
			var objMC = new Hammer(that)
		    // Allows for Up and Down Swipes
		    objMC.get('pan').set({ direction: Hammer.DIRECTION_ALL });

		    //Tap Stop
		    objMC.on("tap", function(ev){
		    	d3.select(that)
		    		.transition()
		    		.duration(0);
		    });

			//Slides Left
			objMC.on("panleft", function(ev) {
			    d3.select(that)
	    			.transition()
	    			.duration(2000)
	  				.attr('x', 50);
			});

			//Slides Right
			objMC.on("panright", function(ev) {
			    d3.select(that)
	    			.transition()
	    			.duration(2000)
	  				.attr('x', $(window).width() - 150);
			});

			//Slides Up
			objMC.on("panup", function(ev) {
			    d3.select(that)
	    			.transition()
	    			.duration(2000)
	  				.attr('y', $(window).height()/30);
			});

			//Slides Left
			objMC.on("pandown", function(ev) {
			    d3.select(that)
	    			.transition()
	    			.duration(2000)
	  				.attr('y', $(window).height()/2);
			});

			//Slides back to center
			objMC.on("press", function(ev){
				d3.select(that)
					.transition()
	    			.duration(2000)
	    			.attr('rx', 100)
				    .attr('ry', 100)
				    .attr('fill', '#add8e6')
	    			.attr('x', $(window).width()/2 - 50)
				    .attr('y', $(window).height()/3 - 50)
			});
		}

		// ** For Selecting ALL shapes **

		//Fills and changes to a rectangle
		mc.on("pinch", function(ev){
			mySvg.selectAll('rect')
				.transition()
    			.duration(2000)
    			.attr('rx', 0)
			    .attr('ry', 0)
			    .attr('fill', '#B23AEE')
		})

		//Rotate fills and changes to a rectangle
		mc.on("rotate press", function(ev){
			mySvg.selectAll('rect')
				.transition()
				.duration(2000)
				.attr('x', Math.random() * $(window).width())
				.attr('y', Math.random() * $(window).height())
		}); 

		//Slides Left
		mc.on("panleft", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('x', 50);
		});

		//Slides Right
		mc.on("panright", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('x', $(window).width() - 150);
		});

		//Slides Up
		mc.on("panup", function(ev) {
		    mySvg.selectAll('rect')
    			.transition()
    			.duration(2000)
  				.attr('y', $(window).height()/30);
		});

		//Slides Left
		mc.on("pandown", function(ev) {
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