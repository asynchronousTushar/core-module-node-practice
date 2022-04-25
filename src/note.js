const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => {
        return note.title === title;
    });

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        writeNotes(notes);
        console.log(chalk.green.bold("Note added"))

    } else {
        console.log(chalk.bold.yellow('Note already added!'));
    }
}

const removeNote = title => {
    const notes = loadNotes().filter(note => {
        return note.title !== title;
    })

    if (loadNotes().length !== notes.length) {
        writeNotes(notes);
        console.log(chalk.red.bold("Note removed"));
    } else {
        console.log(chalk.yellow.bold("Note isn't founded"));
    }
}

const noteList = () => {
    const notes = loadNotes();

    notes.forEach( note => {
        console.log(chalk.white.bold("Title:", note.title));
        console.log(chalk.yellowBright("description:", note.body));
    });
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(note => note.title === title)

    if(note) {
        console.log("Title:", note.title);
        console.log("description:", note.body);
    } else {
        console.log(chalk.redBright.bold('Note is not founded'));
    }
}


const writeNotes = (notes) => {
    fs.writeFileSync('database.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        const notesJSON = fs.readFileSync('database.json').toString();
        return JSON.parse(notesJSON);

    } catch (error) {
        return []
    }
}

module.exports = { addNote, removeNote, noteList, readNote }
