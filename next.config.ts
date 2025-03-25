const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  import('velite').then(v => v.build({ watch: isDev, clean: !isDev }))
}

/** @type {import('next').NextConfig} */
export default {
  output: "export"
}
