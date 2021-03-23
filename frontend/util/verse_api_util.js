export const createVerse = (verse) => {
    return $.ajax({
        url: `/api/verses`,
        method: "POST",
        data: { verse }
    });
};