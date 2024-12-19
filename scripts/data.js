export const hospitalServices = [
    {
        name: "Urgencias",
        description: "Atención rápida, inmediata y eficiente según las necesidades del paciente",
        imageSource: "images/urgency.webp",
        available: true
    },
    {
        name: "Laboratorio Clínico",
        description: "Realizamos más de 50 tipos de exámenes médicos, usando tecnología de última generación",
        imageSource: "images/laboratory.webp",
        available: true
    },
    {
        name: "Maternidad",
        description: "Contamos con la más moderna infraestructura para recibir al nuevo miembro de su familia.",
        imageSource: "images/maternity.jpg",
        available: true
    },
    {
        name: "Imagenología",
        description: "Exámenes de radiología, ecografía, resonancia magnética y otros",
        imageSource: "images/radiology.jpg",
        available: true
    },
    {
        name: "Oftalmología",
        description: "Cuidamos de la salud de sus ojos",
        imageSource: "images/oftalmology.jpg",
        available: false
    }
];

/* Uso de objetos anidados */

export const hospitalDoctors = [
    {
        id: 1,
        name: "Jack Johnson",
        imageSource: "images/medico_01.jpg",
        specialty: "Medicina General",
        experience: "Vasta experiencia como médico general, más de 10 años trabajando para nuestro hospital",
        yearsOfExperience: 10,
        rate: {
            cost: 25000,
            currency: "CLP"
        },
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false
        },
        contact : {
            phone: "+569 2432 5432",
            email: "jackjohnson@hospitalsanitario.com"
        }
    },
    {
        id: 2,
        name: "Kenny Bell",
        imageSource: "images/medico_02.jpg",
        specialty: "Oftalmología",
        experience: "Experto en el tratamiento de miopía y astigmatismo",
        yearsOfExperience: 4,
        rate: {
            cost: 30000,
            currency: "CLP"
        },
        availability: {
            monday: false,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true
        },
        contact : {
            phone: "+569 6434 8864",
            email: "kennybell@hospitalsanitario.com"
        }
    },
    {
        id: 3,
        name: "Elsa Karina",
        imageSource: "images/medico_03.jpg",
        specialty: "Traumatología",
        experience: "Especialista en el tratamiento de lesiones musculares",
        yearsOfExperience: 5,
        rate: {
            cost: 15000,
            currency: "CLP"
        },
        availability: {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: false,
            friday: true,
            saturday: true,
            sunday: true
        },
        contact : {
            phone: "+569 2243 1544",
            email: "elsakarina@hospitalsanitario.com"
        }
    },
    {
        id: 4,
        name: "Paz Guerra",
        imageSource: "images/medico_04.webp",
        specialty: "Cardiología",
        experience: "Experimentada en el tratamiento de afecciones al corazón",
        yearsOfExperience: 8,
        rate: {
            cost: 25000,
            currency: "CLP"
        },
        availability: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: false,
            saturday: false,
            sunday: true
        },
        contact : {
            phone: "+569 9087 6322",
            email: "pazguerra@hospitalsanitario.com"
        }
    }
];

/* Datos de citas médicas */
export const appointments = [
    {
        id: 1,
        date: "2025-01-04",
        startingTime: "10:00:00",
        apptHours: 1,
        waitingTimeInMinutes: 20,
        patient: "Juanito",
        doctorId: 1
    },
    {
        id: 2,
        date: "2025-01-03",
        startingTime: "12:00:00",
        apptHours: 1,
        waitingTimeInMinutes: 25,
        patient: "Pedrito",
        doctorId: 4
    },
    {
        id: 3,
        date: "2025-01-03",
        startingTime: "15:00:00",
        apptHours: 2,
        waitingTimeInMinutes: 15,
        patient: "Gabriela",
        doctorId: 2
    },
    {
        id: 4,
        date: "2025-01-05",
        startingTime: "10:00:00",
        apptHours: 1,
        waitingTimeInMinutes: 15,
        patient: "Juanito",
        doctorId: 1
    },
    {
        id: 5,
        date: "2025-01-06",
        startingTime: "10:00:00",
        apptHours: 1,
        waitingTimeInMinutes: 10,
        patient: "Juanito",
        doctorId: 1
    },
    {
        id: 6,
        date: "2025-01-07",
        startingTime: "10:00:00",
        apptHours: 1,
        waitingTimeInMinutes: 15,
        patient: "Juanito",
        doctorId: 1
    },
    {
        id: 7,
        date: "2025-01-08",
        startingTime: "15:00:00",
        apptHours: 2,
        waitingTimeInMinutes: 15,
        patient: "Gabriela",
        doctorId: 2
    },
];

/* Datos de solicitudes de contacto */
export const contactRequests = [
    {
        id: 1,
        name: "Carlos",
        email: "carlos@mail.com",
        subject: "Consulta convenio",
        message: "Estimados, quiero saber si tiene convenio con Fonasa. Atte, Carlos"
    },
    {
        id: 2,
        name: "Laura",
        email: "laura@mymail.com",
        subject: "Resonancia magnetica",
        message: "Estimados, les escribo para saber si el hospital ofrece examenes de resonancia magnetica. Saludos, Laura"
    },
    {
        id: 3,
        name: "Fabian",
        email: "fabian@correo.com",
        subject: "Oportunidades laborales",
        message: "Buenos días, les escribe Fabian, TENS con 1 año de experiencia, y tengo interes en trabajar en el hospital. Cordialmente, Fabian"
    }
];

/* Pacientes */
export const hospitalPatients = [
    {
        id: 1,
        name: "Carlos"
    },
    {
        id: 2,
        name: "Fabian"
    },
    {
        id: 3,
        name: "Laura"
    },
    {
        id: 4,
        name: "Claudia"
    }
];

/* Datos de cirugías */
export const surgeries = [
    {
        id: 1,
        surgeonId: 5,
        type: "Cirugia bariatrica"
    },
    {
        id: 2,
        surgeonId: 6,
        type: "Cirugia ocular lasik"
    },
    {
        id: 3,
        surgeonId: 5,
        type: "Cirugia bariatrica"
    },
    {
        id: 4,
        surgeonId: 7,
        type: "Cirugia al torax"
    }
];

export const hospitalDoctorsAsJson = () => {
    return JSON.stringify(hospitalDoctors);
};