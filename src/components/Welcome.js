import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const step1 = useSelector((state) => state.form.step1);
  const step2 = useSelector((state) => state.form.step2);
  const step3 = useSelector((state) => state.form.step3);

  if (!step1) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Selamat Datang, {step1.name}!</h1>
      <h2>Informasi Anda:</h2>
      <ul>
        <li>Email: {step1.email}</li>
        <li>No. HP: {step1.phone}</li>
        <li>Pilihan Bootcamp: {step1.bootcamp}</li>
        <li>Tanggal Lahir: {step2.dateOfBirth}</li>
        <li>Tempat Lahir: {step2.placeOfBirth}</li>
        <li>Alamat: {step2.address}</li>
      </ul>
      <br />
    </div>
  );
};

export default Welcome;
