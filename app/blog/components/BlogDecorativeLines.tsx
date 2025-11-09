export default function BlogDecorativeLines() {
  return (
    <>
      {/* Decorative Vertical Lines - Left Side */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* First line - shortest, most transparent */}
        <div className="absolute top-[10%] left-[8%] xl:left-[12%] w-px h-[60%] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>

        {/* Second line - medium length */}
        <div className="absolute top-[5%] left-[6%] xl:left-[10%] w-px h-[75%] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* Third line - longest, most visible */}
        <div className="absolute top-0 left-[5%] xl:left-[9%] w-px h-[85%] bg-gradient-to-b from-transparent via-white/25 to-transparent"></div>
      </div>

      {/* Decorative Vertical Lines - Right Side */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* First line - shortest, most transparent */}
        <div className="absolute top-[10%] right-[8%] xl:right-[12%] w-px h-[60%] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>

        {/* Second line - medium length */}
        <div className="absolute top-[5%] right-[6%] xl:right-[10%] w-px h-[75%] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* Third line - longest, most visible */}
        <div className="absolute top-0 right-[5%] xl:right-[9%] w-px h-[85%] bg-gradient-to-b from-transparent via-white/25 to-transparent"></div>
      </div>
    </>
  );
}
