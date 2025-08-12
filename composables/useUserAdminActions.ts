import { refreshNuxtData } from 'nuxt/app';

export const useUserAdminActions = () => {
  const deleteUser = async (id: number) => {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        await $fetch(`http://localhost:8000/api/user/${id}`, {
          method: 'DELETE',
        });
        await refreshNuxtData(); // Refresh data after successful deletion
        return true; // Indicate success
      } catch (error) {
        console.error('Delete failed:', error);
        return false;
      }
    }
    return false; // Deletion cancelled
  };

  const editUser = async (id: number) => {
    try {
      const user = await $fetch(`http://localhost:8000/api/user/${id}`, {
        method: 'GET',
      });
      console.log(user)
      // return user; // Return user data for the dialog
    } catch (error) {
      console.error('Fetch user failed:', error);
      return null;
    }
  };

  const reloadPage = async () => {
    window.location.reload();
  }

  return { deleteUser, editUser, reloadPage };
};
