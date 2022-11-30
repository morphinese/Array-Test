const questions = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
]
const rightVersions = [a3, a1, a1, a1, a2]

const image = document.getElementById('imageQuestion')
const answerBtn = document.getElementById('btn')

let imageNumber = 0
let result = 0

answerBtn.addEventListener('click', checkRigthAnswer)

function checkRigthAnswer() {
    if (image.src.includes(questions[imageNumber])) {
        imageNumber++
    }

    if (rightVersions[imageNumber - 1].checked) {
        alert('Відповідь вірна, тримай печиво')
        result++
    } else {
        alert('Відповідь невірна, ти не отримав печива!')
    }

    if (imageNumber === questions.length) {
        alert(`Ви зібрали: ${result} печив`)
        alert('Почнемо знову!')
        imageNumber = 0
    }

    image.src = questions[imageNumber]
    imageNumber++
}
