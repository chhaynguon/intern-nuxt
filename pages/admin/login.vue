<!-- <script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCookie } from '#app'

const username = ref('')
const password = ref('')
const router = useRouter()
const accessToken = useCookie('access-token')

async function login() {
    try {
        const { data, error } = await useFetch('http://localhost:8000/auth/login', {
            method: 'POST',
            body: { username: username.value, password: password.value }
        })
            alert('Login successfully!')
            router.push('/admin/')
    }
    catch (err) {
        alert('Login failed: ' + err.message)
         const token = data.value?.token
        if (!token || typeof token !== 'string') {
            alert('Login failed: no token received')
            return
        }

    }
}
</script> -->
<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = async () => {
    try {
        const res = await $fetch('localhost:8000/api/auth/login', {
            method: 'POST',
            body: { username: username.value, password: password.value }
        })

        // Store token locally
        localStorage.setItem('token', res.access_token)

        // Redirect to dashboard
        navigateTo('/admin')
    } catch (err) {
        console.error('Login failed:', err)
        alert('Invalid username or password')
    }
}
</script>

<template>
    <div class="min-w-full min-h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
        <loginHeader />
        <section class="flex flex-col items-center justify-center !px-5 !py-6 !mx-auto h-[700px] lg:!py-0">
            <div class="w-[18%] bg-[#F15A22] rounded-lg shadow">
                <div class="!p-5 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2x">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6 !mt-[30px]" @submijbt.prevent="login">
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
                        <button type="submit" @click="handleLogin()"
                            class="w-[100%] text-black cursor-pointer bg-white font-medium rounded-lg text-sm !px-5 !py-2.5 !mt-[15px] !mb-[15px] text-center hover:bg-[#002E6E] hover:text-white hover:transition hover:duration-300 transition duration-300">
                            Sign in</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>