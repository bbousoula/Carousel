const Banner = (props) => {
  const { mobileSrc, tabletSrc, desktopSrc, alt, bannerClass } = props;
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 639px)" />
      <source
        srcSet={tabletSrc}
        media="(min-width: 640px) and (max-width: 768px)"
      />
      <source srcSet={desktopSrc} media="(min-width: 769px)" />
      <img className={bannerClass} src={desktopSrc} alt={alt} />
    </picture>
  );
};
export default Banner;
