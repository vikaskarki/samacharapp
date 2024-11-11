module.exports = {
    "env": {
      "browser": true,  // Allows browser globals like `window` and `document`
      "es2021": true    // Enables modern JavaScript features (ES2021)
    },
    "extends": [
      "eslint:recommended",   // Use ESLint's recommended set of rules
      "plugin:react/recommended"  // Use React-specific linting rules
    ],
    "parserOptions": {
      "ecmaVersion": 12,   // Allows ECMAScript 2021 syntax
      "sourceType": "module"  // Supports ES module imports (import/export)
    },
    "plugins": [
      "react"   // Adds React linting rules
    ],
    "rules": {
      "no-unused-vars": "off",   // Disable unused variable warnings
      "react/prop-types": "off",  // Disable prop types validation warnings
      "no-console": "warn",   // Show a warning for console statements
      "react/react-in-jsx-scope": "off",  // No longer needed for React 17+
      "semi": ["error", "always"],  // Enforce semicolons at the end of statements
      "quotes": ["error", "single"]  // Enforce the use of single quotes for strings
    }
  };
  