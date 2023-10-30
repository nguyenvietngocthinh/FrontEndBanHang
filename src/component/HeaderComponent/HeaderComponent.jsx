import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { 
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'


const HeaderComponent = () => {
  return (
    <div>
      {/* Ten Thuong hieu */}
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>ShopTPCN</WrapperTextHeader>
        </Col>

       {/* Thnah search */}
        <Col span={12}>
         <ButtonInputSearch
            size='large' 
            bordered={false}
            textButton='Tìm kiếm'
            placeholder='input search text'
         />
        </Col>

        {/* User */}
        <Col span={6} style={{display: 'flex', gap: '20px', alignItems:'center'}}> 
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: '30px' }} />
            </div>
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản <CaretDownOutlined /></WrapperTextHeaderSmall>
              </div>
            </div>
          </WrapperHeaderAccount>
          {/* Shopping Cart */}
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>


    </div>
  )
}

export default HeaderComponent