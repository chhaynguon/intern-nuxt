<script setup>
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
        alert('Login Successfully')
        // Store token locally
        localStorage.setItem('token', `Bearer ${res.access_token}`)
        await navigateTo('/admin/dashboard')
    } catch (error) {
        console.error('Login failed:', error)
        alert('Login failed')
    }

}
</script>

<template>
    <div class="min-w-full min-h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
        <section class="w-[1000px] h-screen !mx-auto !py-10">
            <div class="w-[25%] place-self-center">
                <a href="/user/">
                    <img class="!py-10" src="https://www.philliptrustee.com.kh/v2/img/trustee.png" alt="" />
                </a>
            </div>
            <div class="w-[30%] bg-[#F15A22] rounded-lg shadow !mx-auto">
                <div class="!p-5 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2x">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6 !mt-[30px]" @submit.prevent="handleLogin">
                        <div class="relative z-0 w-full !mb-5 group">
                            <input v-model="username" type="text" name="name" id="name"
                                class="block !py-2.5 !px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#002E6E] focus:outline-none focus:ring-0 focus:border-[#002E6E] peer"
                                placeholder="" required />
                            <label for=""
                                class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Username</label>
                        </div>

                        <div class="relative z-0 w-full !mb-5 group">
                            <input v-model="password" type="password" name="floating_password" id="floating_password"
                                class="block !py-2.5 !px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#002E6E] focus:outline-none focus:ring-0 focus:border-[#002E6E] peer"
                                placeholder=" " required />
                            <label for="floating_password"
                                class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        <div class="flex items-center justify-between !mt-3">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-black rounded">
                                </div>
                                <div class="!ml-3 text-sm">
                                    <label for="remember" class="text-white">Remember me</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full text-black cursor-pointer bg-white font-medium rounded-lg text-sm !px-5 !py-2.5 !mt-[15px] !mb-[15px] text-center hover:bg-[#002E6E] hover:text-white hover:transition hover:duration-300 transition duration-300">
                            Sign in</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>