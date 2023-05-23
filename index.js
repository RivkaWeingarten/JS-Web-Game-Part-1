function newImg(imgName, leftPx, bottomPx){
    let charName = document.createElement('img')
charName.src = imgName
charName.style.position = 'fixed'
charName.style.left = leftPx
charName.style.bottom = bottomPx
document.body.append(charName)
return charName
}


 
 function newItem(imgName, leftPx, bottomPx){
  let charName =  newImg(imgName, leftPx, bottomPx)
    charName.addEventListener('click',() =>{
        charName.remove()
    })
}

newImg('./assets/green-character.gif','100px','100px')
newImg('./assets/pine-tree.png','450px','200px')
newImg('./assets/tree.png','200px','300px')
newImg('./assets/pillar.png','350px','100px')
newImg('./assets/crate.png','150px','200px')
newImg('./assets/well.png','500px','425px')

newItem('./assets/sword.png', '500px', '405px')
newItem('./assets/shield.png', '165px', '185px')
newItem('./assets/staff.png', '600px', '100px')








// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)
