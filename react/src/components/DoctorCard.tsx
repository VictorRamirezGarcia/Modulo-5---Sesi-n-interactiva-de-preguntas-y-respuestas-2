// src/views/DoctorCard.tsx
import React from 'react';
import { Doctor } from '../class/Doctor'; // Importamos la clase Doctor

// Definimos las props para este componente: un único doctor
interface DoctorCardProps {
  doctor: Doctor; // Propiedad de tipo Doctor
}

// Componente funcional que recibe un doctor como prop
const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
return (
    <div className="doctor-card">
    <p>------------------------------------------------------</p>
    <h3>{doctor.name}</h3>
    <p><strong>Especialidad:</strong> {doctor.specialty}</p>
    <p><strong>Años de experiencia:</strong> {doctor.yearsOfExperience}</p>
    <p>------------------------------------------------------</p>
    {/* <p>{doctor.getDoctorDetails()}</p> */}
    </div>
);
};

export default DoctorCard;
