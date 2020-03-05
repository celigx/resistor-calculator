import React from "react";

export default function Resistor({ firstColor, secondColor, multiplierColor, toleranceColor, firstValue, secondValue, multiplierValue, toleranceValue }) {
  firstColor = firstColor === null ? "#A1A1A1" : firstColor
  secondColor = secondColor === null ? "#A1A1A1" : secondColor
  multiplierColor = multiplierColor === null ? "#A1A1A1" : multiplierColor
  toleranceColor = toleranceColor === null ? "#A1A1A1" : toleranceColor

  firstValue = firstValue === null ? `-` : firstValue
  secondValue = secondValue === null ? `-` : secondValue
  multiplierValue = multiplierValue === null ? `-` : `x${multiplierValue}Ω`
  toleranceValue = toleranceValue === null ? `-` : `±${toleranceValue}%`;

  const textColor = {
    firstColor: firstColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
    secondColor: secondColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
    multiplierColor: multiplierColor === '#FFFFFF' ? '#000000' : '#FFFFFF'
  }

  const strokeColor = {
    firstColor: firstColor === "#FFFFFF" ? "#CCCCCC" : null,
    secondColor: secondColor === "#FFFFFF" ? "#CCCCCC" : null,
    multiplierColor: multiplierColor === "#FFFFFF" ? "#CCCCCC" : null
  };
  

  return (
    <svg width="442" height="182" viewBox="0 0 442 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 10">
      <g id="Union">
      <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="442" height="104" fill="black">
      <rect fill="white" width="442" height="104"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M131 94C131 98.4183 127.418 102 123 102L72.7317 102C68.5856 102 65.1265 98.8323 64.7626 94.7022L61.7049 60H17L17 85H2V60V50C2 47.2386 4.23858 45 7 45H17H61.6168L64.7626 9.29783C65.1265 5.16769 68.5855 2.00001 72.7317 2.00001L123 2C127.418 2 131 5.58172 131 10L131 17H311V10C311 5.58172 314.582 2 319 2H369.268C373.414 2 376.874 5.16769 377.237 9.29783L380.383 45H425H435C437.761 45 440 47.2386 440 50V60V85H425V60H380.295L377.237 94.7022C376.874 98.8323 373.414 102 369.268 102H319C314.582 102 311 98.4183 311 94V87H131V94Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M131 94C131 98.4183 127.418 102 123 102L72.7317 102C68.5856 102 65.1265 98.8323 64.7626 94.7022L61.7049 60H17L17 85H2V60V50C2 47.2386 4.23858 45 7 45H17H61.6168L64.7626 9.29783C65.1265 5.16769 68.5855 2.00001 72.7317 2.00001L123 2C127.418 2 131 5.58172 131 10L131 17H311V10C311 5.58172 314.582 2 319 2H369.268C373.414 2 376.874 5.16769 377.237 9.29783L380.383 45H425H435C437.761 45 440 47.2386 440 50V60V85H425V60H380.295L377.237 94.7022C376.874 98.8323 373.414 102 369.268 102H319C314.582 102 311 98.4183 311 94V87H131V94Z" fill="#E1E1E1"/>
      <path d="M123 102V100V102ZM72.7317 102V104V102ZM64.7626 94.7022L66.7549 94.5266L64.7626 94.7022ZM61.7049 60L63.6972 59.8245L63.5364 58H61.7049V60ZM17 60V58H15V60H17ZM17 85V87H19V85H17ZM2 85H0V87H2V85ZM61.6168 45V47H63.4483L63.6091 45.1755L61.6168 45ZM64.7626 9.29783L62.7703 9.12228V9.12229L64.7626 9.29783ZM72.7317 2.00001V4.00001V2.00001ZM123 2V0V2ZM131 10H129V10L131 10ZM131 17L129 17L129 19H131V17ZM311 17V19H313V17H311ZM377.237 9.29783L379.23 9.12228V9.12228L377.237 9.29783ZM380.383 45L378.391 45.1755L378.552 47H380.383V45ZM440 85V87H442V85H440ZM425 85H423V87H425V85ZM425 60H427V58H425V60ZM380.295 60V58H378.464L378.303 59.8245L380.295 60ZM377.237 94.7022L379.23 94.8777L377.237 94.7022ZM311 87H313V85H311V87ZM131 87V85H129V87H131ZM123 104C128.523 104 133 99.5229 133 94H129C129 97.3137 126.314 100 123 100V104ZM72.7317 104L123 104V100L72.7317 100V104ZM62.7703 94.8777C63.2252 100.04 67.549 104 72.7317 104V100C69.6221 100 67.0278 97.6242 66.7549 94.5266L62.7703 94.8777ZM59.7126 60.1755L62.7703 94.8777L66.7549 94.5266L63.6972 59.8245L59.7126 60.1755ZM17 62H61.7049V58H17V62ZM19 85V60H15L15 85H19ZM2 87H17V83H2V87ZM0 60V85H4V60H0ZM0 50V60H4V50H0ZM7 43C3.134 43 0 46.134 0 50H4C4 48.3431 5.34315 47 7 47V43ZM17 43H7V47H17V43ZM61.6168 43H17V47H61.6168V43ZM62.7703 9.12229L59.6245 44.8245L63.6091 45.1755L66.7548 9.47337L62.7703 9.12229ZM72.7317 5.126e-06C67.549 5.60284e-06 63.2252 3.95961 62.7703 9.12228L66.7548 9.47337C67.0278 6.37577 69.6221 4.00001 72.7317 4.00001V5.126e-06ZM123 0L72.7317 5.126e-06V4.00001L123 4V0ZM133 10C133 4.47715 128.523 0 123 0V4C126.314 4 129 6.68629 129 10H133ZM133 17L133 10L129 10L129 17L133 17ZM311 15H131V19H311V15ZM309 10V17H313V10H309ZM319 0C313.477 0 309 4.47715 309 10H313C313 6.68629 315.686 4 319 4V0ZM369.268 0H319V4H369.268V0ZM379.23 9.12228C378.775 3.95961 374.451 0 369.268 0V4C372.378 4 374.972 6.37576 375.245 9.47337L379.23 9.12228ZM382.376 44.8245L379.23 9.12228L375.245 9.47337L378.391 45.1755L382.376 44.8245ZM425 43H380.383V47H425V43ZM435 43H425V47H435V43ZM442 50C442 46.134 438.866 43 435 43V47C436.657 47 438 48.3432 438 50H442ZM442 60V50H438V60H442ZM442 85V60H438V85H442ZM425 87H440V83H425V87ZM423 60V85H427V60H423ZM380.295 62H425V58H380.295V62ZM379.23 94.8777L382.287 60.1755L378.303 59.8245L375.245 94.5266L379.23 94.8777ZM369.268 104C374.451 104 378.775 100.04 379.23 94.8777L375.245 94.5266C374.972 97.6242 372.378 100 369.268 100V104ZM319 104H369.268V100H319V104ZM309 94C309 99.5229 313.477 104 319 104V100C315.686 100 313 97.3137 313 94H309ZM309 87V94H313V87H309ZM131 89H311V85H131V89ZM133 94V87H129V94H133Z" fill="#BCBCBC" mask="url(#path-1-outside-1)"/>
      </g>
      <rect id="First Band" x="86" y="2" width="20" height="100" fill={firstColor}/>
      <rect id="Second Band" x="147" y="17" width="20" height="70" fill={secondColor}/>
      <rect id="Multiplier Band" x="227" y="17" width="20" height="70" fill={multiplierColor}/>
      <rect id="Tolerance Band" x="336" y="2" width="20" height="100" fill={toleranceColor}/>
      <g id="First Square">
      <rect id="Rectangle 57" x="86" y="102" width="20" height="50" stroke={strokeColor.firstColor} fill={firstColor} fillOpacity="0.4"/>
      <rect id="Rectangle 64" x="81" y="152" width="30" height="30" stroke={strokeColor.firstColor} fill={firstColor}/>
      <text id="1" x="96" y="167" width="30" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.firstColor}>{firstValue}</text>
      </g>
      <g id="Second Square">
      <rect id="Rectangle 58" x="147" y="87" width="20" height="65" stroke={strokeColor.secondColor} fill={secondColor} fillOpacity="0.4"/>
      <rect id="Rectangle 65" x="142" y="152" width="30" height="30" stroke={strokeColor.secondColor} fill={secondColor}/>
      <text id="0" x="157" y="167" width="30" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.secondColor}>{secondValue}</text>
      </g>
      <g id="Third Square">
      <rect id="Rectangle 59" x="227" y="87" width="20" height="65" stroke={strokeColor.multiplierColor} fill={multiplierColor} fillOpacity="0.4"/>
      <rect id="Rectangle 66" x="197" y="152" width="80" height="30" stroke={strokeColor.multiplierColor} fill={multiplierColor}/>
      <text id="0" x="237" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.multiplierColor}>{multiplierValue}</text>
      </g>
      <g id="Fourth Square">
      <rect id="Rectangle 60" x="336" y="102" width="20" height="50" fill={toleranceColor} fillOpacity="0.4"/>
      <rect id="Rectangle 67" x="306" y="152" width="80" height="30" fill={toleranceColor}/>
      <text id="0" x="346" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill="#fff">{toleranceValue}</text>
      </g>
      </g>
    </svg>
  );
}
