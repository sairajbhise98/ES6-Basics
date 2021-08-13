const a = 50;
// If we try to assign the new value to a 
// it will show us the error
// a = 5 ; will show us the error

// lets try another example
let LANGUAGES = ['Java', 'Python', 'JavaScript', 'Ruby'];
// LANGUAGES = 'Perl'; // It will show us the error
// But push method will work fine

LANGUAGES.push('Perl')
console.log(LANGUAGES);
LANGUAGES.pop('Java');
console.log(LANGUAGES);