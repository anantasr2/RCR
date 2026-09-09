import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  height = "h-[360px] sm:h-[480px]",
  title = "Treatment Comparison",
  price = "",
  tag = "PREMIUM RESTORATION"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      className="w-full bg-white border border-[#E2E8E4] rounded-2xl overflow-hidden shadow-lg select-none"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div 
        ref={containerRef}
        className={`relative w-full ${height} overflow-hidden cursor-ew-resize bg-[#0B1A13]`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background Base) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${afterImage}')` }}
        >
          <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-white text-[#143826] font-label text-xs font-bold uppercase rounded-md shadow border border-[#E2E8E4]">
            AFTER
          </span>
        </div>

        {/* BEFORE Image (Clipped Overlay) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div 
            className="w-full h-full min-w-[800px] sm:min-w-[1024px] bg-cover bg-center"
            style={{ backgroundImage: `url('${beforeImage}')` }}
          >
            <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#C2101C] text-white font-label text-xs font-bold uppercase rounded-md shadow">
              BEFORE
            </span>
          </div>
        </div>

        {/* Divider Handle */}
        <div 
          className="absolute top-0 bottom-0 z-30 w-1 bg-white flex items-center justify-center -translate-x-1/2 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-[#143826] text-white flex items-center justify-center shadow-lg pointer-events-none border-2 border-white">
            <span className="material-symbols-outlined text-base">unfold_more</span>
          </div>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="px-6 py-4 bg-white border-t border-[#E2E8E4] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-body text-sm text-[#143826]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C2101C]"></span>
          <span className="font-bold">{title}</span>
          {price && (
            <>
              <span className="text-[#8FA899]">•</span>
              <span className="font-label text-sm text-[#C2101C] font-bold">{price}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-label text-[11px] uppercase tracking-wider text-[#526B5C] bg-[#F4F8F5] border border-[#D8E5DC] px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}
