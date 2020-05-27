let soundNames = 'pop boing zap gameover'
let sounds = {}

function createSounds() {
    let names = soundNames.split(' ')
    for (let name of names) {
        sounds[name] = new Howl({
            src: [`audio/${name}.mp3`]
        })
    }
}

export function playSound(name) {
    let sound = sounds[name]
    if (!sound) return
    sound.play()
}

createSounds()
