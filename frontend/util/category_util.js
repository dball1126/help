export const fetchCategories = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/categories'
    });
};
export const fetchCategory = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/categories/${id}`
    });
};

// export const fetchMatchedCategories = () => {
//     return $.ajax({
//         method: 'GET',
//         url: 'api'
//     })
// }