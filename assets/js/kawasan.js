function kawasan(wil) {
    var reg;
    switch(parseInt(wil)) {
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