// Lightweight dependency-free formatting gate: final newline and no trailing whitespace.
import { readdirSync, readFileSync } from 'node:fs'
import { extname, join } from 'node:path'

const allowed = new Set(['.js', '.md', '.json', '.yml', '.yaml'])
const ignoredDirs = new Set(['.git', 'node_modules'])
let failures = 0

function checkDirectory(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) checkDirectory(file)
      continue
    }
    if (!entry.isFile() || !allowed.has(extname(entry.name))) continue
    const content = readFileSync(file, 'utf8')
    if (!content.endsWith('\n')) {
      console.error(`${file}: missing final newline`)
      failures++
    }
    content.split('\n').forEach((line, index) => {
      if (/[ \t]+$/.test(line)) {
        console.error(`${file}:${index + 1}: trailing whitespace`)
        failures++
      }
    })
  }
}

checkDirectory('.')
if (failures > 0) {
  console.error(`Formatting failed with ${failures} issue(s).`)
  process.exitCode = 1
} else {
  console.log('Formatting check passed.')
}
