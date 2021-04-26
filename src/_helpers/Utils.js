export const isNumeric = (validatedInput) => /^[0-9]+$/.test(validatedInput);

export const isCorrectEmail = (validatedInput) => /^\S+@\S+\.\S+$/.test(validatedInput);

export const editDate = (dateString) => dateString.split("-").reverse().join(".");
