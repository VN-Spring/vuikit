export default {
  functional: true,
  render: function (h, ctx) {
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'icon-pagination-next',
        width: 7,
        height: 12,
        viewBox: '0 0 7 12'
      },
      domProps: {
        innerHTML: '<path fill="none" stroke="#000" stroke-width="1.2" d="M1 1l5 5-5 5"/>'
      }
    })
  }
}
