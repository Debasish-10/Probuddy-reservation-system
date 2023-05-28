import React, { useState, useEffect } from 'react';
import reservationEndPoints from '../../api/reservationEndPoints';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import './ReservationList.css';

const ReservationList = () => {
  const [tableData, setTableData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await reservationEndPoints.deleteReservation(id);
      fetchReservationList();
      toast.success('Reservation deleted succesfully');
    } catch (error) {
      toast.error('Server Error');
    }
  };
  async function fetchReservationList() {
    try {
      const res = await reservationEndPoints.getAllReservationList();
      setTableData(res.data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchReservationList();
  }, []);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Address</th>
          <th>Number of Tickets</th>
          <th>Date</th>
          <th>Time</th>
          <th>Special Note</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((row) => (
            <tr key={row._id} className='table-row'>
              <td>{row.name}</td>
              <td>{row.mobile}</td>
              <td>{row.address}</td>
              <td>{row.number_of_seats}</td>
              <td>{row.date.split('T')[0]}</td>
              <td>{row.time}</td>
              <td>{row?.special_note}</td>
              <td>
                <DeleteIcon onClick={() => handleDelete(row._id)} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ReservationList;
