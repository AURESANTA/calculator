const Utilisateur = require('.');
jest.mock('.');

beforeEach(() => {
    Utilisateur.mockClear();
});

it(`Check si l'utilisateur a été appelé`, function () {
    new Utilisateur({
        email: 'auretest@gmail.com',
        nom: 'Santana',
        prenom: 'Aurelien',
        age: 24
    });

    expect(Utilisateur).toHaveBeenCalledTimes(1);
});

it(`Check si un utilisateur est créé avec de bons paramètres`, function () {
    const utilisateur = new Utilisateur({
        email: 'auretest@gmail.com',
        nom: 'Santana',
        prenom: 'Aurelien',
        age: 24
    });

    expect(utilisateur).toBeDefined();
});

it(`Check si on ne met pas d'arguments`, function () {
    const utilisateur = new Utilisateur({});

    expect(() => utilisateur).toThrow(); // 
});

it(`Check si on ne définit pas le nom`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'auretest@gmail.com',
        prenom: 'Aurelien',
        age: 24
    });

    expect(utilisateur).toThrow(); 
});

it(`Check si on ne définit pas le prénom`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'auretest@gmail.com',
        nom: 'Santana',
        age: 24
    });

    expect(utilisateur).toThrow(); 
});


it(`Check si l'adresse mail n'a pas le bon format`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'ulysse.arnaud_at_exemple_dot_fr',
        prenom: 'Ulysse',
        nom: 'ARNAUD',
        age: 21
    });

    expect(utilisateur).toThrow();
});

it(`Check si l'age est en dessous de 13 ans`, function () {
    const utilisateur = () => new Utilisateur({
        email: 'auretest@gmail.com',
        prenom: 'Aurelien',
        nom: 'Santana',
        age: 12
    });

    expect(utilisateur).toThrow();
});


