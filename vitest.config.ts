import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true
  }
})
