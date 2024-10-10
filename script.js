// Seleksi elemen HTML
const suhuInput = document.getElementById("suhu");
const jenisSuhuSelect = document.getElementById("jenisSuhu");
const kalkulatorButton = document.getElementById("kalkulator");
const hasilElement = document.getElementById("hasil");

// Fungsi konversi suhu dari Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
  return (celcius * 9/5) + 32;
}

// Fungsi konversi suhu dari Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Fungsi utama kalkulator suhu
function kalkulatorSuhu() {
  // Ambil nilai suhu dari input pengguna
  const suhu = parseFloat(suhuInput.value);
  const jenisSuhu = jenisSuhuSelect.value;

  // Lakukan konversi suhu
  if (jenisSuhu === "celcius") {
    const hasil = celciusToFahrenheit(suhu);
    hasilElement.innerHTML = `${suhu}°C = ${hasil}°F`;
  } else if (jenisSuhu === "fahrenheit") {
    const hasil = fahrenheitToCelcius(suhu);
    hasilElement.innerHTML = `${suhu}°F = ${hasil}°C`;
  }
}

// Tambahkan event listener ke tombol kalkulator
kalkulatorButton.addEventListener("click", kalkulatorSuhu);