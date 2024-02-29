import React, { useEffect, useRef } from 'react';


const TrustBox = ({ templateId, businessUnitId, locale, styleHeight, styleWidth, theme }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Load the TrustBox widget if the Trustpilot script is available
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={styleHeight}
      data-style-width={styleWidth}
      data-theme={theme}
    >
      <a href="https://www.trustpilot.com/review/example.com" target="_blank" rel="noopener noreferrer">
        Trustpilot
      </a>
    </div>
  );
};

export default TrustBox;