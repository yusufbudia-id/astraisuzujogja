# LEPAS Asset Cleanup

Tanggal: 2026-09-20

Dihapus dari `public/`:
- seluruh `public/images/` legacy LEPAS
- seluruh `public/video/` legacy LEPAS

Total media legacy yang dihapus sekitar 18.7 MB.

`public/icon.png` dipertahankan karena merupakan favicon merah-putih generik yang dibuat untuk baseline Astra Isuzu.

Catatan: source route legacy LEPAS masih disimpan sebagai cadangan migrasi dan beberapa file tersebut masih memiliki string path ke aset lama. Homepage Astra Isuzu V2 tidak menggunakan path media LEPAS tersebut. Route legacy akan dimigrasikan/dihapus pada tahap produk berikutnya.
