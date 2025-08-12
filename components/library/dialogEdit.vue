<script setup>
import Dialog from 'primevue/dialog';
import { ref, reactive, } from 'vue';
const props = defineProps({
  user: Object
})

const user = ref(props?.user)

const visible = ref(false);

const initColumn = {
  id: null,
  username: '',
  age: '',
  gender: '',
  email: '',
  password: ''
}

const newData = reactive({ ...initColumn });

const updateUser = async () => {
  if (!newData.id)
    return alert('No user ID provided');
  // if (isNaN(newData.age) || newData.age < 0) {
  //   return alert('Please enter a valid age');
  // }
  // Validate inputs
  try {
    const url = `http://localhost:8000/api/user/${newData.id}`;
    const res = await $fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: newData.username,
        age: newData.age ? Number(newData.age) : 0,
        gender: newData.gender,
        email: newData.email,
        password: newData.password,
      }),
    });
    reloadPage();
    console.log(res)
    visible.value = false;
  } catch (error) {
    alert(`Update failed: ${error.message}`);
  }
  // console.log('newDataId:', newData.id);
}

const editDialog = () => {
  // Populate form with user data
  //  console.log(newData.age = user.value.age)
  Object.keys(user.value).map((item) => newData[item] = user.value[item])
  // newData.id = user.value.id || '';
  // newData.username = user.value.user.valuename || '';
  // newData.age = user.value.age || '';
  // newData.gender = user.value.gender || '';
  // newData.email = user.value.email || '';
  // newData.password = ''; // Password not pre-filled for security
  // console.log(newData)
  visible.value = true; // Show dialog
}

function saveUser() {
  updateUser()
  reloadPage()
}

const reloadPage = () => {
  window.location.reload();
}

</script>

<template>
  <Button @click="editDialog()" class="!px-[5px] !mx-[10px] cursor-pointer !bg-white !border-none"><svg
      class="w-7 h-7 text-black hover:scale-120 transition hover:transition hover:duration-300" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
        d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
    </svg>
  </Button>
  <Dialog v-model:visible="visible" modal header="Edit Profile"
    style="width: 25rem; border-radius: 8px; border-color: var(--color-blue-400);"
    class="!p-[15px] rounded-lg !border-blue-400 !border !bg-white">
    <div class="relative z-0 w-full !my-5 group">
      <input v-model="newData.username" type="text" name="name" id="name"
        class="block !py-2.5 !px-0 w-full text-base text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" required />
      <label for=""
        class="peer-focus:font-medium absolute text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Username</label>
    </div>

    <div class="relative z-0 w-full !mb-5 group">
      <input v-model="newData.age" type="number" id="age" name="age" min="0"
        class="block !py-2.5 !px-0 w-full text-base text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" />
      <label for=""
        class="peer-focus:font-medium absolute text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Age</label>
    </div>

    <div class="relative z-0 w-full !mb-5 group">
      <select v-model="newData.gender"
        class="block !py-2.5 !px-0 w-full text-base text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
        <option value="" disabled selected>Select gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>

    <div class="relative z-0 w-full !mb-5 group">
      <input v-model="newData.email" type="email" name="email" id="email"
        class="block !py-2.5 !px-0 w-full text-base text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="" required>
      <label for=""
        class="peer-focus:font-medium absolute text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Email address</label>
    </div>

    <div class="relative z-0 w-full !mb-5 group">
      <input v-model="newData.password" type="password" name="password" id="password"
        class="block !py-2.5 !px-0 w-full text-base text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required />
      <label for=""
        class="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    </div>

    <div class="w-[50%] !mt-[20px] place-self-end flex justify-end">
      <button @click="saveUser()"
        class=" text-blue-400 cursor-pointer font-medium !px-2.5 !mr-[5px] rounded-lg text-base hover:text-black hover:transition hover:duration-300 transition duration-300">
        Save
      </button>
      <button @click="visible = false"
        class="text-red-400 cursor-pointer font-medium !p-2.5 rounded-lg text-base text-center hover:text-black hover:transition hover:duration-300 transition duration-300">
        Cancel</button>
    </div>

  </Dialog>
</template>