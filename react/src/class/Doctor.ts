// src/class/Doctor.ts
import { IDoctor } from '../interfaces/IDoctor'; // Importa la interfaz

export class Doctor implements IDoctor {
id: number;
name: string;
specialty: string;
yearsOfExperience: number;

constructor(id: number, name: string, specialty: string, yearsOfExperience: number) {
    this.id = id;
    this.name = name;
    this.specialty = specialty;
    this.yearsOfExperience = yearsOfExperience;
}

getDoctorDetails(): string {
    return `Dr. ${this.name}, Especialidad: ${this.specialty}, Años de experiencia: ${this.yearsOfExperience}`;
}

updateSpecialty(newSpecialty: string): void {
    this.specialty = newSpecialty;
}
}
