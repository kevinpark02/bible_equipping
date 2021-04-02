import * as VerseApiUtil from "../util/verse_api_util";

export const RECEIVE_VERSE = "RECEIVE_VERSE";
export const START_RECEIVE_VERSE = "START_RECEIVE_VERSE";

export const receiveVerse = (verse) => {
    return{
        type: RECEIVE_VERSE,
        verse
    };
};

export const startReceiveVerse = () => ({
    type: START_RECEIVE_VERSE
})

export const createVerse = (verse) => (dispatch) => {
    dispatch(startReceiveVerse());
    return VerseApiUtil.createVerse(verse)
        .then((verse) => dispatch(receiveVerse(verse)));
};

export const updateVerse = (verse) => (dispatch) => {
    return VerseApiUtil.updateVerse(verse)
        .then((verse) => dispatch(receiveVerse(verse)));
};