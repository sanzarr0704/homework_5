const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const euro = document.querySelector("#euro")


som.addEventListener("input", ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener("load", ()=>{
        console.log(request.response)
        const data = JSON.parse(request.response)
        usd.value = (som.value / data.usd).toFixed(2)
    })
})
usd.addEventListener("input",()=>{
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener("load", ()=>{
        console.log(request.response)
        const data = JSON.parse(request.response)
        euro.value = (usd.value / data.euro).toFixed(2)
    })
})

euro.addEventListener("input",()=>{
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener("load", ()=>{
        console.log(request.response)
        const data = JSON.parse(request.response)
        som.value = (euro.value / data.som).toFixed(2)
    })
})


som.addEventListener("input", ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener("load", ()=>{
        console.log(request.response)
        const data = JSON.parse(request.response)
        euro.value = (som.value / data.euro).toFixed(2)
    })
})

const convert = (elem,target,isTrue) =>{
    elem.addEventListener("input", ()=>{
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", ()=>{
            const data = JSON.parse(request.response)
            if (isTrue){
                target.value = (elem.value / data.usd).toFixed(2)
            }else{
               target.value = (elem.value / data.usd).toFixed(2)
            }
            elem.value === "" ? (target.value = "") : null
        })
    })
}

convert(som,usd,13)
convert(usd,som)

const convert2 = (elem,target,target2,isTrue) =>{
    elem.addEventListener("input", ()=>{
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", ()=>{
            const data = JSON.parse(request.response)
            if (isTrue){
                target.value = (elem.value / data.euro).toFixed(2)
            }else{
               target.value = (elem.value / data.euro).toFixed(2)
            }
            elem.value === "" ? (target.value = "") : null
        })
    })
}
convert2(som,usd,euro,7)
convert2(euro,usd,som)