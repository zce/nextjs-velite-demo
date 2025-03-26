import { build } from 'velite'

import type { NextConfig } from 'next'

console.log('process.argv', process.argv)
const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  build({ watch: isDev, clean: !isDev })
}

export default {
  basePath: '/nextjs-velite-demo',
  output: "export"
} satisfies NextConfig
