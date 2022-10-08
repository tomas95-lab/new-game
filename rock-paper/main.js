
const gameZone = document.querySelector(".gamezone")
const scissor = document.querySelector(".scissor")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scoreCount = document.getElementById("score")

const closeBtn = document.getElementById("close")
const rulesModal = document.querySelector(".rules-modal")
const rulesBtn = document.querySelector("#rules-button")

let score = 0


const background = document.createElement("div")

rulesBtn.addEventListener("click", (e) => {
    gameZone.appendChild(background)
    rulesModal.style.display = "flex"

    background.style.position = "absolute"
    background.style.width = "100%"
    background.style.height = "100%"
    background.style.background = "rgba(0, 0, 0, 0.274)"
    background.style.inset = "0px"

})
closeBtn.addEventListener("click", (e) => {
    rulesModal.style.display = "none"
    gameZone.removeChild(background)
})

let pcVal = [ 0, 1, 2 ]
var yourSelection

scissor.value = 0
rock.value = 1
paper.value = 2

let res = false
const alert = document.createElement("div")

function validation(element) {
    element.addEventListener("click", (e) => {
        yourSelection = element.value
        let pcSelect = pcVal[ Math.floor(Math.random() * 3) ]

        if (yourSelection == pcSelect) {
            alert.innerHTML = "A tie"
            res = "tie"
        }

        else if (yourSelection == 0 && pcSelect == 2) {
            alert.innerHTML = "You won"
            score += 1
            res = true
        }

        else if (yourSelection == 1 && pcSelect == 0) {
            alert.innerHTML = "You won"
            score += 1
            res = true
        }
        else if (yourSelection == 2 && pcSelect == 1) {
            alert.innerHTML = "You won"
            score += 1
            res = true

        }
        else {
            console.log("you lose")
            alert.innerHTML = "You lose"
            res = false
        }

        scoreCount.innerHTML = score
        console.log(yourSelection, pcSelect)

        show(yourSelection, pcSelect, yourSelection, pcSelect)
    })
}


function show(user, pc, Class, ClassP) {
    const pcContainer = document.createElement("div")
    const userContainer = document.createElement("div")
    alert.classList.add("alert")

    const container = document.createElement("section")
    gameZone.appendChild(container)

    pcContainer.classList.add("pcSelect")
    userContainer.classList.add("userSelect")

    gameZone.removeChild(rock)
    gameZone.removeChild(paper)
    gameZone.removeChild(scissor)

    container.appendChild(userContainer)
    container.appendChild(alert)
    container.appendChild(pcContainer)

    container.classList.add("container")

    const h2Pc = document.createElement("h2")
    pcContainer.appendChild(h2Pc)
    h2Pc.innerHTML = "The house picked"

    const h2Pl = document.createElement("h2")
    userContainer.appendChild(h2Pl)
    h2Pl.innerHTML = "You picked"

    gameZone.style.width = "100%"

    const userImgContainer = document.createElement("div")
    const pcImgContainer = document.createElement("div")

    pcImgContainer.classList.add("imgContainer")
    userImgContainer.classList.add("imgContainer")

    pcContainer.appendChild(pcImgContainer)
    userContainer.appendChild(userImgContainer)

    const imagePl = document.createElement("img")
    const imagePc = document.createElement("img")

    userImgContainer.appendChild(imagePl)
    pcImgContainer.appendChild(imagePc)

    imagePl.src = `./images/icon-${user}.svg`
    imagePc.src = `./images/icon-${pc}.svg`
    userImgContainer.classList.add(`imgContainer${Class}`)
    pcImgContainer.classList.add(`imgContainer${ClassP}`)


    const tryAgain = document.createElement("button")
    container.appendChild(tryAgain)
    tryAgain.innerHTML = "Try again"

    tryAgain.addEventListener("click", (e) => {

        gameZone.appendChild(scissor)
        gameZone.appendChild(paper)
        gameZone.appendChild(rock)

        gameZone.removeChild(container)


        gameZone.style.width = "350px"
        gameZone.style.gap = "50px 70px"
    })



    if (res) {
        pcImgContainer.classList.remove("won")
        userImgContainer.classList.add("won")
    }
    else {
        userImgContainer.classList.remove("won")

        pcImgContainer.classList.add("won")

    }
    if (res == "tie") {
        pcImgContainer.classList.remove("won")
        userImgContainer.classList.remove("won")
    }

}
validation(rock)
validation(paper)
validation(scissor)