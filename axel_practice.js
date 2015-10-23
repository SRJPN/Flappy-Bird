var axel = require('axel');
 
// Clear the terminal 
axel.clear();
 
// Green box 
axel.bg(78,155,87);
axel.box(2,2,76,20);
 
// Scub some holes in the green box 
axel.scrub(4,3,8,5);
axel.scrub(13,3,8,7);
axel.scrub(22,3,8,13);
 
axel.cursor.restore();