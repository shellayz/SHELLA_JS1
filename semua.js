// if else nested if
let nilaiPemrogramanWeb = 93;

if (nilaiPemrogramanWeb >= 90) {
  console.log("Nilai Anda: A");
} else if (nilaiPemrogramanWeb >= 80) {
  console.log("Nilai Anda: B");
} else if (nilaiPemrogramanWeb >= 70) {
  console.log("Nilai Anda: C");
} else {
  console.log("Nilai Anda: D");
}

// switch case
let hobby = "Tidur";

switch (hobby) {
  case "Membaca":
    console.log("Hobby Anda adalah Membaca.");
    break;
  case "Menonton":
    console.log("Hobby Anda adalah Menonton.");
    break;
  case "Melukis":
    console.log("Hobby Anda adalah Melukis.");
    break;
  case "Menulis":
    console.log("Hobby Anda adalah Menulis.");
    break;
  default:
    console.log(`Maaf ${hobby} bukan termasuk hobby.`);
}

// for
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

for (let i = 0; i < bulan.length; i++) {
  console.log("Bulan ke-" + (i + 1) + " adalah bulan " + bulan[i]);
}

// while
let hari = 1;
while (hari <= 20) {
  console.log("Hari ke- " + hari);
  hari++;
}

// do while
let minggu = 1;
do {
  console.log("Minggu ke- " + minggu);
  minggu++;
} while (minggu <= 31);

// function
function kali(a, b) {
  return a * b;
}

let hasilPerkalian = kali(21, 73);
console.log("Hasil perkalian: " + hasilPerkalian);