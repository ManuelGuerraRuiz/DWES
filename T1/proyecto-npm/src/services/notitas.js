const fs = require('fs');

function createNote(name, content){
    fs.writeFileSync(`${name}.note`, content);
}

function editeNote(name, content){
    fs.writeFileSync(`${name}.note`, content);
}
  
function deleteNote(name){
    fs.unlink(`${name}.note`, err => {
        if (err) throw err;
    });
}

  
module.exports = {
    createNote,
    editeNote,
    deleteNote,
};
  
