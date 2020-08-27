import React from 'react'
import { render } from '@vtex/test-tools/react'

import ProductSpecifications from '../../ProductSpecifications'

describe('<ProductSpecifications /> component', () => {
  const renderComponent = (customProps: any) => {
    const props = {
      ...customProps,
    }

    const comp = <ProductSpecifications {...props} />

    return render(comp)
  }

  it('should be rendered', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
    const { asFragment } = renderComponent()

    expect(asFragment()).toBeTruthy()
  })

  it('should match snapshot with table view and no specifications', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with table view and with specification', () => {
    const { asFragment } = renderComponent({
      specifications: [{ name: 'test', values: ['value'] }],
    })

    expect(asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with tabs view', () => {
    const { asFragment } = renderComponent({
      specifications: [{ name: 'test', values: ['value'] }],
      tabsMode: true,
    })

    expect(asFragment()).toMatchSnapshot()
  })
})