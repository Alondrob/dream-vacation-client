export const apiRoutes = {
  property: {
    getAllProperties: () => `${process.env.REACT_APP_API_URL}/property`,
    getPropertyById: (id) => `${process.env.REACT_APP_API_URL}/property/${id}`,
    createPropertyRoute: () => `${process.env.REACT_APP_API_URL}/property/create-property`,
    editPropertyRoute: () => `${process.env.REACT_APP_API_URL}/property/edit-property`,
    deletePropertyRoute: (id) => `${process.env.REACT_APP_API_URL}/property/delete-property/${id}`,
    uploadImagesRoute: () => `${process.env.REACT_APP_API_URL}/property/images`
    
  },
  user: {
    createUserRoute: () => `${process.env.REACT_APP_API_URL}/user/create-user`,
    loginUserRoute: () => `${process.env.REACT_APP_API_URL}/user/login-user`,
    getUserProperties: (id) => `${process.env.REACT_APP_API_URL}/user/${id}/properties`,
    getUserBookingsRoute: () => `${process.env.REACT_APP_API_URL}/user/bookings`,
    bookPropertyRoute: () => `${process.env.REACT_APP_API_URL}/property/book-property`,
    deleteBookingRoute: () => `${process.env.REACT_APP_API_URL}/user/delete-booking`,
    getUserBookings: () => `${process.env.REACT_APP_API_URL}/user/get-user-bookings`,
    editUserRoute: (id) => `${process.env.REACT_APP_API_URL}/user/edit-user/${id}`,
    deleteUserRoute: (id) => `${process.env.REACT_APP_API_URL}/user/delete-user/${id}`,
  },
};
