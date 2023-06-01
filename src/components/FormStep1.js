import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { submitStep1 } from '../redux/formSlice';
import { useNavigate } from 'react-router-dom';
import styles from './FormStep1.modul.css';

const FormStep1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(submitStep1(data));
    navigate('/step2');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <br />
      <h2>Isi Data Berikut :</h2>
      <input
        {...register("name")}
        type="text"
        className={styles.input}
        placeholder="Nama"
      />
      <input
        {...register("email")}
        type="email"
        className={styles.input}
        placeholder="Email"
      />
      <input
        {...register("phone")}
        type="tel"
        className={styles.input}
        placeholder="No. HP"
      />
      <div>
        <label>
          <input {...register("bootcamp")} type="radio" value="UI/UX" />
          UI/UX
        </label>
        <label>
          <input
            {...register("bootcamp")}
            type="radio"
            value="Backend Engineer"
          />
          Backend Engineer
        </label>
        <label>
          <input
            {...register("bootcamp")}
            type="radio"
            value="Frontend Engineer"
          />
          Frontend Engineer
        </label>
        <label>
          <input
            {...register("bootcamp")}
            type="radio"
            value="Digital Marketing"
          />
          Digital Marketing
        </label>
      </div>
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default FormStep1;
