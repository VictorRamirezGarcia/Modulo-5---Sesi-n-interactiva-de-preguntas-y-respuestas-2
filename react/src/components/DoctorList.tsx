// src/views/DoctorList.tsx
import React from 'react';
import { Doctor } from '../class/Doctor'; // Importa la clase Doctor

interface Props {
  doctors: Doctor[]; // Propiedad para recibir un array de doctores
}

const DoctorList: React.FC<Props> = ({ doctors }) => {
  // Función para mostrar los detalles de cada doctor
  const getDoctorDetails = (doctor: Doctor): string => {
    return doctor.getDoctorDetails();
};

return (
    <div>
    <h2>Lista de Doctores</h2>
    <ul>
        {doctors.map((doctor) => (
        <li key={doctor.id}>
            {getDoctorDetails(doctor)} {/* Mostrar los detalles del doctor */}
        </li>
        ))}
    </ul>
    </div>
);
};

export default DoctorList;
