import React from "react";
import '../App.css';

export default function Resistor({ firstColor, secondColor, thirdColor, multiplierColor, toleranceColor, ppmColor, firstValue, secondValue, thirdValue, multiplierValue, toleranceValue, ppmValue, selectedOption }) {
  firstColor = firstColor === null ? "#A1A1A1" : firstColor
  secondColor = secondColor === null ? "#A1A1A1" : secondColor
  thirdColor = thirdColor === null ? "#A1A1A1" : thirdColor
  multiplierColor = multiplierColor === null ? "#A1A1A1" : multiplierColor
  toleranceColor = toleranceColor === null ? "#A1A1A1" : toleranceColor
  ppmColor = ppmColor === null ? "#A1A1A1" : ppmColor


  firstValue = firstValue === null ? `-` : firstValue
  secondValue = secondValue === null ? `-` : secondValue
  thirdValue = thirdValue === null ? `-` : thirdValue
  multiplierValue = multiplierValue === null ? `-` : `x${multiplierValue}Ω`
  toleranceValue = toleranceValue === null ? `-` : `±${toleranceValue}%`
  ppmValue = ppmValue === null ? `-` : `${ppmValue}ppm`

  const textColor = {
    firstColor: firstColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
    secondColor: secondColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
    thirdColor: thirdColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
    multiplierColor: multiplierColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
    toleranceColor: toleranceColor === '#FFFFFF' ? '#000000' : '#FFFFFF'
  }

  const strokeColor = {
    firstColor: firstColor === "#FFFFFF" ? "#CCCCCC" : null,
    secondColor: secondColor === "#FFFFFF" ? "#CCCCCC" : null,
    thirdColor: thirdColor === "#FFFFFF" ? "#CCCCCC" : null,
    multiplierColor: multiplierColor === "#FFFFFF" ? "#CCCCCC" : null,
    toleranceColor: toleranceColor === '#FFFFFF' ? '#CCCCCC' : null
  };
  
  return (
    <svg width="544" height="182" viewBox="0 0 544 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.1521" y="0" width="543" height="104" fill="black">
      <rect fill="white" x="0.1521" width="543" height="104"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M131.152 94C131.152 98.4183 127.57 102 123.152 102L72.8838 102C68.7377 102 65.2786 98.8323 64.9147 94.7022L61.857 60H17.1521L17.1521 85L2.1521 85V60V50C2.1521 47.2386 4.39067 45 7.1521 45H17.1521H61.7689L64.9147 9.29783C65.2786 5.16769 68.7376 2.00001 72.8838 2.00001L123.152 2C127.57 2 131.152 5.58172 131.152 10L131.152 17H412.152L412.152 10C412.152 5.58172 415.734 2 420.152 2H470.42C474.567 2 478.026 5.16769 478.39 9.29783L481.535 45H526.152H536.152C538.914 45 541.152 47.2386 541.152 50V60V85H526.152V60H481.447L478.39 94.7022C478.026 98.8323 474.567 102 470.42 102H420.152C415.734 102 412.152 98.4183 412.152 94L412.152 87H131.152V94Z"/>
      </mask>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M131.152 94C131.152 98.4183 127.57 102 123.152 102L72.8838 102C68.7377 102 65.2786 98.8323 64.9147 94.7022L61.857 60H17.1521L17.1521 85L2.1521 85V60V50C2.1521 47.2386 4.39067 45 7.1521 45H17.1521H61.7689L64.9147 9.29783C65.2786 5.16769 68.7376 2.00001 72.8838 2.00001L123.152 2C127.57 2 131.152 5.58172 131.152 10L131.152 17H412.152L412.152 10C412.152 5.58172 415.734 2 420.152 2H470.42C474.567 2 478.026 5.16769 478.39 9.29783L481.535 45H526.152H536.152C538.914 45 541.152 47.2386 541.152 50V60V85H526.152V60H481.447L478.39 94.7022C478.026 98.8323 474.567 102 470.42 102H420.152C415.734 102 412.152 98.4183 412.152 94L412.152 87H131.152V94Z" fill="#E1E1E1"/>
      <path d="M123.152 102V100V102ZM72.8838 102V104V102ZM64.9147 94.7022L66.907 94.5266L64.9147 94.7022ZM61.857 60L63.8493 59.8245L63.6885 58H61.857V60ZM17.1521 60V58H15.1521V60H17.1521ZM17.1521 85L17.1521 87H19.1521V85H17.1521ZM2.1521 85H0.1521V87H2.1521L2.1521 85ZM61.7689 45V47H63.6004L63.7612 45.1755L61.7689 45ZM64.9147 9.29783L62.9224 9.12228V9.12229L64.9147 9.29783ZM72.8838 2.00001V4.00001V2.00001ZM123.152 2V0V2ZM131.152 10H129.152V10L131.152 10ZM131.152 17L129.152 17L129.152 19H131.152V17ZM412.152 17V19H414.152V17L412.152 17ZM412.152 10L414.152 10V10H412.152ZM478.39 9.29783L480.382 9.12228V9.12228L478.39 9.29783ZM481.535 45L479.543 45.1755L479.704 47H481.535V45ZM541.152 85V87H543.152V85H541.152ZM526.152 85H524.152V87H526.152V85ZM526.152 60H528.152V58H526.152V60ZM481.447 60V58H479.616L479.455 59.8245L481.447 60ZM478.39 94.7022L480.382 94.8777L478.39 94.7022ZM412.152 94H414.152V94L412.152 94ZM412.152 87L414.152 87V85H412.152V87ZM131.152 87V85H129.152V87H131.152ZM123.152 104C128.675 104 133.152 99.5229 133.152 94H129.152C129.152 97.3137 126.466 100 123.152 100V104ZM72.8838 104L123.152 104V100L72.8838 100V104ZM62.9224 94.8777C63.3773 100.04 67.7011 104 72.8838 104V100C69.7742 100 67.1799 97.6242 66.907 94.5266L62.9224 94.8777ZM59.8647 60.1755L62.9224 94.8777L66.907 94.5266L63.8493 59.8245L59.8647 60.1755ZM17.1521 62H61.857V58H17.1521V62ZM19.1521 85V60H15.1521L15.1521 85H19.1521ZM2.1521 87L17.1521 87L17.1521 83L2.1521 83L2.1521 87ZM0.1521 60V85H4.1521V60H0.1521ZM0.1521 50V60H4.1521V50H0.1521ZM7.1521 43C3.2861 43 0.1521 46.134 0.1521 50H4.1521C4.1521 48.3431 5.49525 47 7.1521 47V43ZM17.1521 43H7.1521V47H17.1521V43ZM61.7689 43H17.1521V47H61.7689V43ZM62.9224 9.12229L59.7766 44.8245L63.7612 45.1755L66.9069 9.47337L62.9224 9.12229ZM72.8838 5.126e-06C67.7011 5.60284e-06 63.3773 3.95961 62.9224 9.12228L66.9069 9.47337C67.1799 6.37577 69.7742 4.00001 72.8838 4.00001V5.126e-06ZM123.152 0L72.8838 5.126e-06V4.00001L123.152 4V0ZM133.152 10C133.152 4.47715 128.675 0 123.152 0V4C126.466 4 129.152 6.68629 129.152 10H133.152ZM133.152 17L133.152 10L129.152 10L129.152 17L133.152 17ZM412.152 15H131.152V19H412.152V15ZM410.152 9.99999L410.152 17L414.152 17L414.152 10L410.152 9.99999ZM420.152 0C414.629 0 410.152 4.47715 410.152 10H414.152C414.152 6.68629 416.838 4 420.152 4V0ZM470.42 0H420.152V4H470.42V0ZM480.382 9.12228C479.927 3.95961 475.603 0 470.42 0V4C473.53 4 476.124 6.37576 476.397 9.47337L480.382 9.12228ZM483.528 44.8245L480.382 9.12228L476.397 9.47337L479.543 45.1755L483.528 44.8245ZM526.152 43H481.535V47H526.152V43ZM536.152 43H526.152V47H536.152V43ZM543.152 50C543.152 46.134 540.018 43 536.152 43V47C537.809 47 539.152 48.3432 539.152 50H543.152ZM543.152 60V50H539.152V60H543.152ZM543.152 85V60H539.152V85H543.152ZM526.152 87H541.152V83H526.152V87ZM524.152 60V85H528.152V60H524.152ZM481.447 62H526.152V58H481.447V62ZM480.382 94.8777L483.44 60.1755L479.455 59.8245L476.397 94.5266L480.382 94.8777ZM470.42 104C475.603 104 479.927 100.04 480.382 94.8777L476.397 94.5266C476.124 97.6242 473.53 100 470.42 100V104ZM420.152 104H470.42V100H420.152V104ZM410.152 94C410.152 99.5229 414.629 104 420.152 104V100C416.838 100 414.152 97.3137 414.152 94H410.152ZM410.152 87L410.152 94L414.152 94L414.152 87L410.152 87ZM131.152 89H412.152V85H131.152V89ZM133.152 94V87H129.152V94H133.152Z" fill="#BCBCBC" mask="url(#path-1-outside-1)"/>
      
      <g id="group-1" className="Band-one">
      <rect x="86.1521" y="2" width="20" height="100" fill={firstColor}/>
      <rect x="86.1521" y="102" width="20" height="50" stroke={strokeColor.firstColor} fill={firstColor} fill-opacity="0.4"/>
      <rect x="81.1521" y="152" width="30" height="30" stroke={strokeColor.firstColor} fill={firstColor}/>
      <text x="96" y="167" width="30" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.firstColor}>{firstValue}</text>
      </g>
      
      <g id="group-2" className="Band-two">
      <rect x="145.965" y="17" width="20" height="70" fill={secondColor}/>
      <rect x="145.965" y="87" width="20" height="65" stroke={strokeColor.secondColor} fill={secondColor} fill-opacity="0.4"/>
      <rect x="140.965" y="152" width="30" height="30" stroke={strokeColor.secondColor} fill={secondColor}/>
      <text id="0" x="156" y="167" width="30" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.secondColor}>{secondValue}</text>
      </g>
      
      {selectedOption === "5" ? 
        (  
          <g id="group-3" className="Band-three">
            <rect x="181.423" y="17" width="20" height="70" fill={thirdColor}/>
            <rect x="181.423" y="87" width="20" height="65" stroke={strokeColor.thirdColor} fill={thirdColor} fill-opacity="0.4"/>
            <rect x="176.423" y="152" width="30" height="30" stroke={strokeColor.thirdColor} fill={thirdColor}/>
            <text id="0" x="191" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.thirdColor}>{thirdValue}</text>
          </g>
        ) : (
          null
        )
      }
      
      <g id="group-4" className="Band-four">
      <rect x="266.236" y="17" width="20" height="70" fill={multiplierColor}/>
      <rect x="266.236" y="87" width="20" height="65" fill={multiplierColor} fill-opacity="0.4"/>
      <rect x="236.236" y="152" width="80" height="30" fill={multiplierColor}/>
      <text id="0" x="277" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.multiplierColor}>{multiplierValue}</text>
      </g>

      { selectedOption === "4" || selectedOption === "5" ?
        (
          <g id="group-5" className="Band-five">
          <rect x="437.152" y="2" width="20" height="100" fill={toleranceColor}/>
          <rect x="437.152" y="102" width="20" height="50" fill={toleranceColor} fill-opacity="0.4"/>
          <rect x="407.152" y="152" width="80" height="30" fill={toleranceColor}/>
          <text id="0" x="448" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.toleranceColor}>{toleranceValue}</text>
        </g>
        ) : (
          <g id="group-5" className="Band-six">
            <rect x="437.152" y="2" width="20" height="100" fill={ppmColor}/>
            <rect x="437.152" y="102" width="20" height="50" fill={ppmColor} fill-opacity="0.4"/>
            <rect x="407.152" y="152" width="80" height="30" fill={ppmColor}/>
            <text id="0" x="448" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.ppmColor}>{ppmValue}</text>
          </g>
        )
      }

      { selectedOption === "6" ?
        (
          <svg>
            <g id="group-3" className="Band-three">
              <rect x="181.423" y="17" width="20" height="70" fill={thirdColor}/>
              <rect x="181.423" y="87" width="20" height="65" stroke={strokeColor.thirdColor} fill={thirdColor} fill-opacity="0.4"/>
              <rect x="176.423" y="152" width="30" height="30" stroke={strokeColor.thirdColor} fill={thirdColor}/>
              <text id="0" x="191" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.thirdColor}>{thirdValue}</text>
            </g>

            <g id="group-5" className="Band-five">
              <rect x="351.694" y="17" width="20" height="70" fill={toleranceColor}/>
              <rect x="351.694" y="87" width="20" height="65" fill={toleranceColor} fill-opacity="0.4"/>
              <rect x="321.694" y="152" width="80" height="30" fill={toleranceColor}/>
              <text id="0" x="362" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.toleranceColor}>{toleranceValue}</text>
            </g>

            <g id="group-6" className="Band-six">
              <rect x="437.152" y="2" width="20" height="100" fill={ppmColor}/>
              <rect x="437.152" y="102" width="20" height="50" fill={ppmColor} fill-opacity="0.4"/>
              <rect x="407.152" y="152" width="80" height="30" fill={ppmColor}/>
              <text id="0" x="448" y="167" width="60" height="30" dominantBaseline="central" textAnchor="middle" fill={textColor.multiplierColor}>{ppmValue}</text>
            </g>
          </svg>
        ) : (
          null
        )
      }
    </svg>
  );
}
