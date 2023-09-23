import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { currentUser } = useAuth();
  const { instanceSecoreApis } = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading, isError } = useQuery({
    queryKey: ['isAdmin', currentUser?.email],
    // enabled: !authLoading, 
    queryFn: async () => {
      try {
        const res = await instanceSecoreApis.get(`/isAdmin/${currentUser.email}`);
        console.log('response', res);

        // Check if 'admin' property exists in the response data
        if ('admin' in res.data) {
          return res.data.admin;
        } else {
          throw new Error('Admin status not found in API response');
        }
      } catch (error) {
        console.error('Error fetching admin status:', error);
        throw error; // Rethrow the error to let React Query handle it
      }
    }
  });

  if (isError) {
    console.error('Error occurred while fetching admin status');
  }

  console.log(isAdmin);

  return { isAdmin, isAdminLoading };
};

export default useAdmin;
