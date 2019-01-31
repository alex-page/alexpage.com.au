var harmonograph = document.getElementById( 'harmonograph' );

if ( harmonograph ) {
	function RandomNumber(e,n,r){return n=n||0,(r=r||!1)?Math.floor(Math.random()*(e-n)+n):Math.random()*(e-n)+n}function RandomPendulum(){return{amplitude:200,frequency:RandomNumber(4,2,!0)+RandomNumber(.02,-.02),phase:RandomNumber(0,Math.PI),damping:RandomNumber(0,.01)}}function DrawHarmonograph(e,n,r,a,o){if(void 0!==n[o=o||0]){e.lineWidth=r,e.strokeStyle=a;var t=(n[o].x+n[o+1].x)/2,m=(n[o].y+n[o+1].y)/2;e.quadraticCurveTo(n[o].x,n[o].y,t,m),e.stroke(),o+=1,requestAnimationFrame(function(){return DrawHarmonograph(e,n,r,a,o)})}else cancelAnimationFrame(DrawHarmonograph)}function Harmonograph(e){if(e.element.getContext){for(var n=e.speed?e.speed:10,r=e.width?e.width:.05,a=e.color?e.color:"#000",o=e.drawingTime?e.drawingTime:150,t=e.pendulum?e.pendulum:[RandomPendulum(),RandomPendulum(),RandomPendulum(),RandomPendulum()],m=e.element,u=.001*n,i=0,d=0,h=[];d<60*o;){d++;var p=t.map(function(e){return e.amplitude*Math.sin(e.frequency*i+e.phase)*Math.exp(-e.damping*i)}),l=p[0]+p[1],s=p[2]+p[3];h.push({x:l+m.width/2,y:s+m.height/2}),i+=u}var c=m.getContext("2d");c.clearRect(0,0,m.width,m.height),c.save(),c.restore(),c.beginPath(),c.stroke(),requestAnimationFrame(function(){return DrawHarmonograph(c,h,r,a)})}else m.innerHtml("Harmonograph not supported in this browser."),console.error("Harmonograph not supported in this browser.")}

	Harmonograph({
		element: harmonograph,
		color: '#3DFCB3',
		speed: 20,
		width: 0.01,
		drawingTime: 300,
	});
}
