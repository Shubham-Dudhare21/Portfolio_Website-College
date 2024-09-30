/*======================================3D elements===========================================*/ //cancled
/*Import the THREE.js library*/
import * as THREE from 'three';
/* To allow for the camera to move around the scene*/
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
/* To allow for importing the .gltf file*/
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*===========HOME PAGE==========*/

//Create a Three.JS Scene
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);


//create a new camera with positions and angles
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


//adding the renderer to html body
document.body.appendChild(renderer.domElement);

//scene variable
const scene = new THREE.Scene();

//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();



//basic Geometry for mesh to be visible - Plane
const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);



const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

//Importing mesh
const loader = new GLTFLoader().setPath('/ASSETS/Homepage_DonutCafe/scene.gltf');
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  mesh.position.set(0, 1.05, -1);
  scene.add(mesh);

//=================container
  document.getElementById('home_3d_container').style.display = 'none';
}, ( xhr ) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
},);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


//Rendering the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();












//Keep track of the mouse position, so we can make the eye move

//Keep the 3D object on a global variable so we can access it later

//OrbitControls allow the camera to move around the scene

//Set which object to render

//Instantiate a loader for the .gltf file

//Load the file

//Instantiate a new renderer and set its size

//Add the renderer to the DOM

//Set how far the camera will be from the 3D model

//Add lights to the scene, so we can actually see the 3D model

//This adds controls to the camera, so we can rotate / zoom it with the mouse

//Render the scene

//Add a listener to the window, so we can resize the window and the camera

//add mouse position listener, so we can make the eye move


//Start the 3D rendering










