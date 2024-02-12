import React from 'react';
import { products } from '../../../../data/products';
import { Card } from '../cards/card/card';
import { nanoid } from 'nanoid';

export const Tab = () => {
    const names = Object.keys(products[0]);
    const [tab, setTab] = React.useState(products[0].All);
    const [tabName, setTabName] = React.useState(names[0]);

    const changeTab = (slug) => {
        setTab(products[0][slug]);
        setTabName(slug);
        console.log(products[0][slug]);
    };

    return (
        <div className='mb-[58px]'>
            <div className='flex items-center justify-center gap-[60px] w-[100%] ml-auto mr-auto mb-[62px]'>
                {names.map((item) => (
                    <button key={nanoid()} onClick={() => changeTab(item)} className={tabName === item ? "text-pink text-[18px] border-b border-b-1 border-pink" : "text-[18px] text-[#151875]"}>{item}</button>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-[42px]'>
                {tab.map((item) => (
                    <Card key={item.id} name={item.name} img={item.img} price={item.price} oldPrice={item.oldPrice} />
                ))}
            </div>
        </div>
    );
};
