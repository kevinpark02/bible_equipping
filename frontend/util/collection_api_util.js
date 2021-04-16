export const createCollection = (collection) => {
    return $.ajax({
        url: `/api/collections`,
        method: "POST",
        data: { collection }
    });
};

export const fetchCollection = (collectionId) => {
    return $.ajax({
        url: `/api/collection/${collectionId}`,
        method: "GET"
    });
};