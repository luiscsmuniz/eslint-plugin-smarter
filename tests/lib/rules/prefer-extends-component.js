const { RuleTester } = require('eslint')

const rule = require('../../../lib/rules/prefer-extends-component')

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
})

ruleTester.run('prefer-extends-component', rule, {

  valid: [
    {
      code: `
        class Button extends Component {}
        const Button = class extends Component {}
        const Button = class ExpressionNamed extends Component {}
      `,
    },

    {
      code: `
        class Button extends PureComponent {}
        const Button = class extends PureComponent {}
        const Button = class ExpressionNamed extends PureComponent {}
      `,
    },

    {
      code: `
        class User {}
        const User = class {}
        const User = class ExpressionNamed {}
      `,
    },
  ],

  invalid: [
    {
      code: `
        class Button extends React.Component {}
        const Button = class extends React.Component {}
        const Button = class ExpressionNamed extends React.Component {}
      `,
      errors: [{
        message: 'Prefer extends Component over React.Component',
        type: 'MemberExpression',
      }, {
        message: 'Prefer extends Component over React.Component',
        type: 'MemberExpression',
      }, {
        message: 'Prefer extends Component over React.Component',
        type: 'MemberExpression',
      }],
    },

    {
      code: `
        class Button extends React.PureComponent {}
        const Button = class extends React.PureComponent {}
        const Button = class ExpressionNamed extends React.PureComponent {}
      `,
      errors: [{
        message: 'Prefer extends PureComponent over React.PureComponent',
        type: 'MemberExpression',
      }, {
        message: 'Prefer extends PureComponent over React.PureComponent',
        type: 'MemberExpression',
      }, {
        message: 'Prefer extends PureComponent over React.PureComponent',
        type: 'MemberExpression',
      }],
    },
  ],
})
