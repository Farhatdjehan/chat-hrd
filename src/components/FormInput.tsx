interface FormProps {
  handleSubmit?: any;
  handleChange?: any;
}
export default function FormInput(props: FormProps) {
  const { handleSubmit, handleChange }: any = props;
  return (
    <div className="data-form">
      <div className="data-user">
        <div className="data-title">Masukkan Informasi</div>
        <form onSubmit={handleSubmit}>
          <div className="data-subtitle">
            Digunakan untuk auto generate di template chat
          </div>
          <div className="data-label">Nama Anda</div>
          <input
            className="data-input"
            id="nama"
            name="nama"
            onChange={handleChange}
          />
          <div className="data-label">Umur Anda</div>
          <input
            className="data-input"
            type="number"
            id="umur"
            name="umur"
            onChange={handleChange}
          />
          <div className="data-label">Nomor Telepon</div>
          <input
            className="data-input"
            type="number"
            id="telepon"
            name="telepon"
            onChange={handleChange}
          />
          <div className="data-wrapper__submit">
            <button className="data-submit" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
