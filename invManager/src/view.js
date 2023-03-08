const app = document.getElementById("app")

function renderApp(){
    let container = document.createElement("div")
    container.id = "inventoryAppContainer"
    
    let lootCanvas = document.createElement("canvas")
    lootCanvas.height = 600
    lootCanvas.width = 600
    lootCanvas.onclick = function(event){
        handleClick(event)
    }

    let ctx = lootCanvas.getContext("2d")

    container.appendChild(lootCanvas)
    
    let invButton = document.createElement("button")
    invButton.textContent = "Toggle inventory"
    invButton.onClick = toggleInventoryView()
    container.appendChild(invButton)

    let sortButton = document.createElement("button")
    sortButton.textContent = "Sort inventory by type"
    container.appendChild(sortButton)
    
    let inventoryGrid = document.createElement("canvas")

    container.appendChild(inventoryGrid)
    
    setInterval(()=>{
        renderCanvas(ctx)
        renderInventory(inventoryGrid)},33)

    app.innerHTML=""
    app.appendChild(container)
}

function renderInventory(inventory){
    inventory.height = Math.ceil(model.playerInventory.length/5)*20
    inventory.width = 100

    let ctx = inventory.getContext("2d")

    for(let i = 0; i < model.playerInventory.length; i++){
        
        ctx.drawImage(spriteSheet,
            model.playerInventory[i].sprite.sx,
            model.playerInventory[i].sprite.sy,
            29,
            32,
            (i - (5*Math.floor(i / 5)))*20,
            Math.floor(i/5)*20,
            20,
            20)
    }
}

function renderCanvas(ctx){
    ctx.fillRect(0,0,600,600)
    for(let i = 0; i < model.loot.length; i++){
        ctx.drawImage(spriteSheet,
            model.loot[i].item.sprite.sx,
            model.loot[i].item.sprite.sy,
            29,
            32,
            model.loot[i].posX-14,
            model.loot[i].posY-16,
            58,
            64)    
    }
}

spriteSheet.onload = ()=>renderApp()