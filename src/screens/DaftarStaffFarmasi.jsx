import React from 'react';
import { DaftarStaffFarmasiRow } from '../components/DaftarStaffFarmasiRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment.js';

export class DaftarStaffFarmasi extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaf: []
		}
		Appointment.getAllStaffFarmasi().then(response => {
			this.setState({
				loading: false,
				listStaf: response.result
			})
		})
	}

	render() {
	
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staff Farmasi" header={['Nama Staff','Jenis']}>
                    <DaftarStaffFarmasiRow listStaf={this.state.listStaf}/>
                </TableContainer>
            )
        }
	}
}