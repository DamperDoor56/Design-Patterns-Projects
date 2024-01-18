/*class Note { }

class HalfNote extends Note { }
class QuarterNote extends Note { }
class EightNote extends Note { }

const HalfNote = BaseNote.clone(4, graphic);


*/
function insertHalfNote(){
    const newNote = HalfNote.clone(4, graphic);
}

const notes = {
    quarter: {duration: 4, graphic: 'q.png'},
    eight: {duration: 2, graphic: 'e.png'},
    half: {duration: 8, graphic: 'h.png'},
}

class Note {
    constructor(){
        this.duration = null;
        this.graphic = null;
    }
    print(){
        console.log(this.duration, '- ',this.graphic);
    }
}

const BaseNote = new Note();

function insertNote(noteType) {
    const newNote = Object.assign(new Note(), notes[noteType]);
    newNote.print();
}
insertNote('quarter');