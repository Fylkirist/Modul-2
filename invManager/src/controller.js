function toggleInventoryView(){
    model.state.showBag = !model.state.showBag
}

function handleClick(event){
    for(let i = model.loot.length-1; i >= 0; i--){
        let element = model.loot[i]
        if(event.clientX > element.posX && 
            event.clientX < element.posX+58 && 
            event.clientY > element.posY && 
            event.clientY < element.posY+64){
            model.playerInventory.push(element.item)
            model.loot.splice(i,1)
            return
        }
    }
}