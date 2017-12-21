
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


// Canvas
container = document.getElementById( 'canvas' );
document.body.appendChild( container );
var renderer = new THREE.WebGLRenderer({
    alpha: true,
});
renderer.setSize( window.innerWidth,  window.innerHeight );
container.appendChild( renderer.domElement );

// Light
var light = new THREE.AmbientLight( 0x404040, 3 ); // soft white light
scene.add( light );


// JIGGLYPUFF
//var jp;
// loading manager
var loadingManager = new THREE.LoadingManager( function() {
	scene.add( jp );
} );
// collada
var loader = new THREE.ColladaLoader( loadingManager );
loader.load( 'objects/jigglypuff.DAE', function ( collada ) {
	jp = collada.scene;	
} );




camera.position.z = 3;
camera.position.y = .5;

var animate = function () {
	requestAnimationFrame( animate );
	renderer.setSize( window.innerWidth,  window.innerHeight );

	jp.rotation.z += .01;

	renderer.render(scene, camera);
};

animate();