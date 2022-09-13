export default function FormInput({ handleSubmit, handleChange }) {
    return (
        <div className='data-user'>
            <div className='data-title'>
                Masukkan Informasi
            </div>
            <form onSubmit={handleSubmit}>
                <div className='data-subtitle'>Digunakan untuk auto generate di template chat</div>
                <div className='data-label'>Nama Anda</div>
                <input className='data-input' id="nama" name="nama" onChange={handleChange} />
                <div className='data-label'>Umur Anda</div>
                <input className='data-input' id="umur" name="umur" onChange={handleChange} />
                <div className='data-label'>Nomor Telepon</div>
                <input className='data-input' id="telepon" name="telepon" onChange={handleChange} />
                <button className='data-submit' type="submit">Simpan</button>
            </form>
        </div>
    )
}