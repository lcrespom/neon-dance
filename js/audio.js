const sounds = {
    pop: createSound('pop'),
    boing: createSound('boing'),
    zap: createSound('zap')
}

function createSound(name) {
    return new Howl({
        src: [`audio/${name}.mp3`]
    })
}

export function playSound(name) {
    let sound = sounds[name]
    if (!sound) return
    sound.play()
}