export const GlobalBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url(/images/hero/hero5.jpg)',
        filter: 'brightness(0.4) contrast(1.1)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10"></div>
    </div>
  );
};
