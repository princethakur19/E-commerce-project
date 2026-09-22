import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website ia an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transacitons without need for a physcial presence E-commerce websites have gained immence popularity due to their convenience, accessiblity, and the global reach they offer.</p>
        <p>E-commerce website typically display products or services along with detailed description, Images, prices, and any available variations (e.g.sizes, colors). Each product usually has its own dedication page with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
