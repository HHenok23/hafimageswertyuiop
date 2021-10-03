import {defineconfig} from 'vite'
import vue from '@vitejs/plugin-vue'

//https://vitejs.dev/config/
export default defineconfig({
    base: '/hfaimages/',
    plugins: [vue()]
})