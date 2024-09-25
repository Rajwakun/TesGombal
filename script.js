function tampilkanGombalan() {
    const gombalan = [
        "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "Kalau senyummu itu matahari, hariku pasti selalu cerah.",
        "Sama seperti udara, aku gak bisa hidup tanpa kamu.",
        "Kalau aku disuruh pilih bintang paling indah di langit, aku tetap akan pilih kamu.",
        "Kamu itu seperti mimpi yang selalu ingin aku jalani setiap hari."
    ];

    const randomIndex = Math.floor(Math.random() * gombalan.length);
    document.getElementById("gombalan-text").textContent = gombalan[randomIndex];
}
