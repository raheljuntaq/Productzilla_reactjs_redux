import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { submitStep3 } from '../redux/formSlice';
import { useNavigate } from 'react-router-dom';
import styles from './FormStep3.modul.css';

const FormStep3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(submitStep3(data));
    navigate('/welcome');
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input {...register("password")} type="password" className={styles.input} placeholder="Password" />
      <input {...register("confirmPassword")} type="password" className={styles.input} placeholder="Confirm Password" />
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default FormStep3;
