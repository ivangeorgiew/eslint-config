const enabledRules = {
    'accessor-pairs': [
        'error',
        { setWithoutGet: true, enforceForClassMembers: true },
    ],
    'array-callback-return': ['error', { allowImplicit: true, checkForEach: true }],
    'block-scoped-var': ['error'],
    'class-methods-use-this': ['error'],
    'complexity': ['error'],
    'consistent-return': ['error'],
    'consistent-this': ['error', 'that'],
    'constructor-super': ['error'],
    'default-case': ['error'],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    'dot-notation': ['error', { allowKeywords: false }],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'for-direction': ['error'],
    'func-name-matching': ['error', 'never', { considerPropertyDescriptor: true }],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression'],
    'getter-return': ['error'],
    'grouped-accessor-pairs': ['error'],
    'guard-for-in': ['error'],
    'no-array-constructor': ['error'],
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': ['error'],
    'no-bitwise': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-class-assign': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error'],
    'no-const-assign': ['error'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-constructor-return': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-delete-var': ['error'],
    'no-div-regex': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-class-members': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-empty-pattern': ['error'],
    'no-eval': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-func-assign': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-coercion': ['error'],
    'no-implicit-globals': ['error', { lexicalBindings: true }],
    'no-implied-eval': ['error'],
    'no-import-assign': ['error'],
    'no-inline-comments': ['error'],
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error'],
    'no-invalid-this': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-loss-of-precision': ['error'],
    'no-misleading-character-class': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-symbol': ['error'],
    'no-new-wrappers': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-obj-calls': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error'],
    'no-promise-executor-return': ['error'],
    'no-proto': ['error'],
    'no-prototype-builtins': ['error'],
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-regex-spaces': ['error'],
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-sequences': ['error'],
    'no-setter-return': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-this-before-super': ['error'],
    'no-throw-literal': ['error'],
    'no-undef': ['error', { typeof: true }],
    'no-undef-init': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unreachable': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-labels': ['error'],
    'no-unused-vars': [
        'error',
        {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
        },
    ],
    'no-use-before-define': ['error'],
    'no-useless-backreference': ['error'],
    'no-useless-call': ['error'],
    'no-useless-catch': ['error'],
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-rename': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': ['error'],
    'no-with': ['error'],
    'object-shorthand': ['error', 'properties', { avoidQuotes: true }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'never'],
    'prefer-const': [
        'error',
        { destructuring: 'any', ignoreReadBeforeAssign: false },
    ],
    'prefer-exponentiation-operator': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-object-spread': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': ['error'],
    'radix': ['error'],
    'require-atomic-updates': ['error'],
    'require-await': ['error'],
    'require-yield': ['error'],
    'spaced-comment': ['error', 'always'],
    'strict': ['error'],
    'symbol-description': ['error'],
    'use-isnan': ['error', { enforceForSwitchCase: true, enforceForIndexOf: true }],
    'valid-typeof': ['error'],
    'vars-on-top': ['error'],
    'yoda': ['error'],
    'arrow-body-style': [
        'error',
        'as-needed',
        { requireReturnForObjectLiteral: false },
    ],
    'camelcase': [
        'error',
        {
            allow: ['^UNSAFE_'],
            properties: 'never',
            ignoreGlobals: true,
        },
    ],
    'multiline-comment-style': ['error', 'separate-lines'],
    'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: true },
    ],
}

const disabledRuleNames = [
    'capitalized-comments',
    'id-denylist',
    'id-length',
    'id-match',
    'line-comment-position',
    'lines-between-class-members',
    'no-console',
    'prefer-named-capture-group',
    'require-unicode-regexp',
    'no-alert',
    'max-classes-per-file',
    'no-empty-function',
    'no-eq-null',
    'no-extend-native',
    'no-magic-numbers',
    'no-restricted-globals',
    'no-restricted-properties',
    'no-shadow',
    'no-warning-comments',
    'max-depth',
    'max-lines',
    'max-lines-per-function',
    'init-declarations',
    'max-nested-callbacks',
    'max-params',
    'max-statements',
    'max-statements-per-line',
    'no-else-return',
    'no-continue',
    'no-self-compare',
    'new-cap',
    'no-multi-assign',
    'no-negated-condition',
    'no-nested-ternary',
    'no-restricted-exports',
    'no-restricted-imports',
    'no-restricted-syntax',
    'no-ternary',
    'no-underscore-dangle',
    'no-undefined',
    'no-plusplus',
    'padding-line-between-statements',
    'prefer-destructuring',
    'prefer-spread',
    'prefer-template',
    'sort-imports',
    'sort-keys',
    'sort-vars',
]

const disabledRules = disabledRuleNames.reduce((acc, ruleName) => {
    acc[ruleName] = 'off'
    return acc
}, {})

const deprecated = [
    'callback-return',
    'global-require',
    'handle-callback-err',
    'id-blacklist',
    'indent-legacy',
    'lines-around-directive',
    'newline-after-var',
    'newline-before-return',
    'no-buffer-constructor',
    'no-catch-shadow',
    'no-mixed-requires',
    'no-native-reassign',
    'no-negated-in-lhs',
    'no-new-require',
    'no-path-concat',
    'no-process-env',
    'no-process-exit',
    'no-restricted-modules',
    'no-spaced-func',
    'no-sync',
    'prefer-reflect',
    'require-jsdoc',
    'valid-jsdoc',
]

module.exports = {
    enabledRules,
    disabledRuleNames,
    disabledRules,
    deprecated,
}