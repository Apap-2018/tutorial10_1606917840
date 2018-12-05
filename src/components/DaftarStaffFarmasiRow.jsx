import React from 'react';

export const DaftarStaffFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaf.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        <td>{staf.jenis}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}