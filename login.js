// Cek jika sudah pernah login sebelumnya dalam sesi browser
if (sessionStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorAlert = document.getElementById("errorAlert");

    // Kredensial yang ditentukan
    const validUser = "TBM-K3";
    const validPass = "Kernaden02";

    if (user === validUser && pass === validPass) {
        // Simpan status login di Session Storage
        sessionStorage.setItem("isLoggedIn", "true");
        // Alihkan ke index.html
        window.location.href = "index.html";
    } else {
        // Tampilkan pesan error
        errorAlert.style.display = "flex";
        document.getElementById("password").value = ""; // Reset password field
        document.getElementById("password").focus();
    }
});

// Otomatis menambahkan keterangan pembuat di bawah card/form login secara dinamis
document.addEventListener("DOMContentLoaded", function() {
    const loginFormCard = document.getElementById("loginForm") || document.querySelector("form") || document.body;
    
    // Membuat elemen footer kecil untuk branding aplikasi
    const brandingFooter = document.createElement("div");
    brandingFooter.style.textAlign = "center";
    brandingFooter.style.marginTop = "20px";
    brandingFooter.style.fontSize = "13px";
    brandingFooter.style.color = "#6c757d";
    brandingFooter.style.fontFamily = "inherit";
    brandingFooter.innerHTML = `
        <p style="margin: 0; font-weight: 500;">Toolbox Meeting Digital System</p>
        <p style="margin: 4px 0 0 0; font-size: 11px; opacity: 0.8;">Developed with dedication by <strong>OLAN MAULANA S.Kom</strong></p>
    `;
    
    // Sisipkan di bawah form login
    loginFormCard.insertAdjacentElement('afterend', brandingFooter);
});