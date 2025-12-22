// ====================================================================
// 1. CUMPLIDOS 💖
// ====================================================================

const COMPLIMENTS = [
    "Mi Kiari.",
    "Sos mi princesa.",
    "Mi sueño hecho realidad.",
    "Brillas más que la Luna y las estrellas.",
    "Tu risa es mi sonido favorito.",
    "Sos mi todo.",
    "Mejoras cada uno de mis días.",
    "Sos la persona mas genuina que conozco.",
    "Me encanta tu forma de ser.",
    "Sos mi No. 1 Party Anthem.",
    "Tu voz es mi calma.",
    "Estoy loco por vos.",
    "Te amo mas que la tarta de jamon y queso.",
    "Verte es mi mayor alegría.",
    "Sos mi lugar seguro.",
    "Sos mi hogar.",
    "Siempre me haces sentir paz.",
    "Baby i promise.",
    "Nadie como tu.",
    "Me inspiras a ser mejor.",
    "T amodoroadmiroaprecio mucho.",
    "Cada segundo con vos siempre es especial.",
    "Sos mi persona favorita.",
    "Pienso en vos todo el tiempo.",
    "Sos mi luz en la oscuridad.",
    "No te cambiaría por nada.",
    "Simplemente, gracias por existir.",
    "Tienes un alma preciosa.",
    "Me enseñaste a que es sentirse seguro.",
    "Te elijo hoy y siempre."
];

// ====================================================================
// 2. ESCENA 3D
// ====================================================================

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050015);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let galaxyMesh;
let moonMesh;

// ====================================================================
// 3. GALAXIA Y LUNA
// ====================================================================

const textureLoader = new THREE.TextureLoader();

function createGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const count = 15000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 500;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 500;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 500;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const texture = textureLoader.load(
        'https://threejs.org/examples/textures/sprites/disc.png'
    );

    const material = new THREE.PointsMaterial({
        size: 0.8,
        color: 0xffffff,
        transparent: true,
        map: texture,
        depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    return points;
}

function createMoon() {
    const texture = textureLoader.load(
        'https://threejs.org/examples/textures/planets/moon_1024.jpg'
    );

    const geometry = new THREE.SphereGeometry(100, 64, 64);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(-100, 50, -400);
    scene.add(mesh);
    return mesh;
}

galaxyMesh = createGalaxy();
moonMesh = createMoon();
camera.position.z = 100;

// ====================================================================
// 4. CUMPLIDOS AUTOMÁTICOS
// ====================================================================

const complimentBox = document.getElementById("compliment-box");
const complimentText = document.getElementById("compliment-text");
let index = 0;

function showCompliment(text) {
    complimentText.innerHTML = text;
    complimentBox.classList.add("visible");
}

window.hideCompliment = function () {
    complimentBox.classList.remove("visible");
};

function startComplimentCycle() {
    showCompliment(COMPLIMENTS[index]);
    index++;

    setInterval(() => {
        hideCompliment();

        setTimeout(() => {
            if (index >= COMPLIMENTS.length) index = 0;
            showCompliment(COMPLIMENTS[index]);
            index++;
        }, 2000);

    }, 7000);
}

setTimeout(startComplimentCycle, 3000);

// ====================================================================
// 5. ANIMACIÓN
// ====================================================================

function animate() {
    requestAnimationFrame(animate);

    galaxyMesh.rotation.y += 0.0002;
    galaxyMesh.rotation.x += 0.0001;
    moonMesh.rotation.y += 0.0003;

    renderer.render(scene, camera);
}

animate();

// ====================================================================
// 6. RESIZE
// ====================================================================

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
