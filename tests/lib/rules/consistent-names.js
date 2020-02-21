const { RuleTester } = require('eslint')

const rule = require('../../../lib/rules/consistent-names')

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
})

ruleTester.run('consistent-names', rule, {

  valid: [
    {
      code: "import styled from 'styled-components'",
      options: [
        {
          module: 'styled-components',
          localName: 'styled',
        },
      ],
    },
    {
      code: "import styledMacro from 'styled-components/macro'",
      options: [
        {
          module: 'styled-components/macro',
          localName: 'styledMacro',
        },
      ],
    },
    {
      code: "import { default as styledC } from 'styled-components'",
      options: [
        {
          module: 'styled-components',
          localName: 'styled',
        },
      ],
    },
    {
      code: "import { styledC } from 'styled-components'",
      options: [
        {
          module: 'styled-components',
          localName: 'styled',
        },
      ],
    },
  ],

  invalid: [
    {
      code: "import s from 'styled-components'",
      options: [
        {
          module: 'styled-components',
          localName: 'styled',
        },
      ],
      errors: [{
        message: "styled-components should be imported as 'styled'",
        type: 'ImportDefaultSpecifier',
      }],
    },

    {
      code: `
        import s from 'styled-components'
        import cx from 'class-names'
      `,
      options: [
        {
          module: 'styled-components',
          localName: 'styled',
        },
        {
          module: 'class-names',
          localName: 'classNames',
        },
      ],
      errors: [{
        message: "styled-components should be imported as 'styled'",
        type: 'ImportDefaultSpecifier',
      }, {
        message: "class-names should be imported as 'classNames'",
        type: 'ImportDefaultSpecifier',
      }],
    },

    {
      code: `
        import s from 'styled-components'
        import classNames from 'class-names'
        import styled from 'another-styled-components'
      `,
      options: [
        {
          module: 'styled-components',
          localName: 'styled',
        },
        {
          module: 'class-names',
          localName: 'classNames',
        },
      ],
      errors: [{
        message: "styled-components should be imported as 'styled'",
        type: 'ImportDefaultSpecifier',
      }],
    },

    {
      code: "import s from 'styled-components/macros'",
      options: [
        {
          module: 'styled-components/macros',
          localName: 'styledMacro',
        },
      ],
      errors: [{
        message: "styled-components/macros should be imported as 'styledMacro'",
        type: 'ImportDefaultSpecifier',
      }],
    },
  ],
})
