import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

const resolve = (dirName: string) => path.resolve(__dirname, dirName);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});
