/**
 * Description placeholder
 * @date 1/17/2024 - 12:12:40 AM
 *
 * @type {*}
 */
var btn = document.getElementById("searchBtn");
btn.addEventListener("click", parseNIK);

/**
 * Parses the NIK (Nomor Induk Kependudukan) and displays the result.
 * ${1:Description placeholder}
 * @date 1/13/2024 - 3:11:50 AM
 */
function parseNIK() {
  var searchInput = document.getElementById("search");
  var searchText = searchInput.value;
  var wil, reg, prov, kabkot, kec, tgl, bln, thn, unik, jk, tahun;

  if (searchText.length !== 16) {
    alert("NIK harus 16 digit!");
  } else if (isNaN(searchText)) {
    alert("NIK harus berupa angka!");
  } else if (searchText.length === 0) {
    alert("NIK harus diisi!");
  } else {
    wil = searchText.substring(0, 1);
    prov = searchText.substring(0, 2);
    kabkot = searchText.substring(2, 4);
    kec = searchText.substring(0, 6);
    tgl = searchText.substring(6, 8);
    bln = searchText.substring(8, 10);
    thn = searchText.substring(10, 12);
    unik = searchText.substring(12, 16);

    reg = kawasan(wil);
    namaProv = getNamaProv(prov);
    namaKabkot = getNamaKabKot(prov + "." + kabkot);
    namaKec = getNamaKec(kec);

    jk = parseInt(tgl, 10) / 40;
    jk = Math.floor(jk);
    if (jk === 1) {
      jk = "Perempuan";
    } else {
      jk = "Laki-laki";
    }

    tahun = new Date().getFullYear().toString().substr(-2);

    if (thn >= tahun) {
      thn = "19" + thn;
    } else {
      thn = "20" + thn;
    }

    var pasaran = new Array("Legi", "Pahing", "Pon", "Wage", "Kliwon");

    // Parse the date
    var date = new Date(thn, parseInt(bln, 10) - 1, tgl % 40);
    var d1 = new Date("2014-01-28");
    const newLocal = 86400000;
    var d = newLocal;
    var selisih = Math.floor(Math.abs(d1 - date) / d);
    var pasar = pasaran[selisih % 5];
    // Parse the date for human
    var idDate = new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    // Parse the date to Hijri
    var hijriDate = new Intl.DateTimeFormat("id-ID-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    var sakaDate = new Intl.DateTimeFormat("id-ID-u-ca-indian", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    // Display the result
    document.getElementById("result").style.display = "block";
    document.getElementById("regResult").textContent = reg;
    document.getElementById("provResult").textContent = namaProv;
    document.getElementById("kabkotResult").textContent = namaKabkot;
    document.getElementById("kecResult").textContent = namaKec;
    document.getElementById("tglResult").textContent = idDate;
    document.getElementById("pasarResult").textContent = pasar;
    document.getElementById("hijriResult").textContent = hijriDate;
    document.getElementById("sakaResult").textContent = sakaDate;
    document.getElementById("jkResult").textContent = jk;
    document.getElementById("zodiakResult").textContent = new ZodiacSign(
      date
    ).sign;
    document.getElementById("shioResult").textContent =
      new ZodiacSign(date).chinese["yinyang"] +
      " " +
      new ZodiacSign(date).chinese["element"] +
      " " +
      new ZodiacSign(date).chinese["sign"];
    document.getElementById("unikResult").textContent = parseInt(unik, 10);
  }
}
