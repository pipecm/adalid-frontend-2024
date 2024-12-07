import { hospitalServices } from './data.js';
import { NAME_REGEX, EMAIL_REGEX, PHONE_REGEX } from './constants.js'

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

let servicesList = document.getElementById('services-grid');

hospitalServices
    .filter(serviceItem => serviceItem.available)
    .forEach(serviceItem => servicesList.appendChild(getServiceItem(serviceItem)));
