import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { submitStep2 } from '../redux/formSlice';
import { useNavigate } from 'react-router-dom';
import styles from './FormStep2.modul.css';

const FormStep2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(submitStep2(data));
    navigate('/step3');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <br />
      <input {...register("dateOfBirth")} type="date" className={styles.input} />
      <input {...register("placeOfBirth")} type="text" className={styles.input} placeholder="Tempat Lahir" />
      <input {...register("address")} type="text" className={styles.input} placeholder="Alamat Lengkap" />
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default FormStep2;
