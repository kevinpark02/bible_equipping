import * as CollectionApiUtil from "../util/collection_api_util";

export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const RECEIVE_CURRENT_COLLECTION = "RECEIVE_CURRENT_COLLECTION";

export const receiveCollection = (collection) => {
    return {
        type: RECEIVE_COLLECTION,
        collection
    };
};

export const receiveCurrentCollection = (collection) => {
    return {
        type: RECEIVE_CURRENT_COLLECTION,
        collection
    };
};

export const createCollection = (collection) => (dispatch) => {
    return CollectionApiUtil.createCollection(collection)
        .then((collection) => dispatch(receiveCollection(collection))
    );
};

export const fetchCollection = (collectionId) => (dispatch) => {
    return CollectionApiUtil.fetchCollection(collectionId)
        .then((collection) => dispatch(receiveCurrentCollection(colection))
    );
};

