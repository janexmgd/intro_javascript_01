//nomor2
const mtk = 85
const bahasaIndonesia = 50
const bahasaInggris = 60
const ipa = 75

//rata rata nilai un
let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
// validasi semua input number atau bukan
if (typeof (mtk) == "number" && typeof (bahasaIndonesia) == "number" && typeof (bahasaInggris) == "number" && typeof (ipa) == "number") {
    // validasi nilai input lebih dari 100 atau tidak
    if (mtk <= 100 && bahasaIndonesia <= 100 && bahasaInggris <= 100 && ipa <= 100) {
        if (average <= 100 && average >= 90) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade A");
        } else if (average <= 89 && average >= 80) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade B")
        } else if (average <= 79 && average >= 70) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade C")
        } else if (average <= 69 && average >= 60) {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade D")
        } else {
            console.log(`rata rata nilainya adalah ${average}`);
            console.log("Grade E")
        }
    } else {
        console.log(`input nilai tak boleh lebih dari 100`)
    }
} else {
    console.log(`mohon input data number`);
}