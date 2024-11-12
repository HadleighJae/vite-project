import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import {ThreeMFLoader} from "three/addons";
//import './style.css';
/*import javascriptLogo from './javascript.svg'
// import viteLogo from 'public.vite.svg'*/
// import { setupCounter } from '../counter.js'

// Setup

const scene = new THREE.Scene();

//Textures
const nightTexture = new THREE.TextureLoader().load('images/night_sky.jpg');
const mercuryTexture = new THREE.TextureLoader().load('images/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('images/venus.jpg');
const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const earthTexture = new THREE.TextureLoader().load('images/earth.jpg');
const marsTexture = new THREE.TextureLoader().load('images/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('images/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('images/saturn.jpg');
const uranusTexture = new THREE.TextureLoader().load('images/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('images/neptune.jpg');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// Object texture mapping

const mercuryGeometry = new THREE.SphereGeometry( 3.4, 32, 16);
const venusGeometry = new THREE.SphereGeometry( 8.6, 32, 16);
const moonGeometry = new THREE.SphereGeometry( 2, 32, 16);
const earthGeometry = new THREE.SphereGeometry( 9.1, 32, 16);
const marsGeometry = new THREE.SphereGeometry( 4.8, 32, 16);
const jupiterGeometry = new THREE.SphereGeometry( 100, 32, 16);
const saturnGeometry = new THREE.SphereGeometry( 184, 32, 16);
const uranusGeometry = new THREE.SphereGeometry( 34, 32, 16);
const neptuneGeometry = new THREE.SphereGeometry( 33, 32, 16);

const mercuryMaterial = new THREE.MeshBasicMaterial({map: mercuryTexture})
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture})
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);

const moonMaterial = new THREE.MeshBasicMaterial({map: moonTexture})
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);

const earthMaterial = new THREE.MeshBasicMaterial({map: earthTexture})
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

const marsMaterial = new THREE.MeshBasicMaterial({map: marsTexture})
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);

const jupiterMaterial = new THREE.MeshBasicMaterial({map: jupiterTexture})
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

const saturnMaterial = new THREE.MeshBasicMaterial({map: saturnTexture})
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);

const uranusMaterial = new THREE.MeshBasicMaterial({map: uranusTexture})
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);

const neptuneMaterial = new THREE.MeshBasicMaterial({map: neptuneTexture})
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

//set the color of the basic material in the object parameters `{}`

const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );

const controls = new OrbitControls(camera, renderer.domElement)

scene.add(mercuryMesh);
scene.add(venusMesh);
scene.add(moonMesh);
scene.add(earthMesh);
scene.add(marsMesh);
scene.add(jupiterMesh);
scene.add(saturnMesh);
scene.add(uranusMesh);

mercuryMesh.position.z = 0;
mercuryMesh.position.x = -623;
mercuryMesh.position.y = 0;

venusMesh.position.z = 0;
venusMesh.position.x = -590;
venusMesh.position.y = 0;

moonMesh.position.z = 0;
moonMesh.position.x = -575;
moonMesh.position.y = 0;

earthMesh.position.z = 0;
earthMesh.position.x = -555;
earthMesh.position.y = 0;

marsMesh.position.z = 0;
marsMesh.position.x = -500;
marsMesh.position.y = 0;

jupiterMesh.position.z = 0;
jupiterMesh.position.x = -105;
jupiterMesh.position.y = 0;

saturnMesh.position.z = 0;
saturnMesh.position.x = 500;
saturnMesh.position.y = 0;

uranusMesh.position.z = 0;
uranusMesh.position.x = 1500;
uranusMesh.position.y = 0;

neptuneMesh.position.z = 0;
neptuneMesh.position.x = 2500;
neptuneMesh.position.y = 0;

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.background = nightTexture;

scene.add(pointLight);
scene.add(ambientLight);

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(1000);
camera.position.setY(0);
camera.position.setX(400);

function animate() {
    requestAnimationFrame( animate );
    // rotate mercury
    mercuryMesh.rotation.x += 0.00;
    mercuryMesh.rotation.y += 0.0105;

    // rotate earth
    venusMesh.rotation.x += 0.00;
    venusMesh.rotation.y += 0.01;

    // rotate moon
    moonMesh.rotation.x += 0.00;
    moonMesh.rotation.y += 0.05;

    // rotate earth
    earthMesh.rotation.x += 0.00;
    earthMesh.rotation.y += 0.016;

    // rotate earth
    marsMesh.rotation.x += 0.00;
    marsMesh.rotation.y += 0.017;

    // rotate moon
    jupiterMesh.rotation.x += 0.00;
    jupiterMesh.rotation.y += 5.832;

    // rotate earth
    saturnMesh.rotation.x += 0.00;
    saturnMesh.rotation.y += 1.392;

    // rotate earth
    uranusMesh.rotation.x += 0.00;
    uranusMesh.rotation.y += 0.0245;

    // rotate earth
    neptuneMesh.rotation.x += 0.00;
    neptuneMesh.rotation.y += 0.024;

    renderer.render( scene, camera );
}

animate();
