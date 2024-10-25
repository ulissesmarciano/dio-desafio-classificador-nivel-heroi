const heros = [
    { name: "Heroi1", xp: 500 },
    { name: "Heroi2", xp: 1500 },
    { name: "Heroi3", xp: 3000 },
    { name: "Heroi4", xp: 6000 },
    { name: "Heroi5", xp: 7500 },
    { name: "Heroi6", xp: 8500 },
    { name: "Heroi7", xp: 9500 },
    { name: "Heroi8", xp: 10500 }
];

function exibeTipoXP(xp) {
    switch (true) {
        case (xp < 1000):
            return 'Ferro'
        case (xp > 1000 && xp <= 2000):
            return 'Bronze'
        case (xp > 2000 && xp <= 5000):
            return 'Prata'
        case (xp > 5000 && xp <= 7000):
            return 'Ouro'
        case (xp > 7001 && xp <= 8000):
            return 'Platina'
        case (xp > 8001 && xp <= 9000):
            return 'Ascendente'
        case (xp > 9001 && xp <= 10000):
            return 'Imortal'
        case (xp > 10001):
            return 'Radiante'
        default:
            return 'XP inválido'
    }
}



for (let i = 0; i < heros.length; i++) {
    const hero = heros[i];
    const heroLevel = exibeTipoXP(hero.xp)
    console.log(`${hero.name} tem ${hero.xp} XP e está no nível ${heroLevel}.`)
}