'use client'
export function BadgeIcon({ icon, decorationText, className = '' }) {
    return (
      <>
        <div className={`flex p-2 rounded-md z-[1] ${className}`}>
          {icon}
          <h2
            className="text-white text-center font-bold notranslate"
            translate="no"
          >
            {decorationText}
          </h2>
        </div>
      </>
    );
  }