const { defineConfig } = require('vite')
const path = require('path')
const dts = require('vite-plugin-dts')

module.exports = defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: 'src/index.ts'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'InfiniteScroll',
      fileName: format => `infinite-scroll.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
