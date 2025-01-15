// src/interfaces/IDoctor.ts
export interface IDoctor {
    id: number;
    name: string;
    specialty: string;
    yearsOfExperience: number;

    getDoctorDetails(): string;
    updateSpecialty(newSpecialty: string): void;
}
