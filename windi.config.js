import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    preflight: false,
    safelist: [
        "border-b-rose-700", "bg-rose-200",
        "border-b-green-700", "bg-green-200",
        "border-b-amber-700", "bg-amber-200",
        "border-b-blue-700", "bg-blue-200"
   ]
})