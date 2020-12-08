const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const baseConfig = {
  name: 'build',
  mode: 'none',
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: resolveApp('dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
    '@feature-hub/react': '@feature-hub/react',
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader',
        include: resolveApp('./src/index.tsx'),
      },
    ],
  },
};

module.exports = (env) => [
  merge.smart(baseConfig, {
    target: 'web',
    output: {
      filename: 'app.js',
      libraryTarget: 'umd',
    },
  })
];
