import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

import { auth, db } from "./js/firebase/config.js";

document.querySelector("#app").innerHTML = `
  <main class="container py-5">
    <section class="card shadow-sm mx-auto p-4 text-center" style="max-width: 560px;">
      <h1 class="h3 mb-3">Kasir Minimarket</h1>
      <p class="mb-3">Persiapan proyek berhasil.</p>

      <div class="alert alert-success mb-0">
        Firebase Auth dan Firestore sudah berhasil diinisialisasi.
      </div>
    </section>
  </main>
`;

console.log("Firebase siap:", {
  appName: auth.app.name,
  projectId: db.app.options.projectId
});