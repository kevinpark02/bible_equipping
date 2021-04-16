export const createCollection = (collection) => {
    return $.ajax({
        url: `/api/collections`,
        method: "POST",
        data: { collection }
    });
};