/**
 * Copyright (C) 2021 Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */
'use strict';

module.exports = {
  extends: 'stylelint-config-standard-scss',
  defaultSeverity: 'error',
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'plugin/selector-bem-pattern': { preset: 'bem' },
    'alpha-value-notation': 'number',
    'scss/at-rule-no-unknown': null,
    'at-rule-no-unknown': null,
    'color-hex-length': 'long',
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-semicolon-newline-after': 'always',
    'scss/dollar-variable-empty-line-before': null,
    'number-leading-zero': 'never',
    'rule-empty-line-before': ['always', { 'except': ['first-nested'] }],
    'selector-class-pattern': '^\.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
    'string-quotes': 'single'
  }
};
