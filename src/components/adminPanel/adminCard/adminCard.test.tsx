import { render } from '@testing-library/react'
import AdminCard from './adminCard'

describe('AdminCard', () => {
    const props= {
      intro: '',
      name: '',
      sizeType: '',
      barcode: 1,
      manuf: '',
      img: '',
      brand: '',
      cost: 1,
      size: '',
      types: [],
      loadUpdate: false,
      updateCard: jest.fn(),
    };
  it('будет картинка при loadUpdate = 0', () => {
    const { getByAltText } = render(<AdminCard  {...props}/>)
    expect(getByAltText('loading')).toBeInTheDocument()
  })
})
