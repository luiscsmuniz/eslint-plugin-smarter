module.exports = {
  meta: {
    docs: {
      description: 'Prefer extends (Pure)Component over React.(Pure)Component',
      category: 'Fill me in',
      recommended: 'error',
    },
    fixable: null,
    schema: {},
  },

  create(context) {
    const componentNames = ['Component', 'PureComponent']

    const visitClassDefinition = (node) => {
      const { superClass } = node

      if (
        superClass
        && superClass.type === 'MemberExpression'
        && superClass.object.name === 'React'
        && componentNames.includes(superClass.property.name)
      ) {
        const componentName = superClass.property.name

        context.report(superClass, `Prefer extends ${componentName} over React.${componentName}`)
      }
    }

    return {
      ClassDeclaration: visitClassDefinition,
      ClassExpression: visitClassDefinition,
    }
  },
}
