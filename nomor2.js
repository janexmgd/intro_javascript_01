//nomor2
const mtk = 100
const bahasaIndonesia = 150
const bahasaInggris = 100
const ipa = null
//rata rata nilai un
let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
// validasi input number semua bukan
if (typeof (mtk) == "number" && typeof (bahasaIndonesia) == "number" && typeof (bahasaInggris) == "number" && typeof (ipa) == "number") {
    console.log(`rata rata nilainya adalah ${average}`);
    // memberi grade grade
    if (average >= 100) {
        console.log("Maaf rata-rata nilai tak boleh diatas 100")
    } else if (average <= 100 && average >= 90) {
        console.log("Grade A");
    } else if (average <= 89 && average >= 80) {
        console.log("Grade B")
    } else if (average <= 79 && average >= 70) {
        console.log("Grade C")
    } else if (average <= 69 && average >= 60) {
        console.log("Grade D")
    } else {
        console.log("Grade E")
    }
} else {
    console.log(`Tolong input data type number`)
}