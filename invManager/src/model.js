const model = {
    playerInventory:[

    ],
    loot:[

    ],
    state:{
        showBag:true,
    },
    itemDict:{
        "Potion":{
            description: "Heals 20 hp",
            sprite:{
                sx:102,
                sy:36
        }},
        "PokeBall":{
            description: "Ball used to catch pokemon",
            sprite:{
                sx:102,
                sy:0
        }},
        "Nanap-berry":{
            description: "Cures paralysis",
            sprite:{
                sx:3,
                sy:332
        }},
        "x-Attack":{
            description: "Temporarily increases attack by one level",
            sprite:{
                sx:69,
                sy:100
        }}
    }
}



const spriteSheet = new Image()
spriteSheet.src = "../sprites/items1.png"

setInterval(()=>{
    if(model.loot.length<6){
        let randomItem = Object.keys(model.itemDict)[Math.floor(Math.random()*Object.keys(model.itemDict).length)]
        model.loot.push({
            item:model.itemDict[randomItem],
            name:randomItem,
            posX:Math.floor(Math.random()*600),
            posY:0,
            velocity:Math.ceil(Math.random()*10)
        })

    }
    for(let i = 0; i < model.loot.length; i++){
        if(model.loot[i].posY>600){
            model.loot.splice(i,1)
        }
    }
},500)

setInterval(()=>{
    for(let i = 0; i < model.loot.length; i++){
        model.loot[i].posY += model.loot[i].velocity
    }
},100)