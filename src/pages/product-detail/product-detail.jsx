import React from 'react';
import { useParams } from 'react-router-dom';
import { featuredProducts } from '../../data/home-data';
import { Hero } from '../../components/ui/hero/hero';
import { DetailCard } from '../home/components/cards/detail-card';

export const ProductDetail = () => {
    const { id } = useParams(); 
    const ID = parseInt(id)
    const product = featuredProducts.find(item => item.id === ID);
    return (
        <div>
            <Hero title="Product Details" page="Product Details"/>
        <div>
            <DetailCard img={product.img} title={product.title} price={product.price} />
        </div>
        </div>

    );
};
