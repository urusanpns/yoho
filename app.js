// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ8vxOZ6Gx7N0cfidTPuS2EkDHS5R4PXQ",
  authDomain: "linkabsen-bb38f.firebaseapp.com",
  projectId: "linkabsen-bb38f",
  storageBucket: "linkabsen-bb38f.firebasestorage.app",
  messagingSenderId: "909980411728",
  appId: "1:909980411728:web:b2d154a57310561fa1ae55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('submitAbsence').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const days = document.getElementById('days').value();

    const data = {
        name: name,
        status: status,
        days: days,
        timestamp: new Date().toISOString()
    };

    // Store data in Firebase database
    database.ref('absensi').push(data).then(() => {
        alert('Absensi Berhasil!');
    }).catch((error) => {
        alert('Gagal menyimpan absensi: ' + error.message);
    });
  // Mengambil data dari Firebase dan menampilkan di halaman
const absensiRef = database.ref('absensi');
absensiRef.on('child_added', function (snapshot) {
    const data = snapshot.val();
    console.log(data); // Menampilkan data pada console untuk debugging
    // Tampilkan data di halaman web sesuai kebutuhan
});

});
