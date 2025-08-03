import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'realEstate' | 'breadcrumbs';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return (
          <div itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="La Villa Pine" />
            <meta itemProp="description" content="Премиальные лофт-дома с подогреваемыми бассейнами и саунами в Адыгее" />
            <meta itemProp="url" content="https://lavillapine.onrender.com" />
            <meta itemProp="logo" content="https://lavillapine.onrender.com/images/favicon.png" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="addressCountry" content="RU" />
              <meta itemProp="addressRegion" content="Республика Адыгея" />
              <meta itemProp="addressLocality" content="Адыгея" />
            </div>
            <meta itemProp="telephone" content="+7 (918) 469-24-04" />
            <meta itemProp="priceRange" content="₽₽₽" />
          </div>
        );
      
      case 'realEstate':
        return (
          <div itemScope itemType="https://schema.org/RealEstateListing">
            <h1 itemProp="name" style={{ display: 'none' }}>La Villa Pine - аренда премиальных лофт-домов в Адыгее</h1>
            <meta itemProp="description" content="Роскошные лофт-дома с 3 спальнями, подогреваемыми бассейнами, саунами и современным дизайном в живописном лесном окружении Адыгеи" />
            
            <div itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
              <meta itemProp="price" content="15000" />
              <meta itemProp="priceCurrency" content="RUB" />
              <meta itemProp="unitText" content="за сутки" />
            </div>
            
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="addressCountry" content="RU" />
              <meta itemProp="postalCode" content="385000" />
              <meta itemProp="addressRegion" content="Республика Адыгея" />
              <meta itemProp="addressLocality" content="Адыгея" />
            </div>
            
            <div itemProp="floorSize" itemScope itemType="https://schema.org/QuantitativeValue">
              <meta itemProp="value" content="120" />
              <meta itemProp="unitCode" content="MTK" />
            </div>
            
            <meta itemProp="numberOfRooms" content="3" />
            <meta itemProp="numberOfBathroomsTotal" content="2" />
            
            <img itemProp="image" src="/images/og-image.jpg" alt="La Villa Pine - премиальный лофт-дом с бассейном" style={{ display: 'none' }} />
            
            <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="price" content="15000" />
              <meta itemProp="priceCurrency" content="RUB" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <meta itemProp="validFrom" content="2025-01-01" />
              <meta itemProp="validThrough" content="2025-12-31" />
            </div>
            
            <div itemProp="amenityFeature" itemScope itemType="https://schema.org/LocationFeatureSpecification">
              <meta itemProp="name" content="Подогреваемый бассейн" />
              <meta itemProp="value" content="true" />
            </div>
            
            <div itemProp="amenityFeature" itemScope itemType="https://schema.org/LocationFeatureSpecification">
              <meta itemProp="name" content="Сауна" />
              <meta itemProp="value" content="true" />
            </div>
            
            <div itemProp="amenityFeature" itemScope itemType="https://schema.org/LocationFeatureSpecification">
              <meta itemProp="name" content="Кондиционер" />
              <meta itemProp="value" content="true" />
            </div>
            
            <div itemProp="amenityFeature" itemScope itemType="https://schema.org/LocationFeatureSpecification">
              <meta itemProp="name" content="Wi-Fi" />
              <meta itemProp="value" content="true" />
            </div>
          </div>
        );
      
      case 'breadcrumbs':
        if (!data || !data.items) return null;
        
        return (
          <ol itemScope itemType="https://schema.org/BreadcrumbList" style={{ display: 'none' }}>
            {data.items.map((item: any, index: number) => (
              <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {item.url ? (
                  <a itemProp="item" href={item.url}>
                    <span itemProp="name">{item.name}</span>
                  </a>
                ) : (
                  <span itemProp="name">{item.name}</span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        );
      
      default:
        return null;
    }
  };

  return <>{generateStructuredData()}</>;
};

// Компонент для хлебных крошек на странице
export const BreadcrumbsSchema: React.FC<{ items: Array<{ name: string; url?: string }> }> = ({ items }) => {
  return <StructuredData type="breadcrumbs" data={{ items }} />;
};

// Компонент для микроразметки организации
export const OrganizationSchema: React.FC = () => {
  return <StructuredData type="organization" />;
};

// Компонент для микроразметки недвижимости
export const RealEstateSchema: React.FC = () => {
  return <StructuredData type="realEstate" />;
};

export default StructuredData;