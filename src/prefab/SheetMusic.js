// Rocket prefab

//// NOTES ///////////

// NEXT STEPS:
//  - queue object
//      - print out sheet music
//          - transcribe the notes
//      - figure out queue structure
//          - queue must have efficient:
//              .check()
//                  .front()
//                  .pop()
//              .push()
//              actual queue
//                  [{key: "key", cut: true/false, image: "image key"], {key..."image key"}]

//////////////////////

class SheetMusic extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {

        console.log("from SheetMusic.js: constructing...");

        super(scene, x, y, texture, frame);     // inherit or somethin'
        this.parentScene = scene;               // save scene for later

        this.alpha = 0;     // an "abstract" object
        
        this.queue = [];
        this.noteKeyCode = {

            'b4': 'A',
            'c5': 'S',
            'c5sharp': 'E',
            'd5': 'D',
            'd5sharp': 'R',
            'e5': 'F',
            'f5': 'G',
            'f5sharp': 'Y',
            'g5': 'H',
            'g5sharp': 'U',
            'a5': 'J',
            'a5sharp': 'I',
            'b5': 'K',
            'c6': 'L',
            'c6sharp': 'P',
            'd6': ';',

        }

        // final check
        console.log("from SheetMusic.js: constructed!");

    }

    update() {      // update method

        // checks
        
    }


    print() {

        console.log("from SheetMusic.js: printing sheet music...")
        for (let i = 0; i < this.queue.length; i++) {

            console.log("  -->", this.queue[i]);

        }

    }


    push(note, image = false) {

        console.log("from SheetMusic.js: pushing new note");
        console.log("  -->", note);

        if (!(note in this.noteKeyCode)) {
            throw new Error('INSERTED INVALID NOTE');
        }
        this.queue.push({key: note, cutaway: image})

    }


    pop() {

        this.queue.shift();

    }


    getFront() {

        let frontKey = this.queue[0]['key'];
        return frontKey;

    }


    checkKey(incomingNote) {

        let frontKey = this.getFront();
        console.log("from SheetMusic.js: from checkKey(): trying", incomingNote);
        console.log("  -->", frontKey);

        if (incomingNote == frontKey) {

            console.log(" --> MATCHED")

            return true;

        }

    }


    frontNoteCheck(incomingNote) {

        if (this.checkKey(incomingNote)) {

            this.pop();
            console.log("from SheetMusic.js: from checkKey: popped!");

        }

    }

    
    translate(note) {

        return this.noteKeyCode[note];

    }


    translateFront() {

        let frontKey = this.getFront();

        let translation = this.translate(frontKey);

        return translation;

    }

}