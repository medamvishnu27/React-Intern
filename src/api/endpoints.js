// Base URL for JSONPlaceholder API
export const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

// Endpoint for fetching users
export const USERS_API = `${BASE_API_URL}/users`;

// Function to generate avatar URL based on username
export const getAvatarUrl = (username) =>
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
