const inputNama = document.getElementById("inputNama");
const inputEmail = document.getElementById("inputEmail");
const pesan = document.getElementById("pesan");
const pesanEmail = document.getElementById("pesanEmail");
const btnSimpan = document.getElementById("btnSimpan");
const btnTema = document.getElementById("btnTema");

// Validasi email
function validasiEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validasi sebelum kirim ke PHP
btnSimpan.addEventListener("click", function (e) {
  let valid = true;

  // reset pesan
  pesan.textContent = "";
  pesanEmail.textContent = "";

  const namaVal = inputNama.value.trim();
  const emailVal = inputEmail.value.trim();

  // cek nama
  if (namaVal === "") {
    pesan.textContent = "Nama tidak boleh kosong!";
    valid = false;
  }

  // cek email
  if (emailVal === "") {
    pesanEmail.textContent = "Email tidak boleh kosong!";
    valid = false;
  } else if (!validasiEmail(emailVal)) {
    pesanEmail.textContent = "Format email tidak valid!";
    valid = false;
  }

  // hanya blok kalau salah
  //if (!valid) {
  //e.preventDefault();
  //}
});

// Tema (tidak berpengaruh ke submit)
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
