'use server';
import { Login, Register } from '@/types';
import axios from 'axios';

const url = 'http://localhost:8080/';

export const register = async ({ name, email, password }: Register) => {
  try {
    const response = await axios.post(`${url}api/v1/auth/register`, { name, email, password });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const login = async ({ email, password }: Login) => {
  try {
    const response = await axios.post(`${url}api/v1/auth/login`, { email, password });
    console.log(response.data);
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
