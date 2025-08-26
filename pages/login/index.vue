<script setup>

import Toast from 'primevue/toast';

import { ref } from 'vue'
import { navigateTo } from '#app'
const username = ref('')
const password = ref('')

const handleLogin = async () => {
    try {

        const res = await $fetch('http://localhost:8000/api/auth/login', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                username: username.value,
                password: password.value
            }
        })
        // Store token locally
        localStorage.setItem('token', `Bearer ${res.access_token}`)
        showSuccess(),
            await navigateTo('/admin/dashboard')
    } catch (error) {
        console.error('Login failed:', error)
        showError()
    }

}


import { useToast } from 'primevue/usetoast';

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Login Successfully', detail: 'You have successfully loggin.', life: 3000 });
};
const showError = () => {
    toast.add({ severity: 'error', summary: 'Login Failed', detail: 'Please check the username, password and try again.', life: 3000 });
};

</script>
<template>
    <div
        class="min-w-full min-h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <section
            class="w-full max-w-[1000px] min-h-screen flex flex-col items-center !mx-auto !py-6 sm:!py-8 md:!py-10">
            <!-- Logo -->
            <div class="w-[60%] sm:w-[40%] md:w-[25%] place-self-center">
                <a href="/user/">
                    <img class="!py-6 sm:!py-8 md:!py-10 w-full"
                        src="https://www.philliptrustee.com.kh/v2/img/trustee.png" alt="Phillip Trustee" />
                </a>
            </div>

            <!-- Login Card -->
            <div class="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-[#F15A22] rounded-lg shadow !mx-auto">
                <div class="!p-4 sm:!p-6 md:!p-8 space-y-4 md:space-y-6">
                    <h1 class="text-lg font-bold leading-tight tracking-tight text-white sm:text-xl md:text-2xl">
                        Sign in to your account
                    </h1>

                    <form class="space-y-4 md:space-y-6 !mt-[20px] sm:!mt-[25px] md:!mt-[30px]"
                        @submit.prevent="handleLogin">
                        <Toast />

                        <!-- Username -->
                        <div class="relative z-0 w-full !mb-4 sm:!mb-5 group">
                            <input v-model="username" type="text" name="name" id="name"
                                class="block !py-2.5 !px-0 w-full text-sm sm:text-base text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-[#002E6E] peer"
                                placeholder="" required />
                            <label for="name"
                                class="peer-focus:font-medium absolute text-sm sm:text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Username
                            </label>
                        </div>

                        <!-- Password -->
                        <div class="relative z-0 w-full !mb-4 sm:!mb-5 group">
                            <input v-model="password" type="password" name="floating_password" id="floating_password"
                                class="block !py-2.5 !px-0 w-full text-sm sm:text-base text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-[#002E6E] peer"
                                placeholder=" " required />
                            <label for="floating_password"
                                class="peer-focus:font-medium absolute text-sm sm:text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Password
                            </label>
                        </div>

                        <!-- Remember Me -->
                        <div class="flex items-center justify-between !mt-3">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-black rounded" />
                                </div>
                                <div class="!ml-3 text-sm">
                                    <label for="remember" class="text-white">Remember me</label>
                                </div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" @click="loginUser()"
                            class="w-full text-black cursor-pointer bg-white font-medium rounded-lg text-sm !px-5 !py-2.5 !mt-[15px] !mb-[15px] text-center hover:bg-[#002E6E] hover:text-white transition duration-300">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>