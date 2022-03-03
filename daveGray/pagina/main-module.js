export default function playGuitar() {
    return "Playing 🎸🎸";
}

export const shredding = () => {
    return "shredding licks 🎵";
};

export const plucking = () => {
    return "Plucking strings 🎶";
};

export class User {
    constructor(email, name) {
        this._email = email;
        this._name = name;
    }
    greeting() {
        return `Que onda, soy yo ${this._name} 🔥🔥`;
    }
}

// export default playGuitar
// export {shredding, plucking}