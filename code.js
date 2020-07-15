document.querySelector("#items").addEventListener("wheel", event => {
    if(event.deltaY < 0){
        console.log("up")
        event.target.scrollBy(300,0)
    }else{
        console.log("down")
        event.target.scrollBy(-300,0)

    }
})

document.querySelector("#items").addEventListener("wheel", time)
function time(north){
    if(north == 1){
        document.getElementById("items").scrollBy(300,0)
    }else{
        document.getElementById("items").scrollBy(-300,0)
    }
}

