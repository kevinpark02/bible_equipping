export const RECEIVE_PSALM = "RECEIVE_PSALM";
export const RECEIVE_ISAIAH = "RECEIVE_ISAIAH";
export const RECEIVE_PROVERBS = "RECEIVE_PROVERBS";

export const receivePsalm = () => ({
    type: RECEIVE_PSALM
});

export const receiveIsaiah = () => ({
    type: RECEIVE_ISAIAH
});

export const receiveProverbs = () => ({
    type: RECEIVE_PROVERBS
});
 
export const fetchPsalm = () => (dispatch) => {
    dispatch(receivePsalm());
};

export const fetchIsaiah = () => (dispatch) => {
    dispatch(receiveIsaiah());
};

export const fetchProverbs = () => (dispatch) => {
    dispatch(receiveProverbs());
};

