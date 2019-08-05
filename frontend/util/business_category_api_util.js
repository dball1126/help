export const fetchBusinessCategories = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/business_categories/'
    })
}
export const fetchBusinessCategory = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/business_categories/${id}`
    })
}