export const createVerse = (verse) => {
    return $.ajax({
        url: `/api/verses`,
        method: "POST",
        data: { verse }
    });
};

export const updateVerse = (verse) => {
    return $.ajax({
        url: `/api/verses/${verse.id}`,
        method: "PATCH",
        data: {verse}
    });
};