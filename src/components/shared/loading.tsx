const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(75,75)">
          <circle r="50" fill="#FFCC00" stroke="none" />
          <path d="M0,0 L50,-10 A50,50 0 0,1 0,50 Z" fill="#D2691E">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="-20" cy="-30" r="5" fill="red">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="-25" r="5" fill="red">
            <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="10" r="5" fill="red">
            <animate attributeName="opacity" values="1;0;1" dur="1.3s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}
export default Loading
