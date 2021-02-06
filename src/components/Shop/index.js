import React from 'react';
import { ShopDiv, ImgShop } from './style';
import { shop } from '../../database/shop.db';
export default function shopHome() {
    return (
        <ShopDiv>
            <ImgShop src={shop.camisa.imgURL} alt="teste" />
        </ShopDiv>
    );
}