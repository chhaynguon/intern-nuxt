<script setup>
import Dialog from 'primevue/dialog';
import { useUserAdminActions } from '../../../composables/useUserAdminActions';
import { ref } from "vue";
import { reactive } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm'
import ConfirmDialog from 'primevue/confirmdialog';
const confirm = useConfirm()


const { data, refresh } = await useFetch(`http://localhost:8000/api/user`, {
})
const { deleteUser, reloadPage } = useUserAdminActions(refresh)
const visible = ref(false);
const newinfo = reactive({
  username: '',
  age: '',
  gender: '',
  email: '',
  password: '',
});

async function addUser() {
  const url = "http://localhost:8000/api/user";

  try {
    const response = await $fetch(url, {
      method: "POST",
      body: JSON.stringify(
        {
          username: newinfo.username,
          age: Number(newinfo.age),
          gender: newinfo.gender,
          email: newinfo.email,
          password: newinfo.password,
        }

      ),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!newinfo.username || !newinfo.age || !newinfo.gender || !newinfo.email || !newinfo.password) {
      return alert('Please fill in all required fields');
    }

    // const data = await response.json();
    console.log('User created:', data, response);
    // reloadPage();
    visible.value = false;
    createSuccess()
  }
  catch (error) {
    console.error('Network or server error:', error.message);
    alert(`Failed to connect to server: ${error.message}`);
  }
}

const searchInfo = async () => {
  const id = data.value.id;
  if (!id) {
    return alert('Please enter an ID or Username');
  }

  const url = `http://localhost:8000/api/user/${id}`;
  try {
    const result = await $fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    data.value = Array.isArray(result) ? result : [result];
  } catch (error) {
    console.error('Search error:', error);
    alert('User does not exit!');
  }
}

const toast = useToast();
const createSuccess = async () => {
  toast.add({ severity: 'success', summary: 'User created successfully!', detail: 'You have successfully created user.', life: 3000 });
};

const confirmLogout = () => {
  confirm.require({
    message: 'Are you sure you want to logout?',
    header: 'Confirm Logout',
    icon: 'pi pi-sign-out',
    acceptProps: {
      label: 'Yes',
    },
    rejectProps: {
      label: 'No',
      severity: 'secondary',
      outlined: true
    },
    acceptClass: 'p-button-danger',
    accept: () => {
      // do logout action here (clear token, redirect, etc.)
      localStorage.removeItem('token');
      navigateTo("/login")
      toast.add({
        severity: 'success',
        summary: 'Logged Out',
        detail: 'You have been successfully logged out.',
        life: 3000
      })
    },
    reject: () => {
      toast.add({
        severity: 'info',
        summary: 'Cancelled',
        detail: 'Logout cancelled.',
        life: 2000
      })
    }

  })
}

</script>
<template>
  <div>
    <dbHeader />
    <section class="flex justify-between relative top-14.5">
      <div class="flex min-h-screen shadow-xl bg-white fixed top-14.5">
        <aside class="w-[100%] text-black flex flex-col">
          <ul class="w-[135px] text-center">
            <!-- home menu -->
            <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
              <button class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] group">
                <svg
                  class="w-6 h-6 text-black dark:text-black group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clip-rule="evenodd" />
                </svg>
                <a href="/admin/dashboard" class="!ml-[8px]">Home</a>
              </button>
            </li>
            <!-- user menu -->
            <li class="transition hover:transition hover:duration-300 bg-[#454545] text-white">
              <button class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] ">
                <svg
                  class="w-6 h-6 text-white transition dark:text-white group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                <a href="/admin/tableAdmin" class="!ml-[8px]">User</a>
              </button>
            </li>

            <!-- Logout menu -->
            <li
              class="transition hover:bg-red-400 hover:transition hover:duration-300 hover:text-white hover:border-red-400">
              <button @click="confirmLogout"
                class="w-[135px] h-[44px] flex place-self-center !pl-[18px] items-center group">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                </svg> <span class="!ml-[8px] cursor-pointer">Logout</span>
                <confirmDialog />
                <Toast />
              </button>
            </li>
          </ul>
        </aside>
      </div>
      <div class="w-full h-screen !pl-[135px]">
        <div class="w-full place-self-center !px-8 !mt-[25px]">
          <div class="w-full flex justify-between !mb-[10px]">
            <div class="w-full">
              <h1 class="text-start font-bold text-xl text-[#454545] align-middle">Admin & User Tables</h1>
            </div>
            <div class="flex shadow-md bg-[white]/100 rounded-lg ">
              <input v-model="data.id" placeholder="Enter ID" class="w-[150px] !pl-[20px] ">
              <button class="transition hover:transition hover:duration-300 hover:scale-110 " @click="reloadPage()">
                <svg
                  class="w-6.5 h-6.5 text-red-400 !m-1 cursor-pointer hover:scale-120 transition hover:transition hover:duration-300 rounded-full"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
              </button>
              <button class="transition hover:transition hover:duration-300 hover:scale-110" @click="searchInfo()">
                <svg
                  class="w-6.5 h-6.5 !m-1 text-blue-400 cursor-pointer hover:scale-105 transition hover:transition hover:duration-300 rounded-full"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </button>

              <button @click="visible = true" class="transition hover:transition hover:duration-300 hover:scale-110">
                <svg class="w-7 h-7 !m-1 text-black cursor-pointer hover:scale-110 " aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </button>
            </div>
            <div class="bg-white">
              <Dialog v-model:visible="visible" modal header="Add Profile"
                style="width: 25rem; border-radius: 8px; border-color: var(--color-blue-400);"
                class="!p-[10px] rounded-lg !border-blue-400 !border !bg-[white]/100 !text-black">
                <form class="max-w-md !mx-auto !mt-[10px]">
                  <div class="relative z-0 w-full !mb-5 group">
                    <input v-model="newinfo.username" type="text" name="name" id="name"
                      class="block !py-2.5 !px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                      placeholder="" required />
                    <label for=""
                      class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Username</label>
                  </div>

                  <div class="relative z-0 w-full !mb-5 group">
                    <input v-model="newinfo.age" type="number" id="age" name="age" min="0"
                      class="block !py-2.5 !px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                      placeholder="" />
                    <label for=""
                      class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Age</label>
                  </div>


                  <div class="relative z-0 w-full !mb-5 group">
                    <select v-model="newinfo.gender"
                      class="block !py-2.5 !px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer">
                      <option value="" disabled selected>Select gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>

                  <div class="relative z-0 w-full !mb-5 group">
                    <input v-model="newinfo.email" type="email" name="email" id="email"
                      class="block !py-2.5 !px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                      placeholder="" required>
                    <label for=""
                      class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email address</label>
                  </div>


                  <div class="relative z-0 w-full !mb-5 group">
                    <input v-model="newinfo.password" type="password" name="password" id="password"
                      class="block !py-2.5 !px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                      placeholder=" " required />
                    <label for=""
                      class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                  </div>

                  <div class="w-[50%] !mt-[20px] place-self-end flex justify-end">
                    <button @click="addUser()" type="submit"
                      class=" bg-blue-200 text-white cursor-pointer font-medium !p-2 !mr-[5px] rounded-lg text-sm text-center hover:text-white hover:bg-blue-400 hover:transition hover:duration-300 transition duration-300">
                      Save</button>
                    <button @click="visible = false"
                      class="bg-red-200 text-white cursor-pointer font-medium !p-2 rounded-lg text-sm text-center hover:text-white hover:bg-red-400 hover:transition hover:duration-300 transition duration-300">Cancel</button>
                  </div>
                </form>
              </Dialog>
            </div>
          </div>
          <table class="min-w-full place-self-center border-collapse shadow-md border-2 border-[#abafb3]">
            <thead class="bg-white">
              <tr class="bg-[#abafb3] text-white">
                <th class="text-left !px-2 !py-1">#</th>
                <th class="text-left !px-2 !py-2">Name</th>
                <th class="text-left !px-3 !py-2">Age</th>
                <th class="text-left !px-3 !py-2">Gender</th>
                <th class="text-left !px-3 !py-2">Email address</th>
                <th class="text-right !px-10 !py-2">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="user in data" :key="user?.id">
                <td class="text-left !px-2 !py-1">{{ user.id }}</td>
                <td class="text-left !px-2 !py-2">{{ user.username }}</td>
                <td class="text-left !px-3 !py-2">{{ user.age }}</td>
                <td class="text-left !px-3 !py-2">{{ user.gender }}</td>
                <td class="text-left !px-3 !py-2">{{ user.email }}</td>
                <td class="">
                  <div class="flex justify-end bg-white">
                    <dialogEdit :user="user" />
                    <button type="button" @click="deleteUser(user.id)"
                      class=" text-sm !px-[5px] !mx-[10px] cursor-pointer ">
                      <svg class="text-red-600 transition w-7 h-7 hover:scale-120 hover:transition hover:duration-300"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>