/**
 * ${1:Description placeholder}
 * @date 1/13/2024 - 3:11:51 AM
 *
 * @param {*} wil
 * @returns {string}
 */
function kawasan(wil) {
  var reg;
  switch (parseInt(wil,10)) {
    case 1:
      reg = "Sumatera";
      break;
    case 2:
      reg = "Sumatera";
      break;
    case 3:
      reg = "Jawa";
      break;
    case 5:
      reg = "Bali dan Nusa Tenggara (Sunda Kecil)";
      break;
    case 6:
      reg = "Kalimantan";
      break;
    case 7:
      reg = "Sulawesi";
      break;
    case 8:
      reg = "Maluku";
      break;
    case 9:
      reg = "Papua";
      break;
    default:
      reg = "Tidak diketahui";
  }
  return reg;
}
