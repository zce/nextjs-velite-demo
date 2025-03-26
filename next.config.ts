import { build } from 'velite'

import type { NextConfig } from 'next'

export default async (): Promise<NextConfig> => {
  const isDev = process.argv.indexOf('dev') !== -1
  const isBuild = process.argv.indexOf('build') !== -1
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    await build({ watch: isDev, clean: !isDev })
  }

  return {
    output: "export"
  }
}
