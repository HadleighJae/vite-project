import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
/*import javascriptLogo from './javascript.svg'
// import viteLogo from 'public.vite.svg'*/
// import { setupCounter } from '../counter.js'

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

const nightTexture = new THREE.TextureLoader().load('images/night_sky.jpg');
const sunTexture = new THREE.TextureLoader().load('images/sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('images/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('images/venus.jpg');
const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const earthTexture = new THREE.TextureLoader().load('images/earth.jpg');
const marsTexture = new THREE.TextureLoader().load('images/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('images/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('images/saturn.jpg');
const uranusTexture = new THREE.TextureLoader().load('images/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('images/neptune.jpg');

const sunGeometry = new THREE.SphereGeometry( 10, 32, 50);
const mercuryGeometry = new THREE.SphereGeometry( 0.034, 32, 50);
const venusGeometry = new THREE.SphereGeometry( 0.086, 32, 50);
const moonGeometry = new THREE.SphereGeometry( 0.02275, 32, 50);
const earthGeometry = new THREE.SphereGeometry( 0.091, 32, 50);
const marsGeometry = new THREE.SphereGeometry( 0.048, 32, 50);
const jupiterGeometry = new THREE.SphereGeometry( 1.00, 32, 50);
const saturnGeometry = new THREE.SphereGeometry( 0.84, 32, 50);
const uranusGeometry = new THREE.SphereGeometry( 0.34, 32, 50);
const neptuneGeometry = new THREE.SphereGeometry( 0.33, 32, 50);

//set the color of the basic material in the object parameters `{}`
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const mercuryMaterial = new THREE.MeshStandardMaterial({map: mercuryTexture});
const venusMaterial = new THREE.MeshStandardMaterial({map: venusTexture});
const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture});
const marsMaterial = new THREE.MeshStandardMaterial({map: marsTexture});
const jupiterMaterial = new THREE.MeshStandardMaterial({map: jupiterTexture});
const saturnMaterial = new THREE.MeshStandardMaterial({map: saturnTexture});
const uranusMaterial = new THREE.MeshStandardMaterial({map: uranusTexture});
const neptuneMaterial = new THREE.MeshStandardMaterial({map: neptuneTexture});

const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

const controls = new OrbitControls(camera, renderer.domElement)

scene.add(sunMesh);
scene.add(mercuryMesh);
scene.add(venusMesh);
scene.add(moonMesh);
scene.add(earthMesh);
scene.add(marsMesh);
scene.add(jupiterMesh);
scene.add(saturnMesh);
scene.add(uranusMesh);

sunMesh.position.z = 0;
sunMesh.position.x = 0;
sunMesh.position.y = 0;

mercuryMesh.position.z = 0;
mercuryMesh.position.x = 10.42;
mercuryMesh.position.y = 0;

venusMesh.position.z = 0;
venusMesh.position.x = 10.75;
venusMesh.position.y = 0;

moonMesh.position.z = 0;
moonMesh.position.x = 10.90;
moonMesh.position.y = 0;

earthMesh.position.z = 0;
earthMesh.position.x = 11.10;
earthMesh.position.y = 0;

marsMesh.position.z = 0;
marsMesh.position.x = 11.65;
marsMesh.position.y = 0;

jupiterMesh.position.z = 0;
jupiterMesh.position.x = 15.60;
jupiterMesh.position.y = 0;

saturnMesh.position.z = 0;
saturnMesh.position.x = 20.00;
saturnMesh.position.y = 0;

uranusMesh.position.z = 0;
uranusMesh.position.x = 30.00;
uranusMesh.position.y = 0;

neptuneMesh.position.z = 0;
neptuneMesh.position.x = 40.00;
neptuneMesh.position.y = 0;

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.power = 10;
pointLight.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 0.1;
ambientLight.position.set(0, 0, 0);

scene.add(pointLight);
scene.add(ambientLight);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame( animate );

    // rotate sun
    sunMesh.rotation.x += 0.00;
    sunMesh.rotation.y += 0.006875;

    // rotate mercury
    mercuryMesh.rotation.x += 0.00;
    mercuryMesh.rotation.y += 0.0000108;

    // rotate earth
    venusMesh.rotation.x += 0.00;
    venusMesh.rotation.y += 0.000065;

    // rotate moon
    moonMesh.rotation.x += 0.00;
    moonMesh.rotation.y += 0.0005;

    // rotate earth
    earthMesh.rotation.x += 0.00;
    earthMesh.rotation.y += 0.001574;

    // rotate earth
    marsMesh.rotation.x += 0.00;
    marsMesh.rotation.y += 0.000866;

    // rotate moon
    jupiterMesh.rotation.x += 0.00;
    jupiterMesh.rotation.y += 0.045583;

    // rotate earth
    saturnMesh.rotation.x += 0.00;
    saturnMesh.rotation.y += 0.03684;

    // rotate earth
    uranusMesh.rotation.x += 0.00;
    uranusMesh.rotation.y += 0.014794;

    // rotate earth
    neptuneMesh.rotation.x += 0.00;
    neptuneMesh.rotation.y += 0.009719;

    renderer.render( scene, camera );
}

animate();