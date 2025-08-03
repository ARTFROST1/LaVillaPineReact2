import React from 'react';

// Компонент для улучшенной микроразметки конкретных предложений недвижимости
export const RealtyOfferMicrodata: React.FC<{
  offerId: string;
  title: string;
  description: string;
  price: number;
  area: number;
  rooms: number;
  images: string[];
  features: string[];
}> = ({ offerId, title, description, price, area, rooms, images, features }) => {
  return (
    <div itemScope itemType="https://schema.org/Product" style={{ display: 'none' }}>
      <meta itemProp="productID" content={offerId} />
      <h1 itemProp="name">{title}</h1>
      <meta itemProp="description" content={description} />
      
      {/* Главное изображение */}
      {images[0] && <img itemProp="image" src={images[0]} alt={title} />}
      
      {/* Дополнительные изображения */}
      {images.slice(1).map((img, index) => (
        <img key={index} itemProp="image" src={img} alt={`${title} фото ${index + 2}`} />
      ))}
      
      {/* Предложение аренды */}
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content={price.toString()} />
        <meta itemProp="priceCurrency" content="RUB" />
        <meta itemProp="availability" content="https://schema.org/InStock" />
        <meta itemProp="businessFunction" content="https://schema.org/LeaseOut" />
        <meta itemProp="unitCode" content="DAY" />
        <meta itemProp="validFrom" content="2025-01-01" />
        <meta itemProp="validThrough" content="2025-12-31" />
        
        {/* Продавец/арендодатель */}
        <div itemProp="seller" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="La Villa Pine" />
          <meta itemProp="telephone" content="+7 (918) 469-24-04" />
        </div>
      </div>
      
      {/* Дополнительные свойства недвижимости */}
      <div itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
        <meta itemProp="name" content="Площадь" />
        <meta itemProp="value" content={`${area} кв.м`} />
      </div>
      
      <div itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
        <meta itemProp="name" content="Количество комнат" />
        <meta itemProp="value" content={rooms.toString()} />
      </div>
      
      {features.map((feature, index) => (
        <div key={index} itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
          <meta itemProp="name" content="Удобства" />
          <meta itemProp="value" content={feature} />
        </div>
      ))}
      
      {/* Категория товара */}
      <meta itemProp="category" content="Недвижимость > Аренда > Дома" />
      
      {/* Состояние */}
      <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
    </div>
  );
};

export default RealtyOfferMicrodata;