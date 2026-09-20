export function FooterSpectralBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Spectral Grain Noise Gradient Bar matching Image 4 */}
      <div className="relative h-20 sm:h-28 w-full">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #60a5fa 0%, #a855f7 32%, #ec4899 65%, #f97316 100%)",
          }}
        />

        {/* SVG Turbulance Noise Overlay matching Image 4 texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-45 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Smooth top fade transition into background */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent opacity-80" />
      </div>
    </div>
  );
}
