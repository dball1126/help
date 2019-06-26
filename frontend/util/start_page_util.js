export const startPageBusinesses = () => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses/start'
    })
);