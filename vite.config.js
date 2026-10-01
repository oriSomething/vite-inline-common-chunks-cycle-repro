export default {
  build: {
    minify: false,
    modulePreload: {
      polyfill: false,
    },
    rolldownOptions: {
      input: {
        app: new URL('src/main.js', import.meta.url).pathname,
        'utility-page': new URL('src/utilities-page.js', import.meta.url).pathname,
      },
      output: {
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
        codeSplitting: {
          experimentalInlineCommonChunks: {
            maxSize: 128,
          },
        },
      },
    },
  },
};
