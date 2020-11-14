export const icon1 = (
  angle,
  toCam = false,
  fromCam = false,
  circleColor = '#D6D6D6',
  bgColor = '#499C6C',
  bgOpacity = '0.6'
  ) => {
  const svg = `<svg width="64" height="64" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(${angle - 90}, 32, 16)">
        ${toCam || fromCam ? `<g clip-path="url(#clip0)">
            <path d="M58.6667 0L28 16L58.6667 32C58.6667 32 64 26.6667 64 16C64 5.33333 58.6667 0 58.6667 0Z" fill="url(#paint0_linear)" fill-opacity="0.7"/>
            ${toCam ? `<path d="M45 21L39 16L45 11C45 11 43 13.897 43 16C43 18.103 45 21 45 21Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
            ${fromCam ? `<path d="M53 21L59 16L53 11C53 11 55 13.897 55 16C55 18.103 53 21 53 21Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
        </g>`: ''}
        <path d="M29.096 9.39881L29.096 9.39881C29.5266 9.25353 30.1971 9.25179 30.7494 9.50643C31.2773 9.7498 31.7 10.2253 31.7 11.0822V20.9208C31.7 21.7775 31.2776 22.251 30.7498 22.4936C30.1974 22.7474 29.526 22.746 29.094 22.6036C27.6034 22.1121 26.127 21.5092 25.0292 20.8516C24.4797 20.5225 24.0384 20.1875 23.7378 19.8563C23.4356 19.5233 23.3 19.2218 23.3 18.9531L23.3 13.0499C23.3 12.7815 23.4354 12.4815 23.7373 12.1505C24.0378 11.8211 24.479 11.4882 25.0287 11.1603C26.127 10.5053 27.6039 9.90223 29.096 9.39881Z" fill="${bgColor}" fill-opacity="${bgOpacity}" stroke="#424242" stroke-width="0.6"/>
        <path d="M5 8.3L18.5 8.3C19.4542 8.3 20.256 8.53895 20.8126 8.98426C21.3602 9.42236 21.7 10.0829 21.7 11L21.7 12V13.714V18.286V20L21.7 21C21.7 21.9171 21.3602 22.5776 20.8126 23.0157C20.256 23.461 19.4542 23.7 18.5 23.7L5 23.7C3.60642 23.7 2.43338 23.004 1.60077 22.0524C0.763203 21.0952 0.3 19.9129 0.3 19L0.3 13C0.3 12.0871 0.763204 10.9048 1.60077 9.94755C2.43338 8.996 3.60642 8.3 5 8.3Z" fill="${bgColor}" fill-opacity="${bgOpacity}" stroke="#424242" stroke-width="0.6"/>
        <circle cx="12" cy="16" r="5" transform="rotate(90 12 16)" fill="${circleColor}" stroke="#2C2B2B" stroke-width="2"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear" x1="64" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-opacity="0"/>
            <stop offset="1" stop-color="#F5F8FE"/>
        </linearGradient>
        <clipPath id="clip0">
            <rect width="32" height="32" fill="white" transform="translate(32 32) rotate(-90)" />
        </clipPath>
    </defs>
</svg>`;

  // const encodedSvg = btoa(svg)
  const encodedSvg = encodeURIComponent(svg);
  console.log('encodedSvg', encodedSvg);

  // const data = `data:image/svg+xml;base64,${encodedSvg}`;
  const data = `data:image/svg+xml;utf8,${encodedSvg}`;

  return data;
};
