module.exports = {
  meta: {
    docs: {
      description: 'consistent-names',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null,
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          module: { type: 'string' },
          localName: { type: 'string' },
        },
      },
    },
  },

  create(context) {
    return {
      ImportDefaultSpecifier(node) {
        context.options.forEach((consistentRule) => {
          const isSameModule = node.parent.source.value === consistentRule.module
          const isSameLocalName = node.local.name === consistentRule.localName

          if (isSameModule && !isSameLocalName) {
            context.report(node, `${consistentRule.module} should be imported as '${consistentRule.localName}'`)
          }
        })
      },
    }
  },
}
