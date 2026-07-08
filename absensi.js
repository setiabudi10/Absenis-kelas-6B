// DATA ABSENSI SEDERHANA

let dataAbsensi = JSON.parse(

localStorage.getItem("absensi")

) || [];

function cariSiswa(kode){

const siswaDitemukan = siswa.find(

(item)=> item.kode === kode

);

if(siswaDitemukan){

let tanggal = new Date()

.toLocaleDateString("id-ID");

let sudahAda = dataAbsensi.find(

(item)=>

item.kode===kode &&

item.tanggal===tanggal

);

if(!sudahAda){

dataAbsensi.push({

kode:siswaDitemukan.kode,

nama:siswaDitemukan.nama,

kelas:"6B",

tanggal:tanggal,

status:"Hadir"

});

localStorage.setItem(

"absensi",

JSON.stringify(dataAbsensi)

);

return siswaDitemukan.nama + 

" berhasil hadir";

}

else{

return siswaDitemukan.nama +

" sudah absen hari ini";

}

}

else{

return "QR tidak terdaftar";

}

}
