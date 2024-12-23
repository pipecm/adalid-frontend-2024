import { hospitalServices, hospitalDoctors, appointments, contactRequests, hospitalPatients, hospitalDoctorsAsJson, surgeries } from './data.js';
import { NAME_REGEX, EMAIL_REGEX, PHONE_REGEX } from './constants.js'
import { Stack, Queue } from './structures.js'
import { calculateAverageWaitingTime, calculateTotalHours, getTotalCost, processAsyncData, applyDiscounts } from './functions.js'
import { Doctor, Cirujano } from './entities.js'

const htmlName = location.href.split("/").pop();

/* Módulo 3 - Taller 2 */

const register = () => {
    let name;
    let email;
    let phone;

    try {
        name = request(getName);
        email = request(getEmail);
        phone = request(getPhone);
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
    
    console.log(`Usuario registrado: ${name}`);
    console.log(`Email registrado: ${email}`);
    console.log(`Teléfono registrado: ${phone}`);
}

const request = (requestFunction) => {
    let value;
    let cancel = false;

    while (!value) {
        try {
            value = requestFunction();
            if (value === null) {
                cancel = true;
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }

        if (cancel) {
            throw new Error('Registro cancelado');
        }
    }
    return value;
};

const getField = (promptMessage, validationRegex, errorMessage) => {
    let value = prompt(promptMessage);
    console.log(`Valor ingresado: ${value}`);

    if (value === null) {
        return null;
    }

    if (!value || !validationRegex.test(value)) {
        throw new Error(errorMessage);
    }
    return value;
};

const getName = () => getField('Bienvenido! Ingrese su nombre', NAME_REGEX, 'Nombre no válido, favor ingresarlo nuevamente');
const getEmail = () => getField('Mucho gusto, indique su correo electrónico', EMAIL_REGEX, 'Email no válido, favor ingresarlo nuevamente');
const getPhone = () => getField('Indique su número telefónico', PHONE_REGEX, 'Teléfono no válido, favor ingresarlo nuevamente');

const getServiceItem = (serviceItem) => {
    let service = document.createElement('div');
    service.setAttribute('class', 'service');

    let serviceImage = document.createElement('img');
    serviceImage.setAttribute('class', 'service__img');
    serviceImage.setAttribute('src', serviceItem.imageSource);
    serviceImage.setAttribute('alt', serviceItem.name);
    serviceImage.setAttribute('title', serviceItem.name);

    let serviceTitle = document.createElement('p');
    serviceTitle.setAttribute('class', 'service__department');
    serviceTitle.innerHTML = serviceItem.name;

    let serviceCaption = document.createElement('p');
    serviceCaption.innerHTML = serviceItem.description;

    service.appendChild(serviceImage);
    service.appendChild(serviceTitle);
    service.appendChild(serviceCaption);

    return service;
};

if (htmlName == 'index.html' || !htmlName) {
    let servicesList = document.getElementById('services-grid');

    hospitalServices
        .filter(serviceItem => serviceItem.available)
        .forEach(serviceItem => servicesList.appendChild(getServiceItem(serviceItem)));
}

/* Módulo 3 - Laboratorio Virtual Nº 1 */

/* Uso de destructuring y merge */

let drJackJohnson = { name: hospitalDoctors[0].name, ...hospitalDoctors[0].contact };
console.log(drJackJohnson);

/* Clonación: Crea una copia de un objeto JSON y modifícalo sin afectar el original */

let oftalmologyService = JSON.parse(JSON.stringify(hospitalServices[4]));
console.log(`Oftalmologia (antes de cambiar): ${JSON.stringify(oftalmologyService)}`);
oftalmologyService.available = true;
oftalmologyService.description = "Cuidamos de la salud y del pleno bienestar de su vista";
console.log(`Oftalmologia (después de cambiar): ${JSON.stringify(oftalmologyService)}`);
console.log(`Oftalmologia (original): ${JSON.stringify(hospitalServices[4])}`);

/* Genera lista de doctores disponibles */

const getDoctorItem = (doctorItem) => {
    let doctor = document.createElement('div');
    doctor.setAttribute('class', 'doctor');

    let doctorImage = document.createElement('img');
    doctorImage.setAttribute('class', 'doctor__photo');
    doctorImage.setAttribute('src', doctorItem.imageSource);
    doctorImage.setAttribute('alt', doctorItem.name);
    doctorImage.setAttribute('title', doctorItem.name);

    let doctorTitle = document.createElement('p');
    doctorTitle.setAttribute('class', 'doctor__name');
    doctorTitle.innerHTML = doctorItem.name;

    let doctorSpecialty = document.createElement('p');
    doctorSpecialty.setAttribute('class', 'doctor__specialty');
    doctorSpecialty.innerHTML = doctorItem.specialty;

    let doctorExperience = document.createElement('p');
    doctorExperience.setAttribute('class', 'doctor__experience');
    doctorExperience.innerHTML = doctorItem.experience;

    doctor.appendChild(doctorImage);
    doctor.appendChild(doctorTitle);
    doctor.appendChild(doctorSpecialty);
    doctor.appendChild(doctorExperience);

    return doctor;
};

/* Muestra lista de doctores en pantalla (staff.html) */

if (htmlName == 'staff.html') {
    console.log("Loading staff");
    let doctors = document.getElementById('staff-grid');
    hospitalDoctors.forEach(doctorItem => doctors.appendChild(getDoctorItem(doctorItem)));
}

/* Stringify */

console.log(JSON.stringify(hospitalDoctors));

/* Agregar doctor a la lista */

const addDoctorName = (doctorNames, newDoctorName) => {
    doctorNames.push(newDoctorName);
};

/* Quitar doctor de la lista */

const removeDoctorName = (doctorNames, removedDoctorName) => {
    let indexToRemove = doctorNames.indexOf(removedDoctorName);
    if (indexToRemove >= 0) {
        doctorNames.splice(indexToRemove, 1);
    } else {
        console.log(`${removedDoctorName} no existe en el arreglo`);
    }
};

/* Algoritmo de búsqueda de doctores (se retorna el índice que ocupa en el array) */

const searchDoctorName = (doctorNames, nameToSearch) => {
    let nameFound = doctorNames.filter(drName => drName == nameToSearch)[0];
    if (nameFound) {
        console.log(`${nameFound} encontrado`);
    } else {
        console.log(`${nameToSearch} no encontrado`);
    }
    return nameFound ? doctorNames.indexOf(nameFound) : undefined;
};

/* Algoritmo para ordenar doctores según años de experiencia (ascendente), basado en algoritmo QuickSort */

const sortDoctorsByYearsOfExperience = (doctors) => {
    if (doctors.length <= 1) {
        return doctors;
    }

    let pivot = doctors[0];
    let leftHalf = [];
    let rightHalf = [];

    for (let i = 1; i < doctors.length; i++) {
        if (doctors[i].yearsOfExperience < pivot.yearsOfExperience) {
            leftHalf.push(doctors[i]);
        } else {
            rightHalf.push(doctors[i]);
        }
    }

    return [...sortDoctorsByYearsOfExperience(leftHalf), pivot, ...sortDoctorsByYearsOfExperience(rightHalf)];
};

/* Uso de estructuras de datos */

/* Lista inicial de doctores */
let doctorNames = hospitalDoctors.map(doctor => doctor.name);
console.log(`Estado inicial: ${doctorNames}`);

/* Añadir doctor a la lista */
addDoctorName(doctorNames, 'Juanito Perez');
console.log(`Luego de añadir nuevo doctor: ${doctorNames}`);

/* Borrar doctor de la lista */
removeDoctorName(doctorNames, 'Kenny Bell');
console.log(`Luego de borrar doctor que existe en la lista: ${doctorNames}`);
removeDoctorName(doctorNames, 'John Jackson');
console.log(`Luego de borrar doctor que no existe en la lista: ${doctorNames}`);

/* Buscar doctor */
let indexPazGuerra = searchDoctorName(doctorNames, 'Paz Guerra');
let indexJohnJackson = searchDoctorName(doctorNames, 'John Jackson');
console.log(`Valor indexPazGuerra: ${indexPazGuerra}`);
console.log(`Valor indexJohnJackson: ${indexJohnJackson}`);

/* Obtener arreglo ordenado por años de experiencia (ascendente) */
let sortedDoctors = sortDoctorsByYearsOfExperience(hospitalDoctors);
console.log(`Doctores ordenados por años de experiencia:`);
console.log(sortedDoctors.map(doc => `${doc.name}:${doc.yearsOfExperience}`));

/* Pila para gestión de reservas */
const appointmentStack = new Stack();
appointments.forEach(appt => {
    console.log(`Apilando cita ${appt.id} del paciente ${appt.patient} con el doctor ${appt.doctor} el ${appt.date} a las ${appt.time}`);
    appointmentStack.push(appt);
});

/* Estado actual de la pila */
console.log(`Pila de citas actual: ${appointmentStack.data.map(appt => appt.id)}`);

/* Obtener última cita agendada */
console.log(`Ultima cita agendada:`);
console.log(appointmentStack.pop());

/* Pila despues de pop() */
console.log(`Pila de citas actual: ${appointmentStack.data.map(appt => appt.id)}`);

/* Obtener próxima cita a atender (sin modificar la pila) */
console.log(`Proxima cita a atender:`);
console.log(appointmentStack.getLastItem());

/* Pila despues de consultar proxima cita */
console.log(`Pila de citas actual: ${appointmentStack.data.map(appt => appt.id)}`);

/* Cola para solicitudes de contacto */
const contactQueue = new Queue();
contactRequests.forEach(request => {
    console.log(`Encolando solicitud de contacto ${request.id} de ${request.name} consultando sobre ${request.subject}`);
    contactQueue.enqueue(request);
});

/* Estado actual de la cola */
console.log(`Cola de solicitudes actual: ${contactQueue.data.map(request => request.id)}`);

/* Atender primera solicitud en la cola */
console.log(`Atendiendo solicitud:`);
console.log(contactQueue.dequeue());

/* Cola luego de atender solicitud */
console.log(`Cola de solicitudes actual: ${contactQueue.data.map(request => request.id)}`);

/* Obtener próximo requerimiento en ser atendido, sin modificar la cola */
console.log(`Proxima solicitud:`);
console.log(contactQueue.getFirstItem());

/* Cola luego de atender consultar proximo requerimiento */
console.log(`Cola de solicitudes actual: ${contactQueue.data.map(request => request.id)}`);

/* Módulo 3 - Laboratorio Virtual Nº 2 */

/* Uso de función con currying para calcular costos totales de paciente Juanito + composición de funciones */
let patients = Array.from(new Set(appointments.map(appt => appt.patient)));
let doctorRates = new Map(hospitalDoctors.map(doc => [doc.id, doc.rate.cost]));
let costPerPatient = patients.map(patient => {
    let cost = getTotalCost(doctorRates)(appointments.filter(appt => appt.patient == patient));
    return { patient: patient, totalCost: cost };
});
console.log(`Costos por paciente`);
console.log(costPerPatient);

/* Uso de función para calcular espera promedio */
let avgWaitingTime = calculateAverageWaitingTime(appointments);
console.log(`Tiempo promedio de espera: ${avgWaitingTime} minutos`);

/* Uso de función recursiva para calcular horas totales */
let totalHoursPerDr = hospitalDoctors.map(doc => {
    let totalHours = calculateTotalHours(appointments.filter(appt => appt.doctorId === doc.id))
    return { doctor: doc.name, totalHours: totalHours };
});

console.log(`Horas totales por doctor`);
console.log(totalHoursPerDr);


/* Implementa un listener para capturar el envío del formulario 
y muestra un mensaje de confirmación. */
let contactForm = document.getElementById("contact_form");
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let contactRequest = {
        id: contactRequests.length + 1,
        name: document.getElementById("form_name").value,
        email: document.getElementById("form_email").value,
        subject: document.getElementById("form_subject").value,
        message: document.getElementById("form_message").value
    };
    console.log(contactRequest);
    alert(`Estimado ${contactRequest.name}, muchas gracias por contactarse con el hospital. Pronto le responderemos`);
});

/* Dispara un evento personalizado que simule la llegada de un nuevo paciente,
mostrando una notificación en la página. */
let randomPatient = hospitalPatients[Math.floor(Math.random() * hospitalPatients.length)];
setTimeout(() => alert(`El paciente ${randomPatient.name} ha llegado a atenderse al hospital`), 10000);

/* Implementa una función async/await para simular una llamada a una API REST que
obtenga los datos de los doctores. Usa Promise para manejar los casos de éxito o
fallo. */
const getAsyncData = async (retrieveData) => {
    let resultado;
    try {
        console.log("Iniciando proceso con async/await...");
        resultado = await processAsyncData(retrieveData);
    } catch (error) {
        console.error(error);
    }
    console.log("Finalizando proceso con async/await...");
    console.log(resultado);
};

getAsyncData(hospitalDoctorsAsJson);

/* POO en JavaScript */
/* Uso de clase Doctor */
const drJohnson = new Doctor(hospitalDoctors[0].id, hospitalDoctors[0].name, hospitalDoctors[0].specialty, hospitalDoctors[0].yearsOfExperience);
console.log(drJohnson.getDoctorInfo());
console.log(`El doctor ${drJohnson.name} atendio a ${drJohnson.getPatientsAttended(appointments)} pacientes`);
console.log(`El doctor ${drJohnson.name} tiene ${drJohnson.getYearsOfExperience()} años de experiencia`);
drJohnson.setYearsOfExperience(11);
console.log(`Ahora el doctor ${drJohnson.name} tiene ${drJohnson.getYearsOfExperience()} años de experiencia`);

/* Uso de clase Cirujano */
const surgeonHardy = new Cirujano(5, "Jeff Hardy", 4);
console.log(surgeonHardy.getDoctorInfo());
console.log(`El cirujano ${surgeonHardy.name} realizó ${surgeonHardy.getPatientsAttended(surgeries)} cirugías`);
