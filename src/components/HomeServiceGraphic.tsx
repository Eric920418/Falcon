export function HomeServiceGraphic({ kind }: { kind: 'build' | 'grow' }) {
  const blue = `service-blue-${kind}`, silver = `service-silver-${kind}`
  return <svg className="fh-service-graphic" viewBox="0 0 420 250" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={blue} x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#809dff"/><stop offset=".4" stopColor="#294eeb"/><stop offset="1" stopColor="#12309e"/></linearGradient>
      <linearGradient id={silver} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".4" stopColor="#c4cedf"/><stop offset=".7" stopColor="#f7f9fc"/><stop offset="1" stopColor="#8c9bb2"/></linearGradient>
    </defs>
    {kind === 'build' ? <>
      {[64,32,0].map((offset,index)=><g key={offset} className="fh-diagram-layer"><g transform={`translate(0 ${offset})`}>
        <path d="M75 96 215 36 Q224 32 234 36 L353 86 Q366 92 353 100 L224 157 Q214 161 204 157 L75 107 Q64 101 75 96Z" fill={index===2?`url(#${blue})`:`url(#${silver})`}/>
        <path d="M77 106 205 160 Q214 164 224 160 L353 103" fill="none" stroke={index===2?'#1737a9':'#9ba9c1'} strokeWidth="3"/>
        {index===2&&<path d="m122 95 95-40 90 38-95 42Z M169 75l90 38 M167 115l94-40" fill="none" stroke="#c4d6ff" strokeWidth="1" opacity=".65"/>}
      </g></g>)}
      <path className="fh-service-route" pathLength="1" d="M55 194C116 228 233 246 327 192S381 102 365 67" fill="none" stroke="#3456eb" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="365" cy="67" r="5" fill="#3456eb"/>
    </> : <>
      <g className="fh-diagram-orbit">
        <ellipse cx="210" cy="133" rx="161" ry="61" transform="rotate(-24 210 133)" fill="none" stroke={`url(#${silver})`} strokeWidth="14"/>
        <ellipse cx="210" cy="133" rx="112" ry="43" transform="rotate(-24 210 133)" fill="none" stroke={`url(#${blue})`} strokeWidth="18"/>
      </g>
      <path className="fh-service-route" pathLength="1" d="M47 216C95 212 127 182 178 150S276 101 349 39" fill="none" stroke="#3456eb" strokeWidth="3" strokeLinecap="round"/>
      <circle className="fh-diagram-layer" cx="273" cy="94" r="27" fill={`url(#${blue})`}/>
      <circle cx="349" cy="39" r="6" fill="#3456eb"/>
      <circle cx="47" cy="216" r="4" fill="#a5b4d4"/>
    </>}
  </svg>
}
