export const searchBusinesses = query => (
    $.ajax({
        method: 'POST',
        url: '/api/businesses/search',
        data: { query }
    })
);