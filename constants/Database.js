import Izin from '../assets/svg/iconIzin.svg'
import Sakit from '../assets/svg/iconSakit.svg'
import Color from './Color'
import Hadir from '../assets/svg/iconHadir.svg'
import Terlambat from '../assets/svg/iconTerlambat.svg'

export const DataKendaraan = [
    {
        title:'Kendaraan',
        placeholder:'Masukan Kendaraan'
    },
    {
        title:'Plat Nomor',
        placeholder:'Masukkan Plat Nomor'
    },
    {
        title:'Jenis',
        placeholder:'Masukkan Jenis'
    },
    {
        title:'Merk',
        placeholder:'Masukkan Merk'
    },
    {
        title:'Warna',
        placeholder:'Masukkan Warna'
    },
]

export const DataSupir = [
    {
        title:'Nama Lengkap',
        placeholder:'Masukkan Nama Lengkap'
    },
    {
        title:'NIK/NIP',
        placeholder:'Masukkan NIK/NIP'
    },
    {
        title:'E-mail',
        placeholder:'Masukkan email'
    },
    {
        title:'No HP',
        placeholder:'Masukkan Nomor HP'
    },
    {
        title:'Alamat',
        placeholder:'Masukkan Alamat'
    },
]

export const statusCount = [
    {
        status: "Hadir",
        icon: <Hadir/>,
        count: 13
    },
    {
        status: "Izin",
        icon: <Izin stroke={Color.Hijau}/>,
        count: 2
    },
    {
        status: "Sakit",
        icon: <Sakit stroke={Color.Hijau}/>,
        count: 3
    },
    {
        status: "Terlambat",
        icon: <Terlambat/>,
        count: 5
    },
]

export const dataKehadiran = [
    {nama: "shafwan", tanggal: "2 September 2023", category: "Hadir"},
    {nama: "ongko", tanggal: "6 September 2023", category: "Hadir"},
    {nama: "mingki", tanggal: "6 September 2023", category: "Hadir"},
    {nama: "ong", tanggal: "4 September 2023", category: "Hadir"},

    {nama: "ein", tanggal: "1 September 2023", category: "Sakit"},
    {nama: "ien", tanggal: "3 September 2023", category: "Sakit"},
    {nama: "risa", tanggal: "6 September 2023", category: "Sakit"},

    {nama: "ali", tanggal: "2 September 2023", category: "Izin"},
    {nama: "asril", tanggal: "5 September 2023", category: "Izin"},
    {nama: "cika", tanggal: "4 September 2023", category: "Izin"},
]