/* Implementa una función que use currying para calcular el costo total de los servicios de
un paciente en función del número de consultas realizadas y el precio de cada consulta. */
export const getTotalCost = (rates) => (appointments) => {
    let subtotal = appointments.reduce((totalCost, appt) => totalCost + parseInt(rates.get(appt.doctorId)), 0);
    return applyDiscounts(subtotal, appointments.length);
};

/* Usa la función flecha para simplificar la sintaxis en una función que calcule el tiempo
promedio de espera de los pacientes. */
export const calculateAverageWaitingTime = (appointments) => {
    if (appointments.length === 0) {
        return 0;
    }
    return (appointments.reduce((totalTime, appt) => totalTime + appt.waitingTimeInMinutes, 0)) / appointments.length;
};

/* Implementa la recursión para calcular de forma recursiva el total de horas de consulta
de un doctor a lo largo de la semana. */
export const calculateTotalHours = (appointments) => {
    if (appointments.length === 0) {
        return 0;
    } else if (appointments.length === 1) {
        return appointments[0].apptHours;
    }
    let currentAppt = appointments.shift();
    return currentAppt.apptHours + calculateTotalHours(appointments);
};

/* Integra composición de funciones para aplicar descuentos a los costos de consultas
en base a la cantidad de consultas realizadas. */
export const applyDiscounts = (subtotal, numberOfAppts) => {
    const tenPerCentDiscount = (cost) => cost * 0.9;
    if (numberOfAppts >= 2 && numberOfAppts < 3) {
        return tenPerCentDiscount(subtotal);
    } else if (numberOfAppts >= 3) {
        return tenPerCentDiscount(tenPerCentDiscount(subtotal));
    } else {
        return subtotal;
    }
};

/* Implementa el manejo de errores utilizando try/catch en las funciones asíncronas, y
define un callback que se invoque al fallar una petición simulada. */
export const processAsyncData = (retrieveData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let response = JSON.parse(retrieveData());
            if (response) {
                resolve(response);
            } else {
                reject("Error al obtener la información");
            }
        }, 5000);
    });
};
