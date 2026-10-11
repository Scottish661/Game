function Gravity(object){
    object.isGrounded = false;
    if (object.y + object.size >= PlatForm1.y &&
object.x + object.size > PlatForm1.x &&
object.x < PlatForm1.x + PlatForm1.width) {
object.y = PlatForm1.y - object.size;
object.isGrounded = true;
        }
 if(!object.isGrounded){
        object.y += object.yv}
    if(object.y >= CS - object.size){
        object.y = CS - object.size;
        object.isGrounded = true;
    }}