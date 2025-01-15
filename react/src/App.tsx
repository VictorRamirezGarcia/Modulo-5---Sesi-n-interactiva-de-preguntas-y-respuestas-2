// src/App.tsx
import React from 'react';
import { Doctor } from './class/Doctor'; // Importamos la clase Doctor
import DoctorCard from './components/DoctorCard'; // Importamos el componente DoctorCard

const doctors = [
  new Doctor(1, 'Juan Pérez', 'Cardiología', 10),
  new Doctor(2, 'Ana González', 'Pediatría', 5),
  new Doctor(3, 'Luis Martínez', 'Dermatología', 15),
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hospital Victor Ramirez</h1>
      <div>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} /> // Pasamos cada doctor como prop al componente DoctorCard
        ))}
      </div>
    </div>
  );
};

export default App;
