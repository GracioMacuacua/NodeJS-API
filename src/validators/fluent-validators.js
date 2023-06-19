'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = async (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = async (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = async (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLength = async (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message })
}

ValidationContract.prototype.isEmail = async (value, message) => {
    var reg = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!reg.test(value))
        errors.push({ message: message});
}

ValidationContract.prototype.errors = () => {
    return errors;
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = async () => {
    return errors.length === 0;
}

module.exports = ValidationContract;