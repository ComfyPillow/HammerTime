(function(){
	window.onload = function() {
		var myElement = document.getElementById('myElement');
		console.log(myElement)
		// create a simple instance
		// by default, it only adds horizontal recognizers
		var mc = new Hammer(myElement);
		var mySvg = d3.select('#shape')


		/*
		function dragmove(d) {
		    mySvg
		      .style("top", ((d3.event.sourceEvent.pageY) - this.offsetHeight/2)+"px")
		      .style("left", ((d3.event.sourceEvent.pageX) - this.offsetWidth/2)+"px")
		}

		var drag = d3.behavior.drag()
	    	.on("drag", dragmove);
		} */


		// listen to events...
		mc.on("panleft panright tap press", function(ev) {
		    myElement.textContent = ev.type +" gesture detected.";
		});

		mc.on("tap", function(ev){

			mySvg.selectAll('circle')
			  .data([1])
			  .enter().append('circle')
			  .attr('r', 50)
			  .attr('cx', $(window).width()/2)
			  .attr('cy', $(window).height()/3)
			  .attr('fill', '#add8e6')
		});

		mc.on("panleft press", function(ev) {
		    mySvg.selectAll('circle')
    			.call(drag)
		});

}());