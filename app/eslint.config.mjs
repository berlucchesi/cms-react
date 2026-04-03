import { defineConfig } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([{
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
        parser: tsParser, // Use TypeScript parser
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'no-trailing-spaces': 'error'
    },
}])