import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
/*import javascriptLogo from './javascript.svg'
// import viteLogo from 'public.vite.svg'*/
// import { setupCounter } from '../counter.js'
// hoping this works

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

const nightTexture = new THREE.TextureLoader().load('images/stars.jpg');
const sunTexture = new THREE.TextureLoader().load('images/sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('images/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('images/venus.jpg');
const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const earthTexture = new THREE.TextureLoader().load('images/earth.jpg');
const marsTexture = new THREE.TextureLoader().load('images/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('images/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('images/saturn.jpg');
const saturnTextureRing = new THREE.TextureLoader().load('images/saturnring.png');
const uranusTexture = new THREE.TextureLoader().load('images/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('images/neptune.jpg');

scene.background = nightTexture;

const sunGeometry = new THREE.SphereGeometry( 13.91400, 32, 50);
const mercuryGeometry = new THREE.SphereGeometry( 0.4879, 32, 50);
const venusGeometry = new THREE.SphereGeometry( 1.2104, 32, 50);
const moonGeometry = new THREE.SphereGeometry( 1, 32, 50);
const earthGeometry = new THREE.SphereGeometry( 1.2756, 32, 50);
const marsGeometry = new THREE.SphereGeometry( 0.6792, 32, 50);
const jupiterGeometry = new THREE.SphereGeometry( 14.2984, 32, 50);
const saturnGeometry = new THREE.SphereGeometry( 12.0536, 32, 50);
const uranusGeometry = new THREE.SphereGeometry( 5.1118, 32, 50);
const neptuneGeometry = new THREE.SphereGeometry( 4.9528, 32, 50);

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
sunMesh.add(mercuryMesh);
sunMesh.add(venusMesh);
sunMesh.add(earthMesh);
sunMesh.add(marsMesh);
sunMesh.add(jupiterMesh);
sunMesh.add(saturnMesh);
sunMesh.add(uranusMesh);
sunMesh.add(neptuneMesh);

const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercuryMesh);
scene.add(mercuryObj);

const venusObj = new THREE.Object3D();
venusObj.add(venusMesh);
scene.add(venusObj);

const earthObj = new THREE.Object3D();
earthObj.add(earthMesh);
scene.add(earthObj);

const marsObj = new THREE.Object3D();
marsObj.add(marsMesh);
scene.add(marsObj);

const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiterMesh);
scene.add(jupiterObj);

const saturnObj = new THREE.Object3D();
saturnObj.add(saturnMesh);
scene.add(saturnObj);

const saturnRingGeo = new THREE.RingGeometry(2, 30, 32);
const saturnMaterialRing = new THREE.MeshBasicMaterial({map: saturnTextureRing, side: THREE.DoubleSide});
const saturnMeshRing = new THREE.Mesh(saturnRingGeo, saturnMaterialRing);
saturnObj.add(saturnMeshRing);

const uranusObj = new THREE.Object3D();
uranusObj.add(uranusMesh);
scene.add(uranusObj);

const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptuneMesh);
scene.add(neptuneObj);

sunMesh.position.z = 0;
sunMesh.position.x = 0;
sunMesh.position.y = 0;

mercuryMesh.position.z = 0;
mercuryMesh.position.x = 57.900000;
mercuryMesh.position.y = 0;

venusMesh.position.z = 0;
venusMesh.position.x = 108.200000;
venusMesh.position.y = 0;

moonMesh.position.z = 0;
moonMesh.position.x = 149.600000;
moonMesh.position.y = 0;

earthMesh.position.z = 0;
earthMesh.position.x = 149.600000;
earthMesh.position.y = 0;

marsMesh.position.z = 0;
marsMesh.position.x = 227.900000;
marsMesh.position.y = 0;

jupiterMesh.position.z = 0;
jupiterMesh.position.x = 778.600000;
jupiterMesh.position.y = 0;

// put back to 1433.500000
saturnMesh.position.z = 0;
saturnMesh.position.x = 1433.500000;
saturnMesh.position.y = 0;

saturnMeshRing.position.x = 1433.500000;

saturnMeshRing.rotation.x = 190;

uranusMesh.position.z = 0;
uranusMesh.position.x = 2872.500000;
uranusMesh.position.y = 0;

neptuneMesh.position.z = 0;
neptuneMesh.position.x = 4495.100000;
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

    sunMesh.rotation.x += 0.00;
    sunMesh.rotation.y += 0.6875;

    // rotate mercury
    mercuryMesh.rotation.y += 0.00108;

    // rotate earth
    venusMesh.rotation.y += 0.00065;

    // rotate moon
    moonMesh.rotation.y += 0.0;

    // rotate earth
    earthMesh.rotation.y += 0.1574;

    // rotate earth
    marsMesh.rotation.y += 0.0866;

    // rotate moon
    jupiterMesh.rotation.y += 4.5583;

    // rotate earth
    saturnMesh.rotation.y += 3.6840;

    // rotate earth
    uranusMesh.rotation.y += 1.4794;

    // rotate earth
    neptuneMesh.rotation.y += 0.9719;

    mercuryObj.rotation.y += 0.00479;
    venusObj.rotation.y += 0.0035;
    earthObj.rotation.y += 0.00298;
    marsObj.rotation.y += 0.00241;
    jupiterObj.rotation.y += 0.00131;
    saturnObj.rotation.y += 0.00097;
    uranusObj.rotation.y += 0.00068;
    neptuneObj.rotation.y += 0.00054;

    renderer.render( scene, camera );
}

animate();