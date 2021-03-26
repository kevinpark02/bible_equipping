import React from 'react';

class QuizForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.quiz;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeVerseRefs = this.makeVerseRefs.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    makeVerseRefs(quizId) {
        let verses = [];
        let reference = ""
    
        const bible = this.props.bible;
        const book = this.state.book;
        const chapters = Object.values(bible[book]).length

        while (verses.length < 5) {
            reference += book + "+";
            let chapter = Math.floor(Math.random() * Math.floor(chapters)) + 1; 
            reference += chapter + ":";
            let verse = Math.floor(Math.random() * Math.floor(bible[book][chapter])) + 1;
            reference += verse;
            if (!verses.includes(reference)) {
                verses.push(reference)
            }
            reference = "";
        }
        
        for (let i = 0; i < verses.length; i ++) {
            let idx1 = verses[i].indexOf("+") + 1;
            let idx2 = verses[i].indexOf(":")
            $.ajax({
                url: `https://fierce-dawn-41077.herokuapp.com/https://api.esv.org/v3/passage/text/?q=${verses[i]}&include-footnotes=false&include-verse-numbers=false&include-headings=false&include-passage-references=false&indent-paragraphs=0`,
                method: "GET",
                headers: {
                    Authorization: `Token ${window.esvAPIKey}`
                }
            })
            .then(verse => this.props.createVerse(
                {
                    "verse": verse.passages[0],
                    "chapter": verses[i].slice(idx1, idx2),
                    "quiz_id": quizId
                }
            ))
            .then(() => this.props.fetchQuiz(quizId))
        }
        setTimeout(() => {
           this.props.history.push(`quizzes/${quizId}`) 
        }, 5000)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuiz(this.state)
            .then((quiz) => this.makeVerseRefs(Object.values(quiz.quiz.quiz)[0].id))
            // .then(() => this.props.history.push(`/quizzes/${Object.values(quiz.quiz.quiz)[0].id}`))
    }

    render() {
        return(
            <form className="quiz-create-form"
                  onSubmit={this.handleSubmit}>
                <select className="quiz-book-options"
                        onChange={this.update('book')}>
                    <option selected={true} disabled="disabled">Select a Book</option>
                    <option value="Genesis">Genesis</option>
                    <option value="Exodus">Exodus</option>
                    <option value="Leviticus">Leviticus</option>
                    <option value="Numbers">Numbers</option>
                    <option value="Deuteronomy">Deuteronomy</option>
                    <option value="Joshua">Joshua</option>
                    <option value="Judges">Judges</option>
                    <option value="Ruth">Ruth</option>
                    <option value="1 Samuel">1 Samuel</option>
                    <option value="2 Samuel">2 Samuel</option>
                    <option value="1 Kings">1 Kings</option>
                    <option value="2 Kings">2 Kings</option>
                    <option value="1 Chronicles">1 Chronicles</option>
                    <option value="2 Chronicles">2 Chronicles</option>
                    <option value="Ezra">Ezra</option>
                    <option value="Nehemiah">Nehemiah</option>
                    <option value="Esther">Esther</option>
                    <option value="Job">Job</option>
                    <option value="Psalms">Psalms</option>
                    <option value="Proverbs">Proverbs</option>
                    <option value="Ecclesiastes">Ecclesiastes</option>
                    <option value="Song of Solomon">Song of Solomon</option>
                    <option value="Isaiah">Isaiah</option>
                    <option value="Jeremiah">Jeremiah</option>
                    <option value="Lamentations">Lamentations</option>
                    <option value="Ezekiel">Ezekiel</option>
                    <option value="Daniel">Daniel</option>
                    <option value="Hosea">Hosea</option>
                    <option value="Joel">Joel</option>
                    <option value="Amos">Amos</option>
                    <option value="Obadiah">Obadiah</option>
                    <option value="Jonah">Jonah</option>
                    <option value="Micah">Micah</option>
                    <option value="Nahum">Nahum</option>
                    <option value="Habakkuk">Habakkuk</option>
                    <option value="Zephaniah">Zephaniah</option>
                    <option value="Haggai">Haggai</option>
                    <option value="Zechariah">Zechariah</option>
                    <option value="Malachi">Malachi</option>
                    <option value="Matthew">Matthew</option>
                    <option value="Mark">Mark</option>
                    <option value="Luke">Luke</option>
                    <option value="John">John</option>
                    <option value="Acts">Acts</option>
                    <option value="Romans">Romans</option>
                    <option value="1 Corinthians">1 Corinthians</option>
                    <option value="2 Corinthians">2 Corinthians</option>
                    <option value="Galatians">Galatians</option>
                    <option value="Ephesians">Ephesians</option>
                    <option value="Philippians">Philippians</option>
                    <option value="Colossians">Colossians</option>
                    <option value="1 Thessalonians">1 Thessalonians</option>
                    <option value="2 Thessalonians">2 Thessalonians</option>
                    <option value="1 Timothy">1 Timothy</option>
                    <option value="2 Timothy">2 Timothy</option>
                    <option value="Titus">Titus</option>
                    <option value="Philemon">Philemon</option>
                    <option value="Hebrews">Hebrews</option>
                    <option value="James">James</option>
                    <option value="1 Peter">1 Peter</option>
                    <option value="2 Peter">2 Peter</option>
                    <option value="1 John">1 John</option>
                    <option value="2 John">2 John</option>
                    <option value="3 John">3 John</option>
                    <option value="Jude">Jude</option>
                    <option value="Revelation">Revelation</option>
                </select>
                <input className="quiz-generate-btn" type="submit" value="Generate a Quiz"/>
            </form>
        )
    }
}

export default QuizForm