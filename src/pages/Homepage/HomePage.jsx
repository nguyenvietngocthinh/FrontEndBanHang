import React from 'react'
import TypeProduct from '../../component/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../component/SliderComponent/SliderComponent'
import  slider1  from '../../assets/images/slider1.png'
import  slider2  from '../../assets/images/slider2.png'
import  slider3  from '../../assets/images/slider3.png'
import CardComponent from '../../component/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['Thuoc', 'Thuc Phan Chuc Nang', 'Sac Dep']
  return (
    <>
     <div style={{padding: '0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct> 
    </div>
    <div id='container' style={{backgroundColor: '#efefef', padding: '0 120px', height:'1000px'}}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProducts>
       <div style={{ width: '100%', display:'flex', justifyContent: 'center', marginTop:'10px' }}>
          <WrapperButtonMore textButton='Xem thêm' type='outline'
          styleButton={{
            border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
            width: '240px', height: '38px', borderRadius: '4px',
          }}
          styleTextButton={{ fontWeight: 500 }} />
       </div>
      </div>
    </>
  )
}

export default HomePage