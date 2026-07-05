import fs from 'node:fs'
import path from 'node:path'

/**
 * TypeScript's `rewriteRelativeImportExtensions` expects relative imports to use the
 * source `.ts` extension (rewritten to `.js` at build time, resolved natively by Node).
 * No maintained ESLint rule enforces this yet, so we check it ourselves.
 */
function checkSource(context, source) {
  if (typeof source.value !== 'string' || !source.value.startsWith('.') || !source.value.endsWith('.js'))
    return

  const jsPath = path.resolve(path.dirname(context.filename), source.value)
  const tsPath = jsPath.replace(/\.js$/, '.ts')

  if (fs.existsSync(tsPath) && !fs.existsSync(jsPath)) {
    context.report({
      node: source,
      message: 'Relative imports should use the .ts extension of the source file; it is rewritten to .js at build time.',
      fix: fixer => fixer.replaceText(source, JSON.stringify(source.value.replace(/\.js$/, '.ts'))),
    })
  }
}

export default {
  rules: {
    'relative-ts-extensions': {
      meta: {
        type: 'problem',
        fixable: 'code',
        schema: [],
      },
      create(context) {
        return {
          ImportDeclaration: node => checkSource(context, node.source),
          ExportNamedDeclaration: node => node.source && checkSource(context, node.source),
          ExportAllDeclaration: node => checkSource(context, node.source),
          ImportExpression: node => node.source.type === 'Literal' && checkSource(context, node.source),
        }
      },
    },
  },
}
