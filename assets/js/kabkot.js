function getNamaKabKot(kodeDagri) {
    const data = 
    [
        {
            kode_bps: "1101",
            nama_bps: "SIMEULUE",
            kode_dagri: "11.09",
            nama_dagri: "KAB. SIMEULUE"
        },
        {
            kode_bps: "1102",
            nama_bps: "ACEH SINGKIL",
            kode_dagri: "11.10",
            nama_dagri: "KAB. ACEH SINGKIL"
        },
        {
            kode_bps: "1103",
            nama_bps: "ACEH SELATAN",
            kode_dagri: "11.01",
            nama_dagri: "KAB. ACEH SELATAN"
        },
        {
            kode_bps: "1104",
            nama_bps: "ACEH TENGGARA",
            kode_dagri: "11.02",
            nama_dagri: "KAB. ACEH TENGGARA"
        },
        {
            kode_bps: "1105",
            nama_bps: "ACEH TIMUR",
            kode_dagri: "11.03",
            nama_dagri: "KAB. ACEH TIMUR"
        },
        {
            kode_bps: "1106",
            nama_bps: "ACEH TENGAH",
            kode_dagri: "11.04",
            nama_dagri: "KAB. ACEH TENGAH"
        },
        {
            kode_bps: "1107",
            nama_bps: "ACEH BARAT",
            kode_dagri: "11.05",
            nama_dagri: "KAB. ACEH BARAT"
        },
        {
            kode_bps: "1108",
            nama_bps: "ACEH BESAR",
            kode_dagri: "11.06",
            nama_dagri: "KAB. ACEH BESAR"
        },
        {
            kode_bps: "1109",
            nama_bps: "PIDIE",
            kode_dagri: "11.07",
            nama_dagri: "KAB. PIDIE"
        },
        {
            kode_bps: "1110",
            nama_bps: "BIREUEN",
            kode_dagri: "11.11",
            nama_dagri: "KAB. BIREUEN"
        },
        {
            kode_bps: "1111",
            nama_bps: "ACEH UTARA",
            kode_dagri: "11.08",
            nama_dagri: "KAB. ACEH UTARA"
        },
        {
            kode_bps: "1112",
            nama_bps: "ACEH BARAT DAYA",
            kode_dagri: "11.12",
            nama_dagri: "KAB. ACEH BARAT DAYA"
        },
        {
            kode_bps: "1113",
            nama_bps: "GAYO LUES",
            kode_dagri: "11.13",
            nama_dagri: "KAB. GAYO LUES"
        },
        {
            kode_bps: "1114",
            nama_bps: "ACEH TAMIANG",
            kode_dagri: "11.16",
            nama_dagri: "KAB. ACEH TAMIANG"
        },
        {
            kode_bps: "1115",
            nama_bps: "NAGAN RAYA",
            kode_dagri: "11.15",
            nama_dagri: "KAB. NAGAN RAYA"
        },
        {
            kode_bps: "1116",
            nama_bps: "ACEH JAYA",
            kode_dagri: "11.14",
            nama_dagri: "KAB. ACEH JAYA"
        },
        {
            kode_bps: "1117",
            nama_bps: "BENER MERIAH",
            kode_dagri: "11.17",
            nama_dagri: "KAB. BENER MERIAH"
        },
        {
            kode_bps: "1118",
            nama_bps: "PIDIE JAYA",
            kode_dagri: "11.18",
            nama_dagri: "KAB. PIDIE JAYA"
        },
        {
            kode_bps: "1171",
            nama_bps: "BANDA ACEH",
            kode_dagri: "11.71",
            nama_dagri: "KOTA BANDA ACEH"
        },
        {
            kode_bps: "1172",
            nama_bps: "SABANG",
            kode_dagri: "11.72",
            nama_dagri: "KOTA SABANG"
        },
        {
            kode_bps: "1173",
            nama_bps: "LANGSA",
            kode_dagri: "11.74",
            nama_dagri: "KOTA LANGSA"
        },
        {
            kode_bps: "1174",
            nama_bps: "LHOKSEUMAWE",
            kode_dagri: "11.73",
            nama_dagri: "KOTA LHOKSEUMAWE"
        },
        {
            kode_bps: "1175",
            nama_bps: "SUBULUSSALAM",
            kode_dagri: "11.75",
            nama_dagri: "KOTA SUBULUSSALAM"
        },
        {
            kode_bps: "1201",
            nama_bps: "NIAS",
            kode_dagri: "12.04",
            nama_dagri: "KAB. NIAS"
        },
        {
            kode_bps: "1202",
            nama_bps: "MANDAILING NATAL",
            kode_dagri: "12.13",
            nama_dagri: "KAB. MANDAILING NATAL"
        },
        {
            kode_bps: "1203",
            nama_bps: "TAPANULI SELATAN",
            kode_dagri: "12.03",
            nama_dagri: "KAB. TAPANULI SELATAN"
        },
        {
            kode_bps: "1204",
            nama_bps: "TAPANULI TENGAH",
            kode_dagri: "12.01",
            nama_dagri: "KAB. TAPANULI TENGAH"
        },
        {
            kode_bps: "1205",
            nama_bps: "TAPANULI UTARA",
            kode_dagri: "12.02",
            nama_dagri: "KAB. TAPANULI UTARA"
        },
        {
            kode_bps: "1206",
            nama_bps: "TOBA SAMOSIR",
            kode_dagri: "12.12",
            nama_dagri: "KAB. TOBA SAMOSIR"
        },
        {
            kode_bps: "1207",
            nama_bps: "LABUHAN BATU",
            kode_dagri: "12.10",
            nama_dagri: "KAB. LABUHANBATU"
        },
        {
            kode_bps: "1208",
            nama_bps: "ASAHAN",
            kode_dagri: "12.09",
            nama_dagri: "KAB. ASAHAN"
        },
        {
            kode_bps: "1209",
            nama_bps: "SIMALUNGUN",
            kode_dagri: "12.08",
            nama_dagri: "KAB. SIMALUNGUN"
        },
        {
            kode_bps: "1210",
            nama_bps: "DAIRI",
            kode_dagri: "12.11",
            nama_dagri: "KAB. DAIRI"
        },
        {
            kode_bps: "1211",
            nama_bps: "KARO",
            kode_dagri: "12.06",
            nama_dagri: "KAB. KARO"
        },
        {
            kode_bps: "1212",
            nama_bps: "DELI SERDANG",
            kode_dagri: "12.07",
            nama_dagri: "KAB. DELI SERDANG"
        },
        {
            kode_bps: "1213",
            nama_bps: "LANGKAT",
            kode_dagri: "12.05",
            nama_dagri: "KAB. LANGKAT"
        },
        {
            kode_bps: "1214",
            nama_bps: "NIAS SELATAN",
            kode_dagri: "12.14",
            nama_dagri: "KAB. NIAS SELATAN"
        },
        {
            kode_bps: "1215",
            nama_bps: "HUMBANG HASUNDUTAN",
            kode_dagri: "12.16",
            nama_dagri: "KAB. HUMBANG HASUNDUTAN"
        },
        {
            kode_bps: "1216",
            nama_bps: "PAKPAK BHARAT",
            kode_dagri: "12.15",
            nama_dagri: "KAB. PAKPAK BHARAT"
        },
        {
            kode_bps: "1217",
            nama_bps: "SAMOSIR",
            kode_dagri: "12.17",
            nama_dagri: "KAB. SAMOSIR"
        },
        {
            kode_bps: "1218",
            nama_bps: "SERDANG BEDAGAI",
            kode_dagri: "12.18",
            nama_dagri: "KAB. SERDANG BEDAGAI"
        },
        {
            kode_bps: "1219",
            nama_bps: "BATU BARA",
            kode_dagri: "12.19",
            nama_dagri: "KAB. BATU BARA"
        },
        {
            kode_bps: "1220",
            nama_bps: "PADANG LAWAS UTARA",
            kode_dagri: "12.20",
            nama_dagri: "KAB. PADANG LAWAS UTARA"
        },
        {
            kode_bps: "1221",
            nama_bps: "PADANG LAWAS",
            kode_dagri: "12.21",
            nama_dagri: "KAB. PADANG LAWAS"
        },
        {
            kode_bps: "1222",
            nama_bps: "LABUHAN BATU SELATAN",
            kode_dagri: "12.22",
            nama_dagri: "KAB. LABUHANBATU SELATAN"
        },
        {
            kode_bps: "1223",
            nama_bps: "LABUHAN BATU UTARA",
            kode_dagri: "12.23",
            nama_dagri: "KAB. LABUHANBATU UTARA"
        },
        {
            kode_bps: "1224",
            nama_bps: "NIAS UTARA",
            kode_dagri: "12.24",
            nama_dagri: "KAB. NIAS UTARA"
        },
        {
            kode_bps: "1225",
            nama_bps: "NIAS BARAT",
            kode_dagri: "12.25",
            nama_dagri: "KAB. NIAS BARAT"
        },
        {
            kode_bps: "1271",
            nama_bps: "SIBOLGA",
            kode_dagri: "12.73",
            nama_dagri: "KOTA SIBOLGA"
        },
        {
            kode_bps: "1272",
            nama_bps: "TANJUNG BALAI",
            kode_dagri: "12.74",
            nama_dagri: "KOTA TANJUNG BALAI"
        },
        {
            kode_bps: "1273",
            nama_bps: "PEMATANG SIANTAR",
            kode_dagri: "12.72",
            nama_dagri: "KOTA PEMATANGSIANTAR"
        },
        {
            kode_bps: "1274",
            nama_bps: "TEBING TINGGI",
            kode_dagri: "12.76",
            nama_dagri: "KOTA TEBING TINGGI"
        },
        {
            kode_bps: "1275",
            nama_bps: "MEDAN",
            kode_dagri: "12.71",
            nama_dagri: "KOTA MEDAN"
        },
        {
            kode_bps: "1276",
            nama_bps: "BINJAI",
            kode_dagri: "12.75",
            nama_dagri: "KOTA BINJAI"
        },
        {
            kode_bps: "1277",
            nama_bps: "PADANGSIDIMPUAN",
            kode_dagri: "12.77",
            nama_dagri: "KOTA PADANG SIDEMPUAN"
        },
        {
            kode_bps: "1278",
            nama_bps: "GUNUNGSITOLI",
            kode_dagri: "12.78",
            nama_dagri: "KOTA GUNUNGSITOLI"
        },
        {
            kode_bps: "1301",
            nama_bps: "KEPULAUAN MENTAWAI",
            kode_dagri: "13.09",
            nama_dagri: "KAB. KEPULAUAN MENTAWAI"
        },
        {
            kode_bps: "1302",
            nama_bps: "PESISIR SELATAN",
            kode_dagri: "13.01",
            nama_dagri: "KAB. PESISIR SELATAN"
        },
        {
            kode_bps: "1303",
            nama_bps: "SOLOK",
            kode_dagri: "13.02",
            nama_dagri: "KAB. SOLOK"
        },
        {
            kode_bps: "1304",
            nama_bps: "SIJUNJUNG",
            kode_dagri: "13.03",
            nama_dagri: "KAB. SIJUNJUNG"
        },
        {
            kode_bps: "1305",
            nama_bps: "TANAH DATAR",
            kode_dagri: "13.04",
            nama_dagri: "KAB. TANAH DATAR"
        },
        {
            kode_bps: "1306",
            nama_bps: "PADANG PARIAMAN",
            kode_dagri: "13.05",
            nama_dagri: "KAB. PADANG PARIAMAN"
        },
        {
            kode_bps: "1307",
            nama_bps: "AGAM",
            kode_dagri: "13.06",
            nama_dagri: "KAB. AGAM"
        },
        {
            kode_bps: "1308",
            nama_bps: "LIMA PULUH KOTA",
            kode_dagri: "13.07",
            nama_dagri: "KAB. LIMA PULUH KOTA"
        },
        {
            kode_bps: "1309",
            nama_bps: "PASAMAN",
            kode_dagri: "13.08",
            nama_dagri: "KAB. PASAMAN"
        },
        {
            kode_bps: "1310",
            nama_bps: "SOLOK SELATAN",
            kode_dagri: "13.11",
            nama_dagri: "KAB. SOLOK SELATAN"
        },
        {
            kode_bps: "1311",
            nama_bps: "DHARMASRAYA",
            kode_dagri: "13.10",
            nama_dagri: "KAB. DHARMASRAYA"
        },
        {
            kode_bps: "1312",
            nama_bps: "PASAMAN BARAT",
            kode_dagri: "13.12",
            nama_dagri: "KAB. PASAMAN BARAT"
        },
        {
            kode_bps: "1371",
            nama_bps: "PADANG",
            kode_dagri: "13.71",
            nama_dagri: "KOTA PADANG"
        },
        {
            kode_bps: "1372",
            nama_bps: "SOLOK",
            kode_dagri: "13.72",
            nama_dagri: "KOTA SOLOK"
        },
        {
            kode_bps: "1373",
            nama_bps: "SAWAH LUNTO",
            kode_dagri: "13.73",
            nama_dagri: "KOTA SAWAHLUNTO"
        },
        {
            kode_bps: "1374",
            nama_bps: "PADANG PANJANG",
            kode_dagri: "13.74",
            nama_dagri: "KOTA PADANG PANJANG"
        },
        {
            kode_bps: "1375",
            nama_bps: "BUKITTINGGI",
            kode_dagri: "13.75",
            nama_dagri: "KOTA BUKITTINGGI"
        },
        {
            kode_bps: "1376",
            nama_bps: "PAYAKUMBUH",
            kode_dagri: "13.76",
            nama_dagri: "KOTA PAYAKUMBUH"
        },
        {
            kode_bps: "1377",
            nama_bps: "PARIAMAN",
            kode_dagri: "13.77",
            nama_dagri: "KOTA PARIAMAN"
        },
        {
            kode_bps: "1401",
            nama_bps: "KUANTAN SINGINGI",
            kode_dagri: "14.09",
            nama_dagri: "KAB. KUANTAN SINGINGI"
        },
        {
            kode_bps: "1402",
            nama_bps: "INDRAGIRI HULU",
            kode_dagri: "14.02",
            nama_dagri: "KAB. INDRAGIRI HULU"
        },
        {
            kode_bps: "1403",
            nama_bps: "INDRAGIRI HILIR",
            kode_dagri: "14.04",
            nama_dagri: "KAB. INDRAGIRI HILIR"
        },
        {
            kode_bps: "1404",
            nama_bps: "PELALAWAN",
            kode_dagri: "14.05",
            nama_dagri: "KAB.  PELALAWAN"
        },
        {
            kode_bps: "1405",
            nama_bps: "S I A K",
            kode_dagri: "14.08",
            nama_dagri: "KAB. SIAK"
        },
        {
            kode_bps: "1406",
            nama_bps: "KAMPAR",
            kode_dagri: "14.01",
            nama_dagri: "KAB. KAMPAR"
        },
        {
            kode_bps: "1407",
            nama_bps: "ROKAN HULU",
            kode_dagri: "14.06",
            nama_dagri: "KAB.  ROKAN HULU"
        },
        {
            kode_bps: "1408",
            nama_bps: "BENGKALIS",
            kode_dagri: "14.03",
            nama_dagri: "KAB. BENGKALIS"
        },
        {
            kode_bps: "1409",
            nama_bps: "ROKAN HILIR",
            kode_dagri: "14.07",
            nama_dagri: "KAB.  ROKAN HILIR"
        },
        {
            kode_bps: "1410",
            nama_bps: "KEPULAUAN MERANTI",
            kode_dagri: "14.10",
            nama_dagri: "KAB. KEPULAUAN MERANTI"
        },
        {
            kode_bps: "1471",
            nama_bps: "PEKANBARU",
            kode_dagri: "14.71",
            nama_dagri: "KOTA PEKANBARU"
        },
        {
            kode_bps: "1473",
            nama_bps: "D U M A I",
            kode_dagri: "14.72",
            nama_dagri: "KOTA DUMAI"
        },
        {
            kode_bps: "1501",
            nama_bps: "KERINCI",
            kode_dagri: "15.01",
            nama_dagri: "KAB.  KERINCI"
        },
        {
            kode_bps: "1502",
            nama_bps: "MERANGIN",
            kode_dagri: "15.02",
            nama_dagri: "KAB.  MERANGIN"
        },
        {
            kode_bps: "1503",
            nama_bps: "SAROLANGUN",
            kode_dagri: "15.03",
            nama_dagri: "KAB. SAROLANGUN"
        },
        {
            kode_bps: "1504",
            nama_bps: "BATANG HARI",
            kode_dagri: "15.04",
            nama_dagri: "KAB. BATANGHARI"
        },
        {
            kode_bps: "1505",
            nama_bps: "MUARO JAMBI",
            kode_dagri: "15.05",
            nama_dagri: "KAB.  MUARO JAMBI"
        },
        {
            kode_bps: "1506",
            nama_bps: "TANJUNG JABUNG TIMUR",
            kode_dagri: "15.07",
            nama_dagri: "KAB. TANJUNG JABUNG TIMUR"
        },
        {
            kode_bps: "1507",
            nama_bps: "TANJUNG JABUNG BARAT",
            kode_dagri: "15.06",
            nama_dagri: "KAB. TANJUNG JABUNG BARAT"
        },
        {
            kode_bps: "1508",
            nama_bps: "TEBO",
            kode_dagri: "15.09",
            nama_dagri: "KAB. TEBO"
        },
        {
            kode_bps: "1509",
            nama_bps: "BUNGO",
            kode_dagri: "15.08",
            nama_dagri: "KAB. BUNGO"
        },
        {
            kode_bps: "1571",
            nama_bps: "JAMBI",
            kode_dagri: "15.71",
            nama_dagri: "KOTA JAMBI"
        },
        {
            kode_bps: "1572",
            nama_bps: "SUNGAI PENUH",
            kode_dagri: "15.72",
            nama_dagri: "KOTA SUNGAI PENUH"
        },
        {
            kode_bps: "1601",
            nama_bps: "OGAN KOMERING ULU",
            kode_dagri: "16.01",
            nama_dagri: "KAB. OGAN KOMERING ULU"
        },
        {
            kode_bps: "1602",
            nama_bps: "OGAN KOMERING ILIR",
            kode_dagri: "16.02",
            nama_dagri: "KAB. OGAN KOMERING ILIR"
        },
        {
            kode_bps: "1603",
            nama_bps: "MUARA ENIM",
            kode_dagri: "16.03",
            nama_dagri: "KAB. MUARA ENIM"
        },
        {
            kode_bps: "1604",
            nama_bps: "LAHAT",
            kode_dagri: "16.04",
            nama_dagri: "KAB. LAHAT"
        },
        {
            kode_bps: "1605",
            nama_bps: "MUSI RAWAS",
            kode_dagri: "16.05",
            nama_dagri: "KAB. MUSI RAWAS"
        },
        {
            kode_bps: "1606",
            nama_bps: "MUSI BANYUASIN",
            kode_dagri: "16.06",
            nama_dagri: "KAB. MUSI BANYUASIN"
        },
        {
            kode_bps: "1607",
            nama_bps: "BANYU ASIN",
            kode_dagri: "16.07",
            nama_dagri: "KAB. BANYUASIN"
        },
        {
            kode_bps: "1608",
            nama_bps: "OGAN KOMERING ULU SELATAN",
            kode_dagri: "16.09",
            nama_dagri: "KAB. OGAN KOMERING ULU"
        },
        {
            kode_bps: "1609",
            nama_bps: "OGAN KOMERING ULU TIMUR",
            kode_dagri: "16.08",
            nama_dagri: "KAB. OGAN KOMERING ULU"
        },
        {
            kode_bps: "1610",
            nama_bps: "OGAN ILIR",
            kode_dagri: "16.10",
            nama_dagri: "KAB. OGAN ILIR"
        },
        {
            kode_bps: "1611",
            nama_bps: "EMPAT LAWANG",
            kode_dagri: "16.11",
            nama_dagri: "KAB. EMPAT LAWANG"
        },
        {
            kode_bps: "1612",
            nama_bps: "PENUKAL ABAB LEMATANG ILIR",
            kode_dagri: "16.12",
            nama_dagri: "KAB. PENUKAL ABAB LEMATANG"
        },
        {
            kode_bps: "1613",
            nama_bps: "MUSI RAWAS UTARA",
            kode_dagri: "16.13",
            nama_dagri: "KAB. MUSI RAWAS UTARA"
        },
        {
            kode_bps: "1671",
            nama_bps: "PALEMBANG",
            kode_dagri: "16.71",
            nama_dagri: "KOTA PALEMBANG"
        },
        {
            kode_bps: "1672",
            nama_bps: "PRABUMULIH",
            kode_dagri: "16.74",
            nama_dagri: "KOTA PRABUMULIH"
        },
        {
            kode_bps: "1673",
            nama_bps: "PAGAR ALAM",
            kode_dagri: "16.72",
            nama_dagri: "KOTA PAGAR ALAM"
        },
        {
            kode_bps: "1674",
            nama_bps: "LUBUKLINGGAU",
            kode_dagri: "16.73",
            nama_dagri: "KOTA LUBUK LINGGAU"
        },
        {
            kode_bps: "1701",
            nama_bps: "BENGKULU SELATAN",
            kode_dagri: "17.01",
            nama_dagri: "KAB. BENGKULU SELATAN"
        },
        {
            kode_bps: "1702",
            nama_bps: "REJANG LEBONG",
            kode_dagri: "17.02",
            nama_dagri: "KAB. REJANG LEBONG"
        },
        {
            kode_bps: "1703",
            nama_bps: "BENGKULU UTARA",
            kode_dagri: "17.03",
            nama_dagri: "KAB. BENGKULU UTARA"
        },
        {
            kode_bps: "1704",
            nama_bps: "KAUR",
            kode_dagri: "17.04",
            nama_dagri: "KAB. KAUR"
        },
        {
            kode_bps: "1705",
            nama_bps: "SELUMA",
            kode_dagri: "17.05",
            nama_dagri: "KAB. SELUMA"
        },
        {
            kode_bps: "1706",
            nama_bps: "MUKOMUKO",
            kode_dagri: "17.06",
            nama_dagri: "KAB. MUKO MUKO"
        },
        {
            kode_bps: "1707",
            nama_bps: "LEBONG",
            kode_dagri: "17.07",
            nama_dagri: "KAB. LEBONG"
        },
        {
            kode_bps: "1708",
            nama_bps: "KEPAHIANG",
            kode_dagri: "17.08",
            nama_dagri: "KAB. KEPAHIANG"
        },
        {
            kode_bps: "1709",
            nama_bps: "BENGKULU TENGAH",
            kode_dagri: "17.09",
            nama_dagri: "KAB. BENGKULU TENGAH"
        },
        {
            kode_bps: "1771",
            nama_bps: "BENGKULU",
            kode_dagri: "17.71",
            nama_dagri: "KOTA BENGKULU"
        },
        {
            kode_bps: "1801",
            nama_bps: "LAMPUNG BARAT",
            kode_dagri: "18.04",
            nama_dagri: "KAB. LAMPUNG BARAT"
        },
        {
            kode_bps: "1802",
            nama_bps: "TANGGAMUS",
            kode_dagri: "18.06",
            nama_dagri: "KAB. TANGGAMUS"
        },
        {
            kode_bps: "1803",
            nama_bps: "LAMPUNG SELATAN",
            kode_dagri: "18.01",
            nama_dagri: "KAB. LAMPUNG SELATAN"
        },
        {
            kode_bps: "1804",
            nama_bps: "LAMPUNG TIMUR",
            kode_dagri: "18.07",
            nama_dagri: "KAB. LAMPUNG TIMUR"
        },
        {
            kode_bps: "1805",
            nama_bps: "LAMPUNG TENGAH",
            kode_dagri: "18.02",
            nama_dagri: "KAB. LAMPUNG TENGAH"
        },
        {
            kode_bps: "1806",
            nama_bps: "LAMPUNG UTARA",
            kode_dagri: "18.03",
            nama_dagri: "KAB. LAMPUNG UTARA"
        },
        {
            kode_bps: "1807",
            nama_bps: "WAY KANAN",
            kode_dagri: "18.08",
            nama_dagri: "KAB. WAY KANAN"
        },
        {
            kode_bps: "1808",
            nama_bps: "TULANGBAWANG",
            kode_dagri: "18.05",
            nama_dagri: "KAB. TULANG BAWANG"
        },
        {
            kode_bps: "1809",
            nama_bps: "PESAWARAN",
            kode_dagri: "18.09",
            nama_dagri: "KAB. PESAWARAN"
        },
        {
            kode_bps: "1810",
            nama_bps: "PRINGSEWU",
            kode_dagri: "18.10",
            nama_dagri: "KAB. PRINGSEWU"
        },
        {
            kode_bps: "1811",
            nama_bps: "MESUJI",
            kode_dagri: "18.11",
            nama_dagri: "KAB. MESUJI"
        },
        {
            kode_bps: "1812",
            nama_bps: "TULANG BAWANG BARAT",
            kode_dagri: "18.12",
            nama_dagri: "KAB. TULANG BAWANG BARAT"
        },
        {
            kode_bps: "1813",
            nama_bps: "PESISIR BARAT",
            kode_dagri: "18.13",
            nama_dagri: "KAB. PESISIR BARAT"
        },
        {
            kode_bps: "1871",
            nama_bps: "BANDAR LAMPUNG",
            kode_dagri: "18.71",
            nama_dagri: "KOTA BANDAR LAMPUNG"
        },
        {
            kode_bps: "1872",
            nama_bps: "METRO",
            kode_dagri: "18.72",
            nama_dagri: "KOTA METRO"
        },
        {
            kode_bps: "1901",
            nama_bps: "BANGKA",
            kode_dagri: "19.01",
            nama_dagri: "KAB. BANGKA"
        },
        {
            kode_bps: "1902",
            nama_bps: "BELITUNG",
            kode_dagri: "19.02",
            nama_dagri: "KAB. BELITUNG"
        },
        {
            kode_bps: "1903",
            nama_bps: "BANGKA BARAT",
            kode_dagri: "19.05",
            nama_dagri: "KAB. BANGKA BARAT"
        },
        {
            kode_bps: "1904",
            nama_bps: "BANGKA TENGAH",
            kode_dagri: "19.04",
            nama_dagri: "KAB. BANGKA TENGAH"
        },
        {
            kode_bps: "1905",
            nama_bps: "BANGKA SELATAN",
            kode_dagri: "19.03",
            nama_dagri: "KAB. BANGKA SELATAN"
        },
        {
            kode_bps: "1906",
            nama_bps: "BELITUNG TIMUR",
            kode_dagri: "19.06",
            nama_dagri: "KAB. BELITUNG TIMUR"
        },
        {
            kode_bps: "1971",
            nama_bps: "PANGKALPINANG",
            kode_dagri: "19.71",
            nama_dagri: "KOTA PANGKAL PINANG"
        },
        {
            kode_bps: "2101",
            nama_bps: "KARIMUN",
            kode_dagri: "21.02",
            nama_dagri: "KAB. KARIMUN"
        },
        {
            kode_bps: "2102",
            nama_bps: "BINTAN",
            kode_dagri: "21.01",
            nama_dagri: "KAB. BINTAN"
        },
        {
            kode_bps: "2103",
            nama_bps: "NATUNA",
            kode_dagri: "21.03",
            nama_dagri: "KAB. NATUNA"
        },
        {
            kode_bps: "2104",
            nama_bps: "LINGGA",
            kode_dagri: "21.04",
            nama_dagri: "KAB. LINGGA"
        },
        {
            kode_bps: "2105",
            nama_bps: "KEPULAUAN ANAMBAS",
            kode_dagri: "21.05",
            nama_dagri: "KAB. KEPULAUAN ANAMBAS"
        },
        {
            kode_bps: "2171",
            nama_bps: "B A T A M",
            kode_dagri: "21.71",
            nama_dagri: "KOTA BATAM"
        },
        {
            kode_bps: "2172",
            nama_bps: "TANJUNG PINANG",
            kode_dagri: "21.72",
            nama_dagri: "KOTA TANJUNG PINANG"
        },
        {
            kode_bps: "3101",
            nama_bps: "KEPULAUAN SERIBU",
            kode_dagri: "31.01",
            nama_dagri: "KAB. ADM. KEP. SERIBU"
        },
        {
            kode_bps: "3171",
            nama_bps: "JAKARTA SELATAN",
            kode_dagri: "31.74",
            nama_dagri: "KOTA ADM. JAKARTA SELATAN"
        },
        {
            kode_bps: "3172",
            nama_bps: "JAKARTA TIMUR",
            kode_dagri: "31.75",
            nama_dagri: "KOTA ADM. JAKARTA TIMUR"
        },
        {
            kode_bps: "3173",
            nama_bps: "JAKARTA PUSAT",
            kode_dagri: "31.71",
            nama_dagri: "KOTA ADM. JAKARTA PUSAT"
        },
        {
            kode_bps: "3174",
            nama_bps: "JAKARTA BARAT",
            kode_dagri: "31.73",
            nama_dagri: "KOTA ADM. JAKARTA BARAT"
        },
        {
            kode_bps: "3175",
            nama_bps: "JAKARTA UTARA",
            kode_dagri: "31.72",
            nama_dagri: "KOTA ADM. JAKARTA UTARA"
        },
        {
            kode_bps: "3201",
            nama_bps: "BOGOR",
            kode_dagri: "32.01",
            nama_dagri: "KAB. BOGOR"
        },
        {
            kode_bps: "3202",
            nama_bps: "SUKABUMI",
            kode_dagri: "32.02",
            nama_dagri: "KAB. SUKABUMI"
        },
        {
            kode_bps: "3203",
            nama_bps: "CIANJUR",
            kode_dagri: "32.03",
            nama_dagri: "KAB. CIANJUR"
        },
        {
            kode_bps: "3204",
            nama_bps: "BANDUNG",
            kode_dagri: "32.04",
            nama_dagri: "KAB. BANDUNG"
        },
        {
            kode_bps: "3205",
            nama_bps: "GARUT",
            kode_dagri: "32.05",
            nama_dagri: "KAB. GARUT"
        },
        {
            kode_bps: "3206",
            nama_bps: "TASIKMALAYA",
            kode_dagri: "32.06",
            nama_dagri: "KAB. TASIKMALAYA"
        },
        {
            kode_bps: "3207",
            nama_bps: "CIAMIS",
            kode_dagri: "32.07",
            nama_dagri: "KAB. CIAMIS"
        },
        {
            kode_bps: "3208",
            nama_bps: "KUNINGAN",
            kode_dagri: "32.08",
            nama_dagri: "KAB. KUNINGAN"
        },
        {
            kode_bps: "3209",
            nama_bps: "CIREBON",
            kode_dagri: "32.09",
            nama_dagri: "KAB. CIREBON"
        },
        {
            kode_bps: "3210",
            nama_bps: "MAJALENGKA",
            kode_dagri: "32.10",
            nama_dagri: "KAB. MAJALENGKA"
        },
        {
            kode_bps: "3211",
            nama_bps: "SUMEDANG",
            kode_dagri: "32.11",
            nama_dagri: "KAB. SUMEDANG"
        },
        {
            kode_bps: "3212",
            nama_bps: "INDRAMAYU",
            kode_dagri: "32.12",
            nama_dagri: "KAB. INDRAMAYU"
        },
        {
            kode_bps: "3213",
            nama_bps: "SUBANG",
            kode_dagri: "32.13",
            nama_dagri: "KAB. SUBANG"
        },
        {
            kode_bps: "3214",
            nama_bps: "PURWAKARTA",
            kode_dagri: "32.14",
            nama_dagri: "KAB. PURWAKARTA"
        },
        {
            kode_bps: "3215",
            nama_bps: "KARAWANG",
            kode_dagri: "32.15",
            nama_dagri: "KAB. KARAWANG"
        },
        {
            kode_bps: "3216",
            nama_bps: "BEKASI",
            kode_dagri: "32.16",
            nama_dagri: "KAB. BEKASI"
        },
        {
            kode_bps: "3217",
            nama_bps: "BANDUNG BARAT",
            kode_dagri: "32.17",
            nama_dagri: "KAB. BANDUNG BARAT"
        },
        {
            kode_bps: "3218",
            nama_bps: "PANGANDARAN",
            kode_dagri: "32.18",
            nama_dagri: "KAB. PANGANDARAN"
        },
        {
            kode_bps: "3271",
            nama_bps: "BOGOR",
            kode_dagri: "32.71",
            nama_dagri: "KOTA BOGOR"
        },
        {
            kode_bps: "3272",
            nama_bps: "SUKABUMI",
            kode_dagri: "32.72",
            nama_dagri: "KOTA SUKABUMI"
        },
        {
            kode_bps: "3273",
            nama_bps: "BANDUNG",
            kode_dagri: "32.73",
            nama_dagri: "KOTA BANDUNG"
        },
        {
            kode_bps: "3274",
            nama_bps: "CIREBON",
            kode_dagri: "32.74",
            nama_dagri: "KOTA CIREBON"
        },
        {
            kode_bps: "3275",
            nama_bps: "BEKASI",
            kode_dagri: "32.75",
            nama_dagri: "KOTA BEKASI"
        },
        {
            kode_bps: "3276",
            nama_bps: "DEPOK",
            kode_dagri: "32.76",
            nama_dagri: "KOTA DEPOK"
        },
        {
            kode_bps: "3277",
            nama_bps: "CIMAHI",
            kode_dagri: "32.77",
            nama_dagri: "KOTA CIMAHI"
        },
        {
            kode_bps: "3278",
            nama_bps: "TASIKMALAYA",
            kode_dagri: "32.78",
            nama_dagri: "KOTA TASIKMALAYA"
        },
        {
            kode_bps: "3279",
            nama_bps: "BANJAR",
            kode_dagri: "32.79",
            nama_dagri: "KOTA BANJAR"
        },
        {
            kode_bps: "3301",
            nama_bps: "CILACAP",
            kode_dagri: "33.01",
            nama_dagri: "KAB. CILACAP"
        },
        {
            kode_bps: "3302",
            nama_bps: "BANYUMAS",
            kode_dagri: "33.02",
            nama_dagri: "KAB. BANYUMAS"
        },
        {
            kode_bps: "3303",
            nama_bps: "PURBALINGGA",
            kode_dagri: "33.03",
            nama_dagri: "KAB. PURBALINGGA"
        },
        {
            kode_bps: "3304",
            nama_bps: "BANJARNEGARA",
            kode_dagri: "33.04",
            nama_dagri: "KAB. BANJARNEGARA"
        },
        {
            kode_bps: "3305",
            nama_bps: "KEBUMEN",
            kode_dagri: "33.05",
            nama_dagri: "KAB. KEBUMEN"
        },
        {
            kode_bps: "3306",
            nama_bps: "PURWOREJO",
            kode_dagri: "33.06",
            nama_dagri: "KAB. PURWOREJO"
        },
        {
            kode_bps: "3307",
            nama_bps: "WONOSOBO",
            kode_dagri: "33.07",
            nama_dagri: "KAB. WONOSOBO"
        },
        {
            kode_bps: "3308",
            nama_bps: "MAGELANG",
            kode_dagri: "33.08",
            nama_dagri: "KAB. MAGELANG"
        },
        {
            kode_bps: "3309",
            nama_bps: "BOYOLALI",
            kode_dagri: "33.09",
            nama_dagri: "KAB. BOYOLALI"
        },
        {
            kode_bps: "3310",
            nama_bps: "KLATEN",
            kode_dagri: "33.10",
            nama_dagri: "KAB. KLATEN"
        },
        {
            kode_bps: "3311",
            nama_bps: "SUKOHARJO",
            kode_dagri: "33.11",
            nama_dagri: "KAB. SUKOHARJO"
        },
        {
            kode_bps: "3312",
            nama_bps: "WONOGIRI",
            kode_dagri: "33.12",
            nama_dagri: "KAB. WONOGIRI"
        },
        {
            kode_bps: "3313",
            nama_bps: "KARANGANYAR",
            kode_dagri: "33.13",
            nama_dagri: "KAB. KARANGANYAR"
        },
        {
            kode_bps: "3314",
            nama_bps: "SRAGEN",
            kode_dagri: "33.14",
            nama_dagri: "KAB. SRAGEN"
        },
        {
            kode_bps: "3315",
            nama_bps: "GROBOGAN",
            kode_dagri: "33.15",
            nama_dagri: "KAB. GROBOGAN"
        },
        {
            kode_bps: "3316",
            nama_bps: "BLORA",
            kode_dagri: "33.16",
            nama_dagri: "KAB. BLORA"
        },
        {
            kode_bps: "3317",
            nama_bps: "REMBANG",
            kode_dagri: "33.17",
            nama_dagri: "KAB. REMBANG"
        },
        {
            kode_bps: "3318",
            nama_bps: "PATI",
            kode_dagri: "33.18",
            nama_dagri: "KAB. PATI"
        },
        {
            kode_bps: "3319",
            nama_bps: "KUDUS",
            kode_dagri: "33.19",
            nama_dagri: "KAB. KUDUS"
        },
        {
            kode_bps: "3320",
            nama_bps: "JEPARA",
            kode_dagri: "33.20",
            nama_dagri: "KAB. JEPARA"
        },
        {
            kode_bps: "3321",
            nama_bps: "DEMAK",
            kode_dagri: "33.21",
            nama_dagri: "KAB. DEMAK"
        },
        {
            kode_bps: "3322",
            nama_bps: "SEMARANG",
            kode_dagri: "33.22",
            nama_dagri: "KAB. SEMARANG"
        },
        {
            kode_bps: "3323",
            nama_bps: "TEMANGGUNG",
            kode_dagri: "33.23",
            nama_dagri: "KAB. TEMANGGUNG"
        },
        {
            kode_bps: "3324",
            nama_bps: "KENDAL",
            kode_dagri: "33.24",
            nama_dagri: "KAB. KENDAL"
        },
        {
            kode_bps: "3325",
            nama_bps: "BATANG",
            kode_dagri: "33.25",
            nama_dagri: "KAB. BATANG"
        },
        {
            kode_bps: "3326",
            nama_bps: "PEKALONGAN",
            kode_dagri: "33.26",
            nama_dagri: "KAB. PEKALONGAN"
        },
        {
            kode_bps: "3327",
            nama_bps: "PEMALANG",
            kode_dagri: "33.27",
            nama_dagri: "KAB. PEMALANG"
        },
        {
            kode_bps: "3328",
            nama_bps: "TEGAL",
            kode_dagri: "33.28",
            nama_dagri: "KAB. TEGAL"
        },
        {
            kode_bps: "3329",
            nama_bps: "BREBES",
            kode_dagri: "33.29",
            nama_dagri: "KAB. BREBES"
        },
        {
            kode_bps: "3371",
            nama_bps: "MAGELANG",
            kode_dagri: "33.71",
            nama_dagri: "KOTA MAGELANG"
        },
        {
            kode_bps: "3372",
            nama_bps: "SURAKARTA",
            kode_dagri: "33.72",
            nama_dagri: "KOTA SURAKARTA"
        },
        {
            kode_bps: "3373",
            nama_bps: "SALATIGA",
            kode_dagri: "33.73",
            nama_dagri: "KOTA SALATIGA"
        },
        {
            kode_bps: "3374",
            nama_bps: "SEMARANG",
            kode_dagri: "33.74",
            nama_dagri: "KOTA SEMARANG"
        },
        {
            kode_bps: "3375",
            nama_bps: "PEKALONGAN",
            kode_dagri: "33.75",
            nama_dagri: "KOTA PEKALONGAN"
        },
        {
            kode_bps: "3376",
            nama_bps: "TEGAL",
            kode_dagri: "33.76",
            nama_dagri: "KOTA TEGAL"
        },
        {
            kode_bps: "3401",
            nama_bps: "KULON PROGO",
            kode_dagri: "34.01",
            nama_dagri: "KAB. KULON PROGO"
        },
        {
            kode_bps: "3402",
            nama_bps: "BANTUL",
            kode_dagri: "34.02",
            nama_dagri: "KAB. BANTUL"
        },
        {
            kode_bps: "3403",
            nama_bps: "GUNUNGKIDUL",
            kode_dagri: "34.03",
            nama_dagri: "KAB. GUNUNGKIDUL"
        },
        {
            kode_bps: "3404",
            nama_bps: "SLEMAN",
            kode_dagri: "34.04",
            nama_dagri: "KAB. SLEMAN"
        },
        {
            kode_bps: "3471",
            nama_bps: "YOGYAKARTA",
            kode_dagri: "34.71",
            nama_dagri: "KOTA YOGYAKARTA"
        },
        {
            kode_bps: "3501",
            nama_bps: "PACITAN",
            kode_dagri: "35.01",
            nama_dagri: "KAB. PACITAN"
        },
        {
            kode_bps: "3502",
            nama_bps: "PONOROGO",
            kode_dagri: "35.02",
            nama_dagri: "KAB. PONOROGO"
        },
        {
            kode_bps: "3503",
            nama_bps: "TRENGGALEK",
            kode_dagri: "35.03",
            nama_dagri: "KAB. TRENGGALEK"
        },
        {
            kode_bps: "3504",
            nama_bps: "TULUNGAGUNG",
            kode_dagri: "35.04",
            nama_dagri: "KAB. TULUNGAGUNG"
        },
        {
            kode_bps: "3505",
            nama_bps: "BLITAR",
            kode_dagri: "35.05",
            nama_dagri: "KAB. BLITAR"
        },
        {
            kode_bps: "3506",
            nama_bps: "KEDIRI",
            kode_dagri: "35.06",
            nama_dagri: "KAB. KEDIRI"
        },
        {
            kode_bps: "3507",
            nama_bps: "MALANG",
            kode_dagri: "35.07",
            nama_dagri: "KAB. MALANG"
        },
        {
            kode_bps: "3508",
            nama_bps: "LUMAJANG",
            kode_dagri: "35.08",
            nama_dagri: "KAB. LUMAJANG"
        },
        {
            kode_bps: "3509",
            nama_bps: "JEMBER",
            kode_dagri: "35.09",
            nama_dagri: "KAB. JEMBER"
        },
        {
            kode_bps: "3510",
            nama_bps: "BANYUWANGI",
            kode_dagri: "35.10",
            nama_dagri: "KAB. BANYUWANGI"
        },
        {
            kode_bps: "3511",
            nama_bps: "BONDOWOSO",
            kode_dagri: "35.11",
            nama_dagri: "KAB. BONDOWOSO"
        },
        {
            kode_bps: "3512",
            nama_bps: "SITUBONDO",
            kode_dagri: "35.12",
            nama_dagri: "KAB. SITUBONDO"
        },
        {
            kode_bps: "3513",
            nama_bps: "PROBOLINGGO",
            kode_dagri: "35.13",
            nama_dagri: "KAB. PROBOLINGGO"
        },
        {
            kode_bps: "3514",
            nama_bps: "PASURUAN",
            kode_dagri: "35.14",
            nama_dagri: "KAB. PASURUAN"
        },
        {
            kode_bps: "3515",
            nama_bps: "SIDOARJO",
            kode_dagri: "35.15",
            nama_dagri: "KAB. SIDOARJO"
        },
        {
            kode_bps: "3516",
            nama_bps: "MOJOKERTO",
            kode_dagri: "35.16",
            nama_dagri: "KAB. MOJOKERTO"
        },
        {
            kode_bps: "3517",
            nama_bps: "JOMBANG",
            kode_dagri: "35.17",
            nama_dagri: "KAB. JOMBANG"
        },
        {
            kode_bps: "3518",
            nama_bps: "NGANJUK",
            kode_dagri: "35.18",
            nama_dagri: "KAB. NGANJUK"
        },
        {
            kode_bps: "3519",
            nama_bps: "MADIUN",
            kode_dagri: "35.19",
            nama_dagri: "KAB. MADIUN"
        },
        {
            kode_bps: "3520",
            nama_bps: "MAGETAN",
            kode_dagri: "35.20",
            nama_dagri: "KAB. MAGETAN"
        },
        {
            kode_bps: "3521",
            nama_bps: "NGAWI",
            kode_dagri: "35.21",
            nama_dagri: "KAB. NGAWI"
        },
        {
            kode_bps: "3522",
            nama_bps: "BOJONEGORO",
            kode_dagri: "35.22",
            nama_dagri: "KAB. BOJONEGORO"
        },
        {
            kode_bps: "3523",
            nama_bps: "TUBAN",
            kode_dagri: "35.23",
            nama_dagri: "KAB. TUBAN"
        },
        {
            kode_bps: "3524",
            nama_bps: "LAMONGAN",
            kode_dagri: "35.24",
            nama_dagri: "KAB. LAMONGAN"
        },
        {
            kode_bps: "3525",
            nama_bps: "GRESIK",
            kode_dagri: "35.25",
            nama_dagri: "KAB. GRESIK"
        },
        {
            kode_bps: "3526",
            nama_bps: "BANGKALAN",
            kode_dagri: "35.26",
            nama_dagri: "KAB. BANGKALAN"
        },
        {
            kode_bps: "3527",
            nama_bps: "SAMPANG",
            kode_dagri: "35.27",
            nama_dagri: "KAB. SAMPANG"
        },
        {
            kode_bps: "3528",
            nama_bps: "PAMEKASAN",
            kode_dagri: "35.28",
            nama_dagri: "KAB. PAMEKASAN"
        },
        {
            kode_bps: "3529",
            nama_bps: "SUMENEP",
            kode_dagri: "35.29",
            nama_dagri: "KAB. SUMENEP"
        },
        {
            kode_bps: "3571",
            nama_bps: "KEDIRI",
            kode_dagri: "35.71",
            nama_dagri: "KOTA KEDIRI"
        },
        {
            kode_bps: "3572",
            nama_bps: "BLITAR",
            kode_dagri: "35.72",
            nama_dagri: "KOTA BLITAR"
        },
        {
            kode_bps: "3573",
            nama_bps: "MALANG",
            kode_dagri: "35.73",
            nama_dagri: "KOTA MALANG"
        },
        {
            kode_bps: "3574",
            nama_bps: "PROBOLINGGO",
            kode_dagri: "35.74",
            nama_dagri: "KOTA PROBOLINGGO"
        },
        {
            kode_bps: "3575",
            nama_bps: "PASURUAN",
            kode_dagri: "35.75",
            nama_dagri: "KOTA PASURUAN"
        },
        {
            kode_bps: "3576",
            nama_bps: "MOJOKERTO",
            kode_dagri: "35.76",
            nama_dagri: "KOTA MOJOKERTO"
        },
        {
            kode_bps: "3577",
            nama_bps: "MADIUN",
            kode_dagri: "35.77",
            nama_dagri: "KOTA MADIUN"
        },
        {
            kode_bps: "3578",
            nama_bps: "SURABAYA",
            kode_dagri: "35.78",
            nama_dagri: "KOTA SURABAYA"
        },
        {
            kode_bps: "3579",
            nama_bps: "BATU",
            kode_dagri: "35.79",
            nama_dagri: "KOTA BATU"
        },
        {
            kode_bps: "3601",
            nama_bps: "PANDEGLANG",
            kode_dagri: "36.01",
            nama_dagri: "KAB. PANDEGLANG"
        },
        {
            kode_bps: "3602",
            nama_bps: "LEBAK",
            kode_dagri: "36.02",
            nama_dagri: "KAB. LEBAK"
        },
        {
            kode_bps: "3603",
            nama_bps: "TANGERANG",
            kode_dagri: "36.03",
            nama_dagri: "KAB. TANGERANG"
        },
        {
            kode_bps: "3604",
            nama_bps: "SERANG",
            kode_dagri: "36.04",
            nama_dagri: "KAB. SERANG"
        },
        {
            kode_bps: "3671",
            nama_bps: "TANGERANG",
            kode_dagri: "36.71",
            nama_dagri: "KOTA TANGERANG"
        },
        {
            kode_bps: "3672",
            nama_bps: "CILEGON",
            kode_dagri: "36.72",
            nama_dagri: "KOTA CILEGON"
        },
        {
            kode_bps: "3673",
            nama_bps: "SERANG",
            kode_dagri: "36.73",
            nama_dagri: "KOTA SERANG"
        },
        {
            kode_bps: "3674",
            nama_bps: "TANGERANG SELATAN",
            kode_dagri: "36.74",
            nama_dagri: "KOTA TANGERANG SELATAN"
        },
        {
            kode_bps: "5101",
            nama_bps: "JEMBRANA",
            kode_dagri: "51.01",
            nama_dagri: "KAB. JEMBRANA"
        },
        {
            kode_bps: "5102",
            nama_bps: "TABANAN",
            kode_dagri: "51.02",
            nama_dagri: "KAB. TABANAN"
        },
        {
            kode_bps: "5103",
            nama_bps: "BADUNG",
            kode_dagri: "51.03",
            nama_dagri: "KAB. BADUNG"
        },
        {
            kode_bps: "5104",
            nama_bps: "GIANYAR",
            kode_dagri: "51.04",
            nama_dagri: "KAB. GIANYAR"
        },
        {
            kode_bps: "5105",
            nama_bps: "KLUNGKUNG",
            kode_dagri: "51.05",
            nama_dagri: "KAB. KLUNGKUNG"
        },
        {
            kode_bps: "5106",
            nama_bps: "BANGLI",
            kode_dagri: "51.06",
            nama_dagri: "KAB. BANGLI"
        },
        {
            kode_bps: "5107",
            nama_bps: "KARANGASEM",
            kode_dagri: "51.07",
            nama_dagri: "KAB. KARANGASEM"
        },
        {
            kode_bps: "5108",
            nama_bps: "BULELENG",
            kode_dagri: "51.08",
            nama_dagri: "KAB. BULELENG"
        },
        {
            kode_bps: "5171",
            nama_bps: "DENPASAR",
            kode_dagri: "51.71",
            nama_dagri: "KOTA DENPASAR"
        },
        {
            kode_bps: "5201",
            nama_bps: "LOMBOK BARAT",
            kode_dagri: "52.01",
            nama_dagri: "KAB. LOMBOK BARAT"
        },
        {
            kode_bps: "5202",
            nama_bps: "LOMBOK TENGAH",
            kode_dagri: "52.02",
            nama_dagri: "KAB. LOMBOK TENGAH"
        },
        {
            kode_bps: "5203",
            nama_bps: "LOMBOK TIMUR",
            kode_dagri: "52.03",
            nama_dagri: "KAB. LOMBOK TIMUR"
        },
        {
            kode_bps: "5204",
            nama_bps: "SUMBAWA",
            kode_dagri: "52.04",
            nama_dagri: "KAB. SUMBAWA"
        },
        {
            kode_bps: "5205",
            nama_bps: "DOMPU",
            kode_dagri: "52.05",
            nama_dagri: "KAB. DOMPU"
        },
        {
            kode_bps: "5206",
            nama_bps: "BIMA",
            kode_dagri: "52.06",
            nama_dagri: "KAB. BIMA"
        },
        {
            kode_bps: "5207",
            nama_bps: "SUMBAWA BARAT",
            kode_dagri: "52.07",
            nama_dagri: "KAB. SUMBAWA BARAT"
        },
        {
            kode_bps: "5208",
            nama_bps: "LOMBOK UTARA",
            kode_dagri: "52.08",
            nama_dagri: "KAB. LOMBOK UTARA"
        },
        {
            kode_bps: "5271",
            nama_bps: "MATARAM",
            kode_dagri: "52.71",
            nama_dagri: "KOTA MATARAM"
        },
        {
            kode_bps: "5272",
            nama_bps: "BIMA",
            kode_dagri: "52.72",
            nama_dagri: "KOTA BIMA"
        },
        {
            kode_bps: "5301",
            nama_bps: "SUMBA BARAT",
            kode_dagri: "53.12",
            nama_dagri: "KAB. SUMBA BARAT"
        },
        {
            kode_bps: "5302",
            nama_bps: "SUMBA TIMUR",
            kode_dagri: "53.11",
            nama_dagri: "KAB. SUMBA TIMUR"
        },
        {
            kode_bps: "5303",
            nama_bps: "KUPANG",
            kode_dagri: "53.01",
            nama_dagri: "KAB. KUPANG"
        },
        {
            kode_bps: "5304",
            nama_bps: "TIMOR TENGAH SELATAN",
            kode_dagri: "53.02",
            nama_dagri: "KAB TIMOR TENGAH SELATAN"
        },
        {
            kode_bps: "5305",
            nama_bps: "TIMOR TENGAH UTARA",
            kode_dagri: "53.03",
            nama_dagri: "KAB. TIMOR TENGAH UTARA"
        },
        {
            kode_bps: "5306",
            nama_bps: "BELU",
            kode_dagri: "53.04",
            nama_dagri: "KAB. BELU"
        },
        {
            kode_bps: "5307",
            nama_bps: "ALOR",
            kode_dagri: "53.05",
            nama_dagri: "KAB. ALOR"
        },
        {
            kode_bps: "5308",
            nama_bps: "LEMBATA",
            kode_dagri: "53.13",
            nama_dagri: "KAB. LEMBATA"
        },
        {
            kode_bps: "5309",
            nama_bps: "FLORES TIMUR",
            kode_dagri: "53.06",
            nama_dagri: "KAB. FLORES TIMUR"
        },
        {
            kode_bps: "5310",
            nama_bps: "SIKKA",
            kode_dagri: "53.07",
            nama_dagri: "KAB. SIKKA"
        },
        {
            kode_bps: "5311",
            nama_bps: "ENDE",
            kode_dagri: "53.08",
            nama_dagri: "KAB. ENDE"
        },
        {
            kode_bps: "5312",
            nama_bps: "NGADA",
            kode_dagri: "53.09",
            nama_dagri: "KAB. NGADA"
        },
        {
            kode_bps: "5313",
            nama_bps: "MANGGARAI",
            kode_dagri: "53.10",
            nama_dagri: "KAB. MANGGARAI"
        },
        {
            kode_bps: "5314",
            nama_bps: "ROTE NDAO",
            kode_dagri: "53.14",
            nama_dagri: "KAB. ROTE NDAO"
        },
        {
            kode_bps: "5315",
            nama_bps: "MANGGARAI BARAT",
            kode_dagri: "53.15",
            nama_dagri: "KAB. MANGGARAI BARAT"
        },
        {
            kode_bps: "5316",
            nama_bps: "SUMBA TENGAH",
            kode_dagri: "53.17",
            nama_dagri: "KAB. SUMBA TENGAH"
        },
        {
            kode_bps: "5317",
            nama_bps: "SUMBA BARAT DAYA",
            kode_dagri: "53.18",
            nama_dagri: "KAB. SUMBA BARAT DAYA"
        },
        {
            kode_bps: "5318",
            nama_bps: "NAGEKEO",
            kode_dagri: "53.16",
            nama_dagri: "KAB. NAGEKEO"
        },
        {
            kode_bps: "5319",
            nama_bps: "MANGGARAI TIMUR",
            kode_dagri: "53.19",
            nama_dagri: "KAB. MANGGARAI TIMUR"
        },
        {
            kode_bps: "5320",
            nama_bps: "SABU RAIJUA",
            kode_dagri: "53.20",
            nama_dagri: "KAB. SABU RAIJUA"
        },
        {
            kode_bps: "5321",
            nama_bps: "MALAKA",
            kode_dagri: "53.21",
            nama_dagri: "KAB. MALAKA"
        },
        {
            kode_bps: "5371",
            nama_bps: "KUPANG",
            kode_dagri: "53.71",
            nama_dagri: "KOTA KUPANG"
        },
        {
            kode_bps: "6101",
            nama_bps: "SAMBAS",
            kode_dagri: "61.01",
            nama_dagri: "KAB. SAMBAS"
        },
        {
            kode_bps: "6102",
            nama_bps: "BENGKAYANG",
            kode_dagri: "61.07",
            nama_dagri: "KAB. BENGKAYANG"
        },
        {
            kode_bps: "6103",
            nama_bps: "LANDAK",
            kode_dagri: "61.08",
            nama_dagri: "KAB. LANDAK"
        },
        {
            kode_bps: "6104",
            nama_bps: "MEMPAWAH",
            kode_dagri: "61.02",
            nama_dagri: "KAB. MEMPAWAH"
        },
        {
            kode_bps: "6105",
            nama_bps: "SANGGAU",
            kode_dagri: "61.03",
            nama_dagri: "KAB. SANGGAU"
        },
        {
            kode_bps: "6106",
            nama_bps: "KETAPANG",
            kode_dagri: "61.04",
            nama_dagri: "KAB. KETAPANG"
        },
        {
            kode_bps: "6107",
            nama_bps: "SINTANG",
            kode_dagri: "61.05",
            nama_dagri: "KAB. SINTANG"
        },
        {
            kode_bps: "6108",
            nama_bps: "KAPUAS HULU",
            kode_dagri: "61.06",
            nama_dagri: "KAB. KAPUAS HULU"
        },
        {
            kode_bps: "6109",
            nama_bps: "SEKADAU",
            kode_dagri: "61.09",
            nama_dagri: "KAB. SEKADAU"
        },
        {
            kode_bps: "6110",
            nama_bps: "MELAWI",
            kode_dagri: "61.10",
            nama_dagri: "KAB. MELAWI"
        },
        {
            kode_bps: "6111",
            nama_bps: "KAYONG UTARA",
            kode_dagri: "61.11",
            nama_dagri: "KAB. KAYONG UTARA"
        },
        {
            kode_bps: "6112",
            nama_bps: "KUBU RAYA",
            kode_dagri: "61.12",
            nama_dagri: "KAB. KUBU RAYA"
        },
        {
            kode_bps: "6171",
            nama_bps: "PONTIANAK",
            kode_dagri: "61.71",
            nama_dagri: "KOTA PONTIANAK"
        },
        {
            kode_bps: "6172",
            nama_bps: "SINGKAWANG",
            kode_dagri: "61.72",
            nama_dagri: "KOTA SINGKAWANG"
        },
        {
            kode_bps: "6201",
            nama_bps: "KOTAWARINGIN BARAT",
            kode_dagri: "62.01",
            nama_dagri: "KAB. KOTAWARINGIN BARAT"
        },
        {
            kode_bps: "6202",
            nama_bps: "KOTAWARINGIN TIMUR",
            kode_dagri: "62.02",
            nama_dagri: "KAB. KOTAWARINGIN TIMUR"
        },
        {
            kode_bps: "6203",
            nama_bps: "KAPUAS",
            kode_dagri: "62.03",
            nama_dagri: "KAB. KAPUAS"
        },
        {
            kode_bps: "6204",
            nama_bps: "BARITO SELATAN",
            kode_dagri: "62.04",
            nama_dagri: "KAB. BARITO SELATAN"
        },
        {
            kode_bps: "6205",
            nama_bps: "BARITO UTARA",
            kode_dagri: "62.05",
            nama_dagri: "KAB. BARITO UTARA"
        },
        {
            kode_bps: "6206",
            nama_bps: "SUKAMARA",
            kode_dagri: "62.08",
            nama_dagri: "KAB. SUKAMARA"
        },
        {
            kode_bps: "6207",
            nama_bps: "LAMANDAU",
            kode_dagri: "62.09",
            nama_dagri: "KAB. LAMANDAU"
        },
        {
            kode_bps: "6208",
            nama_bps: "SERUYAN",
            kode_dagri: "62.07",
            nama_dagri: "KAB. SERUYAN"
        },
        {
            kode_bps: "6209",
            nama_bps: "KATINGAN",
            kode_dagri: "62.06",
            nama_dagri: "KAB. KATINGAN"
        },
        {
            kode_bps: "6210",
            nama_bps: "PULANG PISAU",
            kode_dagri: "62.11",
            nama_dagri: "KAB. PULANG PISAU"
        },
        {
            kode_bps: "6211",
            nama_bps: "GUNUNG MAS",
            kode_dagri: "62.10",
            nama_dagri: "KAB. GUNUNG MAS"
        },
        {
            kode_bps: "6212",
            nama_bps: "BARITO TIMUR",
            kode_dagri: "62.13",
            nama_dagri: "KAB. BARITO TIMUR"
        },
        {
            kode_bps: "6213",
            nama_bps: "MURUNG RAYA",
            kode_dagri: "62.12",
            nama_dagri: "KAB. MURUNG RAYA"
        },
        {
            kode_bps: "6271",
            nama_bps: "PALANGKA RAYA",
            kode_dagri: "62.71",
            nama_dagri: "KOTA PALANGKARAYA"
        },
        {
            kode_bps: "6301",
            nama_bps: "TANAH LAUT",
            kode_dagri: "63.01",
            nama_dagri: "KAB. TANAH LAUT"
        },
        {
            kode_bps: "6302",
            nama_bps: "KOTABARU",
            kode_dagri: "63.02",
            nama_dagri: "KAB. KOTABARU"
        },
        {
            kode_bps: "6303",
            nama_bps: "BANJAR",
            kode_dagri: "63.03",
            nama_dagri: "KAB. BANJAR"
        },
        {
            kode_bps: "6304",
            nama_bps: "BARITO KUALA",
            kode_dagri: "63.04",
            nama_dagri: "KAB. BARITO KUALA"
        },
        {
            kode_bps: "6305",
            nama_bps: "TAPIN",
            kode_dagri: "63.05",
            nama_dagri: "KAB. TAPIN"
        },
        {
            kode_bps: "6306",
            nama_bps: "HULU SUNGAI SELATAN",
            kode_dagri: "63.06",
            nama_dagri: "KAB. HULU SUNGAI SELATAN"
        },
        {
            kode_bps: "6307",
            nama_bps: "HULU SUNGAI TENGAH",
            kode_dagri: "63.07",
            nama_dagri: "KAB. HULU SUNGAI TENGAH"
        },
        {
            kode_bps: "6308",
            nama_bps: "HULU SUNGAI UTARA",
            kode_dagri: "63.08",
            nama_dagri: "KAB. HULU SUNGAI UTARA"
        },
        {
            kode_bps: "6309",
            nama_bps: "TABALONG",
            kode_dagri: "63.09",
            nama_dagri: "KAB. TABALONG"
        },
        {
            kode_bps: "6310",
            nama_bps: "TANAH BUMBU",
            kode_dagri: "63.10",
            nama_dagri: "KAB. TANAH BUMBU"
        },
        {
            kode_bps: "6311",
            nama_bps: "BALANGAN",
            kode_dagri: "63.11",
            nama_dagri: "KAB. BALANGAN"
        },
        {
            kode_bps: "6371",
            nama_bps: "BANJARMASIN",
            kode_dagri: "63.71",
            nama_dagri: "KOTA BANJARMASIN"
        },
        {
            kode_bps: "6372",
            nama_bps: "BANJAR BARU",
            kode_dagri: "63.72",
            nama_dagri: "KOTA BANJARBARU"
        },
        {
            kode_bps: "6401",
            nama_bps: "PASER",
            kode_dagri: "64.01",
            nama_dagri: "KAB. PASER"
        },
        {
            kode_bps: "6402",
            nama_bps: "KUTAI BARAT",
            kode_dagri: "64.07",
            nama_dagri: "KAB. KUTAI BARAT"
        },
        {
            kode_bps: "6403",
            nama_bps: "KUTAI KARTANEGARA",
            kode_dagri: "64.02",
            nama_dagri: "KAB. KUTAI KARTANEGARA"
        },
        {
            kode_bps: "6404",
            nama_bps: "KUTAI TIMUR",
            kode_dagri: "64.08",
            nama_dagri: "KAB. KUTAI TIMUR"
        },
        {
            kode_bps: "6405",
            nama_bps: "BERAU",
            kode_dagri: "64.03",
            nama_dagri: "KAB. BERAU"
        },
        {
            kode_bps: "6409",
            nama_bps: "PENAJAM PASER UTARA",
            kode_dagri: "64.09",
            nama_dagri: "KAB. PENAJAM PASER UTARA"
        },
        {
            kode_bps: "6411",
            nama_bps: "MAHAKAM HULU",
            kode_dagri: "64.11",
            nama_dagri: "KAB. MAHAKAM ULU"
        },
        {
            kode_bps: "6471",
            nama_bps: "BALIKPAPAN",
            kode_dagri: "64.71",
            nama_dagri: "KOTA BALIKPAPAN"
        },
        {
            kode_bps: "6472",
            nama_bps: "SAMARINDA",
            kode_dagri: "64.72",
            nama_dagri: "KOTA SAMARINDA"
        },
        {
            kode_bps: "6474",
            nama_bps: "BONTANG",
            kode_dagri: "64.74",
            nama_dagri: "KOTA BONTANG"
        },
        {
            kode_bps: "6501",
            nama_bps: "MALINAU",
            kode_dagri: "65.02",
            nama_dagri: "KAB. MALINAU"
        },
        {
            kode_bps: "6502",
            nama_bps: "BULUNGAN",
            kode_dagri: "65.01",
            nama_dagri: "KAB. BULUNGAN"
        },
        {
            kode_bps: "6503",
            nama_bps: "TANA TIDUNG",
            kode_dagri: "65.04",
            nama_dagri: "KAB. TANA TIDUNG"
        },
        {
            kode_bps: "6504",
            nama_bps: "NUNUKAN",
            kode_dagri: "65.03",
            nama_dagri: "KAB. NUNUKAN"
        },
        {
            kode_bps: "6571",
            nama_bps: "TARAKAN",
            kode_dagri: "65.71",
            nama_dagri: "KOTA TARAKAN"
        },
        {
            kode_bps: "7101",
            nama_bps: "BOLAANG MONGONDOW",
            kode_dagri: "71.01",
            nama_dagri: "KAB. BOLAANG MONGONDOW"
        },
        {
            kode_bps: "7102",
            nama_bps: "MINAHASA",
            kode_dagri: "71.02",
            nama_dagri: "KAB. MINAHASA"
        },
        {
            kode_bps: "7103",
            nama_bps: "KEPULAUAN SANGIHE",
            kode_dagri: "71.03",
            nama_dagri: "KAB. KEPULAUAN SANGIHE"
        },
        {
            kode_bps: "7104",
            nama_bps: "KEPULAUAN TALAUD",
            kode_dagri: "71.04",
            nama_dagri: "KAB. KEPULAUAN TALAUD"
        },
        {
            kode_bps: "7105",
            nama_bps: "MINAHASA SELATAN",
            kode_dagri: "71.05",
            nama_dagri: "KAB. MINAHASA SELATAN"
        },
        {
            kode_bps: "7106",
            nama_bps: "MINAHASA UTARA",
            kode_dagri: "71.06",
            nama_dagri: "KAB. MINAHASA UTARA"
        },
        {
            kode_bps: "7107",
            nama_bps: "BOLAANG MONGONDOW UTARA",
            kode_dagri: "71.08",
            nama_dagri: "KAB. BOLAANG MONGONDOW"
        },
        {
            kode_bps: "7108",
            nama_bps: "SIAU TAGULANDANG BIARO",
            kode_dagri: "71.09",
            nama_dagri: "KAB. KEP. SIAU TAGULANDANG"
        },
        {
            kode_bps: "7109",
            nama_bps: "MINAHASA TENGGARA",
            kode_dagri: "71.07",
            nama_dagri: "KAB. MINAHASA TENGGARA"
        },
        {
            kode_bps: "7110",
            nama_bps: "BOLAANG MONGONDOW SELATAN",
            kode_dagri: "71.11",
            nama_dagri: "KAB. BOLAANG MONGONDOW"
        },
        {
            kode_bps: "7111",
            nama_bps: "BOLAANG MONGONDOW TIMUR",
            kode_dagri: "71.10",
            nama_dagri: "KAB. BOLAANG MONGONDOW"
        },
        {
            kode_bps: "7171",
            nama_bps: "MANADO",
            kode_dagri: "71.71",
            nama_dagri: "KOTA MANADO"
        },
        {
            kode_bps: "7172",
            nama_bps: "BITUNG",
            kode_dagri: "71.72",
            nama_dagri: "KOTA BITUNG"
        },
        {
            kode_bps: "7173",
            nama_bps: "TOMOHON",
            kode_dagri: "71.73",
            nama_dagri: "KOTA TOMOHON"
        },
        {
            kode_bps: "7174",
            nama_bps: "KOTAMOBAGU",
            kode_dagri: "71.74",
            nama_dagri: "KOTA KOTAMOBAGU"
        },
        {
            kode_bps: "7201",
            nama_bps: "BANGGAI KEPULAUAN",
            kode_dagri: "72.07",
            nama_dagri: "KAB. BANGGAI KEPULAUAN"
        },
        {
            kode_bps: "7202",
            nama_bps: "BANGGAI",
            kode_dagri: "72.01",
            nama_dagri: "KAB. BANGGAI"
        },
        {
            kode_bps: "7203",
            nama_bps: "MOROWALI",
            kode_dagri: "72.06",
            nama_dagri: "KAB. MOROWALI"
        },
        {
            kode_bps: "7204",
            nama_bps: "POSO",
            kode_dagri: "72.02",
            nama_dagri: "KAB. POSO"
        },
        {
            kode_bps: "7205",
            nama_bps: "DONGGALA",
            kode_dagri: "72.03",
            nama_dagri: "KAB. DONGGALA"
        },
        {
            kode_bps: "7206",
            nama_bps: "TOLI-TOLI",
            kode_dagri: "72.04",
            nama_dagri: "KAB. TOLI TOLI"
        },
        {
            kode_bps: "7207",
            nama_bps: "BUOL",
            kode_dagri: "72.05",
            nama_dagri: "KAB. BUOL"
        },
        {
            kode_bps: "7208",
            nama_bps: "PARIGI MOUTONG",
            kode_dagri: "72.08",
            nama_dagri: "KAB. PARIGI MOUTONG"
        },
        {
            kode_bps: "7209",
            nama_bps: "TOJO UNA-UNA",
            kode_dagri: "72.09",
            nama_dagri: "KAB. TOJO UNA UNA"
        },
        {
            kode_bps: "7210",
            nama_bps: "SIGI",
            kode_dagri: "72.10",
            nama_dagri: "KAB. SIGI"
        },
        {
            kode_bps: "7211",
            nama_bps: "BANGGAI LAUT",
            kode_dagri: "72.11",
            nama_dagri: "KAB. BANGGAI LAUT"
        },
        {
            kode_bps: "7212",
            nama_bps: "MOROWALI UTARA",
            kode_dagri: "72.12",
            nama_dagri: "KAB. MOROWALI UTARA"
        },
        {
            kode_bps: "7271",
            nama_bps: "PALU",
            kode_dagri: "72.71",
            nama_dagri: "KOTA PALU"
        },
        {
            kode_bps: "7301",
            nama_bps: "KEPULAUAN SELAYAR",
            kode_dagri: "73.01",
            nama_dagri: "KAB. KEPULAUAN SELAYAR"
        },
        {
            kode_bps: "7302",
            nama_bps: "BULUKUMBA",
            kode_dagri: "73.02",
            nama_dagri: "KAB. BULUKUMBA"
        },
        {
            kode_bps: "7303",
            nama_bps: "BANTAENG",
            kode_dagri: "73.03",
            nama_dagri: "KAB. BANTAENG"
        },
        {
            kode_bps: "7304",
            nama_bps: "JENEPONTO",
            kode_dagri: "73.04",
            nama_dagri: "KAB. JENEPONTO"
        },
        {
            kode_bps: "7305",
            nama_bps: "TAKALAR",
            kode_dagri: "73.05",
            nama_dagri: "KAB. TAKALAR"
        },
        {
            kode_bps: "7306",
            nama_bps: "GOWA",
            kode_dagri: "73.06",
            nama_dagri: "KAB. GOWA"
        },
        {
            kode_bps: "7307",
            nama_bps: "SINJAI",
            kode_dagri: "73.07",
            nama_dagri: "KAB. SINJAI"
        },
        {
            kode_bps: "7308",
            nama_bps: "MAROS",
            kode_dagri: "73.09",
            nama_dagri: "KAB. MAROS"
        },
        {
            kode_bps: "7309",
            nama_bps: "PANGKAJENE DAN KEPULAUAN",
            kode_dagri: "73.10",
            nama_dagri: "KAB. PANGKAJENE KEPULAUAN"
        },
        {
            kode_bps: "7310",
            nama_bps: "BARRU",
            kode_dagri: "73.11",
            nama_dagri: "KAB. BARRU"
        },
        {
            kode_bps: "7311",
            nama_bps: "BONE",
            kode_dagri: "73.08",
            nama_dagri: "KAB. BONE"
        },
        {
            kode_bps: "7312",
            nama_bps: "SOPPENG",
            kode_dagri: "73.12",
            nama_dagri: "KAB. SOPPENG"
        },
        {
            kode_bps: "7313",
            nama_bps: "WAJO",
            kode_dagri: "73.13",
            nama_dagri: "KAB. WAJO"
        },
        {
            kode_bps: "7314",
            nama_bps: "SIDENRENG RAPPANG",
            kode_dagri: "73.14",
            nama_dagri: "KAB. SIDENRENG RAPPANG"
        },
        {
            kode_bps: "7315",
            nama_bps: "PINRANG",
            kode_dagri: "73.15",
            nama_dagri: "KAB. PINRANG"
        },
        {
            kode_bps: "7316",
            nama_bps: "ENREKANG",
            kode_dagri: "73.16",
            nama_dagri: "KAB. ENREKANG"
        },
        {
            kode_bps: "7317",
            nama_bps: "LUWU",
            kode_dagri: "73.17",
            nama_dagri: "KAB. LUWU"
        },
        {
            kode_bps: "7318",
            nama_bps: "TANA TORAJA",
            kode_dagri: "73.18",
            nama_dagri: "KAB. TANA TORAJA"
        },
        {
            kode_bps: "7322",
            nama_bps: "LUWU UTARA",
            kode_dagri: "73.22",
            nama_dagri: "KAB. LUWU UTARA"
        },
        {
            kode_bps: "7325",
            nama_bps: "LUWU TIMUR",
            kode_dagri: "73.24",
            nama_dagri: "KAB. LUWU TIMUR"
        },
        {
            kode_bps: "7326",
            nama_bps: "TORAJA UTARA",
            kode_dagri: "73.26",
            nama_dagri: "KAB. TORAJA UTARA"
        },
        {
            kode_bps: "7371",
            nama_bps: "MAKASSAR",
            kode_dagri: "73.71",
            nama_dagri: "KOTA MAKASSAR"
        },
        {
            kode_bps: "7372",
            nama_bps: "PAREPARE",
            kode_dagri: "73.72",
            nama_dagri: "KOTA PARE PARE"
        },
        {
            kode_bps: "7373",
            nama_bps: "PALOPO",
            kode_dagri: "73.73",
            nama_dagri: "KOTA PALOPO"
        },
        {
            kode_bps: "7401",
            nama_bps: "BUTON",
            kode_dagri: "74.04",
            nama_dagri: "KAB. BUTON"
        },
        {
            kode_bps: "7402",
            nama_bps: "MUNA",
            kode_dagri: "74.03",
            nama_dagri: "KAB. MUNA"
        },
        {
            kode_bps: "7403",
            nama_bps: "KONAWE",
            kode_dagri: "74.02",
            nama_dagri: "KAB. KONAWE"
        },
        {
            kode_bps: "7404",
            nama_bps: "KOLAKA",
            kode_dagri: "74.01",
            nama_dagri: "KAB. KOLAKA"
        },
        {
            kode_bps: "7405",
            nama_bps: "KONAWE SELATAN",
            kode_dagri: "74.05",
            nama_dagri: "KAB. KONAWE SELATAN"
        },
        {
            kode_bps: "7406",
            nama_bps: "BOMBANA",
            kode_dagri: "74.06",
            nama_dagri: "KAB. BOMBANA"
        },
        {
            kode_bps: "7407",
            nama_bps: "WAKATOBI",
            kode_dagri: "74.07",
            nama_dagri: "KAB. WAKATOBI"
        },
        {
            kode_bps: "7408",
            nama_bps: "KOLAKA UTARA",
            kode_dagri: "74.08",
            nama_dagri: "KAB. KOLAKA UTARA"
        },
        {
            kode_bps: "7409",
            nama_bps: "BUTON UTARA",
            kode_dagri: "74.10",
            nama_dagri: "KAB. BUTON UTARA"
        },
        {
            kode_bps: "7410",
            nama_bps: "KONAWE UTARA",
            kode_dagri: "74.09",
            nama_dagri: "KAB. KONAWE UTARA"
        },
        {
            kode_bps: "7411",
            nama_bps: "KOLAKA TIMUR",
            kode_dagri: "74.11",
            nama_dagri: "KAB. KOLAKA TIMUR"
        },
        {
            kode_bps: "7412",
            nama_bps: "KONAWE KEPULAUAN",
            kode_dagri: "74.12",
            nama_dagri: "KAB. KONAWE KEPULAUAN"
        },
        {
            kode_bps: "7413",
            nama_bps: "MUNA BARAT",
            kode_dagri: "74.13",
            nama_dagri: "KAB. MUNA BARAT"
        },
        {
            kode_bps: "7414",
            nama_bps: "BUTON TENGAH",
            kode_dagri: "74.14",
            nama_dagri: "KAB. BUTON TENGAH"
        },
        {
            kode_bps: "7415",
            nama_bps: "BUTON SELATAN",
            kode_dagri: "74.15",
            nama_dagri: "KAB. BUTON SELATAN"
        },
        {
            kode_bps: "7471",
            nama_bps: "KENDARI",
            kode_dagri: "74.71",
            nama_dagri: "KOTA KENDARI"
        },
        {
            kode_bps: "7472",
            nama_bps: "BAUBAU",
            kode_dagri: "74.72",
            nama_dagri: "KOTA BAU BAU"
        },
        {
            kode_bps: "7501",
            nama_bps: "BOALEMO",
            kode_dagri: "75.02",
            nama_dagri: "KAB. BOALEMO"
        },
        {
            kode_bps: "7502",
            nama_bps: "GORONTALO",
            kode_dagri: "75.01",
            nama_dagri: "KAB. GORONTALO"
        },
        {
            kode_bps: "7503",
            nama_bps: "POHUWATO",
            kode_dagri: "75.04",
            nama_dagri: "KAB. PAHUWATO"
        },
        {
            kode_bps: "7504",
            nama_bps: "BONE BOLANGO",
            kode_dagri: "75.03",
            nama_dagri: "KAB. BONE BOLANGO"
        },
        {
            kode_bps: "7505",
            nama_bps: "GORONTALO UTARA",
            kode_dagri: "75.05",
            nama_dagri: "KAB. GORONTALO UTARA"
        },
        {
            kode_bps: "7571",
            nama_bps: "GORONTALO",
            kode_dagri: "75.71",
            nama_dagri: "KOTA GORONTALO"
        },
        {
            kode_bps: "7601",
            nama_bps: "MAJENE",
            kode_dagri: "76.05",
            nama_dagri: "KAB. MAJENE"
        },
        {
            kode_bps: "7602",
            nama_bps: "POLEWALI MANDAR",
            kode_dagri: "76.04",
            nama_dagri: "KAB. POLEWALI MANDAR"
        },
        {
            kode_bps: "7603",
            nama_bps: "MAMASA",
            kode_dagri: "76.03",
            nama_dagri: "KAB. MAMASA"
        },
        {
            kode_bps: "7604",
            nama_bps: "MAMUJU",
            kode_dagri: "76.02",
            nama_dagri: "KAB. MAMUJU"
        },
        {
            kode_bps: "7605",
            nama_bps: "PASANGKAYU",
            kode_dagri: "76.01",
            nama_dagri: "KAB. PASANGKAYU"
        },
        {
            kode_bps: "7606",
            nama_bps: "MAMUJU TENGAH",
            kode_dagri: "76.06",
            nama_dagri: "KAB. MAMUJU TENGAH"
        },
        {
            kode_bps: "8101",
            nama_bps: "KEPULAUAN TANIMBAR",
            kode_dagri: "81.03",
            nama_dagri: "KAB. KEPULAUAN TANIMBAR"
        },
        {
            kode_bps: "8102",
            nama_bps: "MALUKU TENGGARA",
            kode_dagri: "81.02",
            nama_dagri: "KAB. MALUKU TENGGARA"
        },
        {
            kode_bps: "8103",
            nama_bps: "MALUKU TENGAH",
            kode_dagri: "81.01",
            nama_dagri: "KAB. MALUKU TENGAH"
        },
        {
            kode_bps: "8104",
            nama_bps: "BURU",
            kode_dagri: "81.04",
            nama_dagri: "KAB. BURU"
        },
        {
            kode_bps: "8105",
            nama_bps: "KEPULAUAN ARU",
            kode_dagri: "81.07",
            nama_dagri: "KAB. KEPULAUAN ARU"
        },
        {
            kode_bps: "8106",
            nama_bps: "SERAM BAGIAN BARAT",
            kode_dagri: "81.06",
            nama_dagri: "KAB. SERAM BAGIAN BARAT"
        },
        {
            kode_bps: "8107",
            nama_bps: "SERAM BAGIAN TIMUR",
            kode_dagri: "81.05",
            nama_dagri: "KAB. SERAM BAGIAN TIMUR"
        },
        {
            kode_bps: "8108",
            nama_bps: "MALUKU BARAT DAYA",
            kode_dagri: "81.08",
            nama_dagri: "KAB. MALUKU BARAT DAYA"
        },
        {
            kode_bps: "8109",
            nama_bps: "BURU SELATAN",
            kode_dagri: "81.09",
            nama_dagri: "KAB. BURU SELATAN"
        },
        {
            kode_bps: "8171",
            nama_bps: "AMBON",
            kode_dagri: "81.71",
            nama_dagri: "KOTA AMBON"
        },
        {
            kode_bps: "8172",
            nama_bps: "TUAL",
            kode_dagri: "81.72",
            nama_dagri: "KOTA TUAL"
        },
        {
            kode_bps: "8201",
            nama_bps: "HALMAHERA BARAT",
            kode_dagri: "82.01",
            nama_dagri: "KAB. HALMAHERA BARAT"
        },
        {
            kode_bps: "8202",
            nama_bps: "HALMAHERA TENGAH",
            kode_dagri: "82.02",
            nama_dagri: "KAB. HALMAHERA TENGAH"
        },
        {
            kode_bps: "8203",
            nama_bps: "KEPULAUAN SULA",
            kode_dagri: "82.05",
            nama_dagri: "KAB. KEPULAUAN SULA"
        },
        {
            kode_bps: "8204",
            nama_bps: "HALMAHERA SELATAN",
            kode_dagri: "82.04",
            nama_dagri: "KAB. HALMAHERA SELATAN"
        },
        {
            kode_bps: "8205",
            nama_bps: "HALMAHERA UTARA",
            kode_dagri: "82.03",
            nama_dagri: "KAB. HALMAHERA UTARA"
        },
        {
            kode_bps: "8206",
            nama_bps: "HALMAHERA TIMUR",
            kode_dagri: "82.06",
            nama_dagri: "KAB. HALMAHERA TIMUR"
        },
        {
            kode_bps: "8207",
            nama_bps: "PULAU MOROTAI",
            kode_dagri: "82.07",
            nama_dagri: "KAB. PULAU MOROTAI"
        },
        {
            kode_bps: "8208",
            nama_bps: "PULAU TALIABU",
            kode_dagri: "82.08",
            nama_dagri: "KAB. PULAU TALIABU"
        },
        {
            kode_bps: "8271",
            nama_bps: "TERNATE",
            kode_dagri: "82.71",
            nama_dagri: "KOTA TERNATE"
        },
        {
            kode_bps: "8272",
            nama_bps: "TIDORE KEPULAUAN",
            kode_dagri: "82.72",
            nama_dagri: "KOTA TIDORE KEPULAUAN"
        },
        {
            kode_bps: "9101",
            nama_bps: "FAKFAK",
            kode_dagri: "92.03",
            nama_dagri: "KAB. FAK FAK"
        },
        {
            kode_bps: "9102",
            nama_bps: "KAIMANA",
            kode_dagri: "92.08",
            nama_dagri: "KAB. KAIMANA"
        },
        {
            kode_bps: "9103",
            nama_bps: "TELUK WONDAMA",
            kode_dagri: "92.07",
            nama_dagri: "KAB. TELUK WONDAMA"
        },
        {
            kode_bps: "9104",
            nama_bps: "TELUK BINTUNI",
            kode_dagri: "92.06",
            nama_dagri: "KAB. TELUK BINTUNI"
        },
        {
            kode_bps: "9105",
            nama_bps: "MANOKWARI",
            kode_dagri: "92.02",
            nama_dagri: "KAB. MANOKWARI"
        },
        {
            kode_bps: "9106",
            nama_bps: "SORONG SELATAN",
            kode_dagri: "92.04",
            nama_dagri: "KAB. SORONG SELATAN"
        },
        {
            kode_bps: "9107",
            nama_bps: "SORONG",
            kode_dagri: "92.01",
            nama_dagri: "KAB. SORONG"
        },
        {
            kode_bps: "9108",
            nama_bps: "RAJA AMPAT",
            kode_dagri: "92.05",
            nama_dagri: "KAB. RAJA AMPAT"
        },
        {
            kode_bps: "9109",
            nama_bps: "TAMBRAUW",
            kode_dagri: "92.09",
            nama_dagri: "KAB. TAMBRAUW"
        },
        {
            kode_bps: "9110",
            nama_bps: "MAYBRAT",
            kode_dagri: "92.10",
            nama_dagri: "KAB. MAYBRAT"
        },
        {
            kode_bps: "9111",
            nama_bps: "MANOKWARI SELATAN",
            kode_dagri: "92.11",
            nama_dagri: "KAB. MANOKWARI SELATAN"
        },
        {
            kode_bps: "9112",
            nama_bps: "PEGUNUNGAN ARFAK",
            kode_dagri: "92.12",
            nama_dagri: "KAB. PEGUNUNGAN ARFAK"
        },
        {
            kode_bps: "9171",
            nama_bps: "SORONG",
            kode_dagri: "92.71",
            nama_dagri: "KOTA SORONG"
        },
        {
            kode_bps: "9401",
            nama_bps: "MERAUKE",
            kode_dagri: "91.01",
            nama_dagri: "KAB. MERAUKE"
        },
        {
            kode_bps: "9402",
            nama_bps: "JAYAWIJAYA",
            kode_dagri: "91.02",
            nama_dagri: "KAB. JAYAWIJAYA"
        },
        {
            kode_bps: "9403",
            nama_bps: "JAYAPURA",
            kode_dagri: "91.03",
            nama_dagri: "KAB. JAYAPURA"
        },
        {
            kode_bps: "9404",
            nama_bps: "NABIRE",
            kode_dagri: "91.04",
            nama_dagri: "KAB. NABIRE"
        },
        {
            kode_bps: "9408",
            nama_bps: "KEPULAUAN YAPEN",
            kode_dagri: "91.05",
            nama_dagri: "KAB. KEPULAUAN YAPEN"
        },
        {
            kode_bps: "9409",
            nama_bps: "BIAK NUMFOR",
            kode_dagri: "91.06",
            nama_dagri: "KAB. BIAK NUMFOR"
        },
        {
            kode_bps: "9410",
            nama_bps: "PANIAI",
            kode_dagri: "91.08",
            nama_dagri: "KAB. PANIAI"
        },
        {
            kode_bps: "9411",
            nama_bps: "PUNCAK JAYA",
            kode_dagri: "91.07",
            nama_dagri: "KAB. PUNCAK JAYA"
        },
        {
            kode_bps: "9412",
            nama_bps: "MIMIKA",
            kode_dagri: "91.09",
            nama_dagri: "KAB. MIMIKA"
        },
        {
            kode_bps: "9413",
            nama_bps: "BOVEN DIGOEL",
            kode_dagri: "91.16",
            nama_dagri: "KAB. BOVEN DIGOEL"
        },
        {
            kode_bps: "9414",
            nama_bps: "MAPPI",
            kode_dagri: "91.17",
            nama_dagri: "KAB. MAPPI"
        },
        {
            kode_bps: "9415",
            nama_bps: "ASMAT",
            kode_dagri: "91.18",
            nama_dagri: "KAB. ASMAT"
        },
        {
            kode_bps: "9416",
            nama_bps: "YAHUKIMO",
            kode_dagri: "91.13",
            nama_dagri: "KAB. YAHUKIMO"
        },
        {
            kode_bps: "9417",
            nama_bps: "PEGUNUNGAN BINTANG",
            kode_dagri: "91.12",
            nama_dagri: "KAB PEGUNUNGAN BINTANG"
        },
        {
            kode_bps: "9418",
            nama_bps: "TOLIKARA",
            kode_dagri: "91.14",
            nama_dagri: "KAB. TOLIKARA"
        },
        {
            kode_bps: "9419",
            nama_bps: "SARMI",
            kode_dagri: "91.10",
            nama_dagri: "KAB. SARMI"
        },
        {
            kode_bps: "9420",
            nama_bps: "KEEROM",
            kode_dagri: "91.11",
            nama_dagri: "KAB. KEEROM"
        },
        {
            kode_bps: "9426",
            nama_bps: "WAROPEN",
            kode_dagri: "91.15",
            nama_dagri: "KAB. WAROPEN"
        },
        {
            kode_bps: "9427",
            nama_bps: "SUPIORI",
            kode_dagri: "91.19",
            nama_dagri: "KAB. SUPIORI"
        },
        {
            kode_bps: "9428",
            nama_bps: "MAMBERAMO RAYA",
            kode_dagri: "91.20",
            nama_dagri: "KAB. MAMBERAMO RAYA"
        },
        {
            kode_bps: "9429",
            nama_bps: "NDUGA",
            kode_dagri: "91.24",
            nama_dagri: "KAB. NDUGA"
        },
        {
            kode_bps: "9430",
            nama_bps: "LANNY JAYA",
            kode_dagri: "91.23",
            nama_dagri: "KAB. LANNY JAYA"
        },
        {
            kode_bps: "9431",
            nama_bps: "MAMBERAMO TENGAH",
            kode_dagri: "91.21",
            nama_dagri: "KAB. MAMBERAMO TENGAH"
        },
        {
            kode_bps: "9432",
            nama_bps: "YALIMO",
            kode_dagri: "91.22",
            nama_dagri: "KAB. YALIMO"
        },
        {
            kode_bps: "9433",
            nama_bps: "PUNCAK",
            kode_dagri: "91.25",
            nama_dagri: "KAB. PUNCAK"
        },
        {
            kode_bps: "9434",
            nama_bps: "DOGIYAI",
            kode_dagri: "91.26",
            nama_dagri: "KAB. DOGIYAI"
        },
        {
            kode_bps: "9435",
            nama_bps: "INTAN JAYA",
            kode_dagri: "91.27",
            nama_dagri: "KAB. INTAN JAYA"
        },
        {
            kode_bps: "9436",
            nama_bps: "DEIYAI",
            kode_dagri: "91.28",
            nama_dagri: "KAB. DEIYAI"
        },
        {
            kode_bps: "9471",
            nama_bps: "JAYAPURA",
            kode_dagri: "91.71",
            nama_dagri: "KOTA JAYAPURA"
        }
    ];

    const result = data.find(item => item.kode_dagri === kodeDagri);
    return result ? result.nama_dagri : null;
}
