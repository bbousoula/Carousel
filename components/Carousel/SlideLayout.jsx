import React from "react";
import Banner from "../Banner";

const SlideLayout = (props) => {
  const {
    title,
    description,
    mobileSrc,
    tabletSrc,
    desktopSrc,
    alt,
    bannerClass,
    ctaName,
    ctaLink
  } = props;
  return (
    <div className="banner">
      <div className="banner-content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="cta">
          <a
            title={ctaName}
            className="cta-button"
            href={ctaLink}
            rel="noreferrer"
            target="_blank"
          >
            <span>{ctaName}</span>
          </a>
        </div>
      </div>
      <div className="banner-image">
        <Banner
          mobileSrc={mobileSrc}
          tabletSrc={tabletSrc}
          desktopSrc={desktopSrc}
          alt={alt}
          bannerClass={bannerClass}
        />
      </div>
    </div>
  );
};

export default SlideLayout;
