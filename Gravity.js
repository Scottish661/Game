function Gravity(object){
    object.y += object.vy
if(object.y + object.size < CS){object.vy += gravity}
else {
    object.vy = 0
    object.y = CS - object.size
    
    
    }
    }