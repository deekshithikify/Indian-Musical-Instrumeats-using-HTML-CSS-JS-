const IMLlength =document.querySelectorAll(".IML").length;
console.log(IMLlength);

for (let i = 0; i < IMLlength; i++) {
    document.querySelectorAll(".IML")[i].addEventListener("click",function(e){
        makeNoise(this.innerHTML);
        animatingButtons(this.innerHTML);
    });
}

function makeNoise(key) {
    switch (key) {
        case "Manjira":
            const manjira = new Audio("sounds/manjira.mp3");
            manjira.play();
            break;
            case "Damaru":
                const damaru = new Audio("sounds/damaru.mp3");
                damaru.play();
                break;
                case "Shankha":
                    const shankha = new Audio("sounds/shankha.mp3");
                    shankha.play();
                    break;
                    case "Pungi":
                        const pungi = new Audio("sounds/pungi.mp3");
                        pungi.play();
                        break;
                        case "Ektara":
                            const ektara = new Audio("sounds/ektara.mp3");
                            ektara.play();
                            break;
                            case "Chimta":
                                const chimta = new Audio("sounds/chimta.mp3");
                                chimta.play();
                                break;
                                case "Jaltarang":
                                    const jaltharang = new Audio("sounds/jal tharang.mp3");
                                    jaltharang.play();
                                    break;
                                    default:
                                        console.log(key);
                                    
    }
}

function animatingButtons(key) {
    const activeButton = document.querySelector(`${key}`);
    console.log(activeButton);
    activeButton.classList.add("pressed");
 
    setTimeout(()=> {
        activeButton.classList.remove("pressed");
    },500);
}