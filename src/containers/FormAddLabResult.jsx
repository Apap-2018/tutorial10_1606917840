import React from 'react';

export const FormAddLabResult = (props) => {
    return (
        <div>
            <h2>Add Lab Result Pasien</h2>
            <div>
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <p>{props.pasien.nama}</p>
            </div>
            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label>Jenis</label>
                    <input type="text" className="form-control" name="jenis" required="required" />
                </div>
                <div className="form-group">
                    <label>Hasil</label>
                    <input type="text" className="form-control" name="hasil" required="required" />
                </div>
                <div className="form-group">
                    <label>Tanggal Pengajuan</label>
                    <input type="date" className="form-control" name="tanggalPengajuan" required="required" />
                </div>
                <input type="hidden" name="pasien.id" value={props.pasien.id} />
                <button className="btn btn-success" value="submit">Tambah</button>
            </form>
        </div>
    )
}