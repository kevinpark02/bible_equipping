import * as CollectionApiUtil from "../util/collection_api_util";

export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";

export const receiveCollection = (collection) => {
    return {
        type: RECEIVE_COLLECTION,
        collection
    };
};

export const createCollection = (collection) => (dispatch) => {
    return CollectionApiUtil.createCollection(collection)
        .then((collection) => dispatch(receiveCollection(collection))
    );
};

