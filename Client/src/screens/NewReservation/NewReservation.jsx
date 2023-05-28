import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMsgForm/ErrorMessage';
import { toast } from 'react-toastify';
import { formatBody, tConvert } from '../../utils/constant';
import reservationEndPoints from '../../api/reservationEndPoints';
import './NewRegistration.css';

const NewRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data['time'] = tConvert(data['time']);
      await reservationEndPoints.createNewReservation(formatBody(data));
      toast.success('Reservation Successful!');
      reset();
    } catch (error) {
      toast.error('Server Error');
    }
  };

  return (
    <div className='new-registration-page'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='inline-form-fields'>
          <div className='form-field input-tag-styling'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <ErrorMessage msg={errors.name.message} />}
          </div>
          <div className='form-field input-tag-styling'>
            <label htmlFor='mobile'>Mobile Number</label>
            <input
              type='tel'
              id='mobile'
              {...register('mobile', {
                required: 'Mobile Number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Mobile Number should be 10 digits',
                },
              })}
            />
            {errors.mobile && <ErrorMessage msg={errors.mobile.message} />}
          </div>
          <div className='form-field input-tag-styling'>
            <label htmlFor='address'>Address</label>
            <textarea
              id='address'
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <ErrorMessage msg={errors.address.message} />}
          </div>
        </div>
        <div className='inline-form-fields'>
          <div className='form-field input-tag-styling'>
            <label htmlFor='number_of_seats'>Number of Tickets</label>
            <input
              type='number'
              id='number_of_seats'
              min='1'
              {...register('number_of_seats', {
                required: 'Number of Tickets is required',
              })}
            />
            {errors.number_of_seats && (
              <ErrorMessage msg={errors.number_of_seats.message} />
            )}
          </div>
          <div className='form-field input-tag-styling'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              id='date'
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && <ErrorMessage msg={errors.date.message} />}
          </div>
          <div className='form-field input-tag-styling'>
            <label htmlFor='time'>Time</label>
            <input
              type='time'
              id='time'
              {...register('time', { required: 'Time is required' })}
            />
            {errors.time && <ErrorMessage msg={errors.time.message} />}
          </div>
        </div>
        <div className='inline-form-fields'>
          <div className='form-field input-tag-styling'>
            <label htmlFor='special_note'>Special Note</label>
            <textarea id='special_note' {...register('special_note')} />
          </div>
        </div>
        <div className='button-section'>
          <button
            type='submit'
            className='button-styling'
            style={{ width: '500px' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRegistration;
