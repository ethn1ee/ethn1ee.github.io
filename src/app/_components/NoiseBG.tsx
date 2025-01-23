const NoiseBG = () => {
  return (
    <div
      style={{
        WebkitMaskImage:
          "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
      }}
      className="w-full h-full absolute top-0 left-0 bg-noise z-0"
    />
  );
};

export default NoiseBG;
