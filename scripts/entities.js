/* Implementa una clase Doctor con las propiedades nombre, especialidad, y años de experiencia. */

export class Doctor {

    #yearsOfExperience;

    constructor(id, name, specialty, yearsOfExperience) {
        this.id = id;
        this.name = name;
        this.specialty = specialty;
        this.#yearsOfExperience = yearsOfExperience;
    }

    /* Añade un método para mostrar la información de cada doctor y otro para calcular el total de pacientes atendidos por el doctor. */

    getDoctorInfo() {
        return `El doctor ${this.name} es un ${this.specialty} con ${this.#yearsOfExperience} años de experiencia`;
    }

    getPatientsAttended(appointmentsData) {
        if (!appointmentsData) {
            return 0;
        }

        return appointmentsData
                .filter(appt => appt.doctorId === this.id)
                .length;
    }

    /* Implementa el encapsulamiento en la clase, protegiendo la propiedad de años de experiencia mediante un getter y un setter. */

    setYearsOfExperience(yearsOfExperience) {
        this.#yearsOfExperience = yearsOfExperience;
    }

    getYearsOfExperience() {
        return this.#yearsOfExperience;
    }
};

/* Crea una subclase de Doctor, por ejemplo Cirujano, que extienda las funcionalidades de la clase base. */

export class Cirujano extends Doctor {
    constructor(id, name, yearsOfExperience) {
        super(id, name, "Cirujano", yearsOfExperience);
    }

    /* Usa el polimorfismo para sobrescribir un método en la subclase Cirujano que calcule
    el número de operaciones realizadas en lugar de consultas. */

    getPatientsAttended(surgeriesData) {
        if (!surgeriesData) {
            return 0;
        }
        
        return surgeriesData
                .filter(surgery => surgery.surgeonId === this.id)
                .length;
    }
}