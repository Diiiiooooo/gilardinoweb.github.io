let logo = document.querySelector(".logo img");
let popup = document.getElementById("popup")
let desc = document.getElementById("desc")
let close = document.getElementById("close")

async function fetchDino(){
    try{
        const res = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
        const data = await res.json()
        return data;
    }catch (error){
        console.error("Error fetching, ", error)
    }
}

fetchDino().then(data => {
    let random = Math.floor(Math.random() * (data.length - 1 + 1) + 1);

    logo.addEventListener("click", () => {
        // popup.style.display = "block"
        popup.style.filter = "opacity(1)"
        if(data && data.length > 0){
            desc.innerHTML = `Fun Fact: \n ${data[random].Name}, ${data[random].Description}` 
            random = (random + 1) % data.length
        }
    })
})


close.addEventListener("click", () => {
    // popup.style.display = "none"
    popup.style.filter = "opacity(0)"
})

