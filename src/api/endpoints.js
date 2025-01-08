// Base URL for JSONPlaceholder API
export const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

// Endpoint for fetching users
export const USERS_API = `${BASE_API_URL}/users`;

// Function to generate avatar URL based on username
export const getAvatarUrl = (username) =>
    `https://api.dicebear.com/9.x/micah/svg?seed=${username}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
