
import React from 'react'
import { StarFilled } from '@ant-design/icons'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText } from './style'

const CardComponent = () => {
  return (
    <WrapperCardStyle
    hoverable
    headStyle={{width: '200px', height: '200px'}}
    style={{ width: 200 }}
    bodyStyle={{padding: '10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Thuoc</StyleNameProduct>
    <WrapperReporText>
        <span style={{marginRight: '4px'}}>
            <span>4.95</span>  <StarFilled style={{fontSize:'12px', color:'yellow'}}/>
        </span>
        <span> | Da Ban 1000+</span>
    </WrapperReporText>
    <WrapperPriceText>
        1.000.000d
        <WrapperDiscountText>
            -5%
        </WrapperDiscountText>
    </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent