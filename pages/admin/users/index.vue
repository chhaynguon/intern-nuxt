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
  const username = data.value.username;
  if (!username) {
    return alert('Please enter an Username');
  }

  const url = `http://localhost:8000/api/user/${username}`;
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
    <section class="relative flex justify-between top-16">
      <div class="fixed flex min-h-screen bg-white shadow-xl top-16">
        <aside class="w-[100%] text-black flex flex-col">
          <ul class="w-[135px] text-center">

            <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
              <button class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group">
                <svg
                  class="w-6 h-6 text-black cursor-pointer group-hover:text-white hover:transition hover:duration-300"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clip-rule="evenodd" />
                </svg>
                <a href="/admin/dashboard" class="!pl-[8px]">Dashboard</a>
              </button>
            </li>

            <li class="transition hover:transition hover:duration-300 bg-[#454545] text-white">
              <button class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] ">
                <svg
                  class="w-6 h-6 transition cursor-pointer group-hover:text-white hover:transition hover:duration-300"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                <a href="/admin/tableAdmin" class="!pl-[8px]">Users</a>
              </button>
            </li>

            <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
              <a href="/admin/events"
                class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                  class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                <span class="!pl-[8px]">Event</span>
              </a>
            </li>

            <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
              <a href="/admin/services"
                class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                  class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                    d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
                </svg>
                <span class="!pl-[8px]">Service</span>
              </a>
            </li>


            <li
              class="transition hover:bg-red-400 hover:transition hover:duration-300 hover:text-white hover:border-red-400">
              <button @click="confirmLogout"
                class="w-[135px] h-[44px] flex place-self-center !pl-[10px] items-center group">
                <svg
                  class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                  viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                </svg> <span class="!pl-[8px] cursor-pointer">Logout</span>
                <confirmDialog />
                <Toast />
              </button>
            </li>
          </ul>
        </aside>
      </div>
      <div class="w-full h-screen !pl-[135px] bg-[#f9fafb]">
        <div class="w-full place-self-center !px-8 !mt-5">
          <div class="w-full flex justify-between !pb-[10px]">
            <div class="w-full">
              <h1 class="text-start font-bold text-xl text-[#454545]">Users</h1>
            </div>
            <button @click="visible = true"
              class="transition hover:transition hover:duration-300 scale-100 flex !p-1 border-1 border-gray-400 !mr-2 cursor-pointer group shadow-md hover:bg-gray-200 rounded-md">
              <svg class="w-5 h-5 text-black !mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>New
            </button>
            <div class="flex shadow-md">
              <input v-model="data.username" type="text" placeholder="Search..."
                class="w-[150px] !pl-[8px] rounded-tl-md rounded-bl-md border-gray-400" />
              <button class=" border-y-1 border-r-1 border-gray-400 rounded-tr-md rounded-br-md" @click="searchInfo()">
                <svg class="w-6 h-6 !m-1 text-blue-400 cursor-pointer" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
            <div class="bg-white">
              <Dialog v-model:visible="visible" modal header="Add User"
                style="width: 25rem; border-radius: 8px; border-color: var(--color-blue-400);"
                class="!p-[10px] rounded-lg !border-blue-400 !border !bg-[white]/100 !text-black">
                <form class="max-w-md !mx-auto !mt-[10px]">
                  <div class="relative z-0 w-full !mb-5 group">
                    <input v-model="newinfo.username" type="text" name="name" id="name"
                      class="block !py-2.5 !px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                      placeholder="" required />
                    <label for=""
                      class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Username</label>
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
                <th class="text-left !px-2 !py-2">Name</th>
                <th class="text-left !px-3 !py-2">Gender</th>
                <th class="text-left !px-3 !py-2">Email address</th>
                <th class="text-right !px-5 !py-2">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="user in data" :key="user?.id">
                <td class="text-left !px-2 !py-2">{{ user.username }}</td>
                <td class="text-left !px-3 !py-2">{{ user.gender }}</td>
                <td class="text-left !px-3 !py-2">{{ user.email }}</td>
                <td class="">
                  <div class="flex justify-end bg-white">
                    <userEdit :user="user" />
                    <button type="button" @click="deleteUser(user.id)" class=" text-sm !px-[5px] cursor-pointer ">
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