// JS untuk membuat efek Ripple (gelombang) dinamis yang muncul tepat di titik klik
const buttons = document.querySelectorAll('.link-btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Mengambil koordinat klik relatif terhadap tombol
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;

        // Membuat elemen span untuk ripple
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        // Mengatur posisi dan ukuran ripple
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Menambahkan ripple ke dalam tombol
        this.appendChild(ripple);

        // Menghapus elemen ripple setelah animasi selesai (600ms sesuai CSS)
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});