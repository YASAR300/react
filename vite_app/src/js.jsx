import React, { useState } from "react";


const buttonStates = [
  {
    states: [
      { className: "is-green", text: "Design Innovation", smallText: "Fresh perspectives." },
      { className: "is-golden", text: "Strategic Planning", smallText: "Tailored strategies." },
      { className: "is-blue", text: "User Experience", smallText: "Engaging solutions." },
    ],
    currentState: 0,
  },
  {
    states: [
      { className: "is-red", text: "Marketing Campaigns", smallText: "Creative storytelling." },
      { className: "is-purple", text: "SEO & Optimization", smallText: "Higher visibility." },
      { className: "is-yellow", text: "Content Creation", smallText: "Compelling narratives." },
    ],
    currentState: 0,
  },
  {
    states: [
      { className: "is-pink", text: "Tech Development", smallText: "Innovative solutions." },
      { className: "is-cyan", text: "Branding", smallText: "Identity refinement." },
      { className: "is-orange", text: "Data Analytics", smallText: "Insights that matter." },
    ],
    currentState: 0,
  },
];

const App = () => {
  const [state, setState] = useState(buttonStates);

  const handleClick = (index) => {
    const newState = [...state];
    const { states, currentState } = newState[index];

    // Update the state
    newState[index].currentState = (currentState + 1) % states.length;
    setState(newState);
  };

  return (
    <div className="th-main">
      {state.map((button, index) => {
        const { states, currentState } = button;
        const current = states[currentState];

        return (
          <div className="th" key={index}>
            <div className="one">
              <a href="#" onClick={(e) => { e.preventDefault(); handleClick(index); }}>
                <div
                  className="btn-for-one"
                  style={{
                    width: "6.11rem",
                    left: "0%",
                    transition: "transform 1s ease",
                    transform: `translateX(1100%) rotate(${360 * currentState}deg)`,
                  }}
                >
                  <div className="btn-grad-one">
                    <svg width="50%" height="100%" viewBox="0 0 40 41" fill="none">
                      <g clipPath="url(#clip0_1434_629)">
                        <path
                          d="M20.0124 40.5264C8.97793 40.5264 -0.00012207 31.5734 -0.00012207 20.5389C-0.00012207 9.50442 8.97793 0.526367 20.0124 0.526367C31.0469 0.526367 40.025 9.50442 40.025 20.5389C40.025 31.5734 31.0469 40.5514 20.0124 40.5514V40.5264ZM20.0124 3.0342C10.3572 3.0342 2.50771 10.8837 2.50771 20.5389C2.50771 30.1941 10.3572 38.0436 20.0124 38.0436C29.6676 38.0436 37.5171 30.1941 37.5171 20.5389C37.5171 10.8837 29.6425 3.0342 20.0124 3.0342Z"
                          fill="#8DDD8D"
                        ></path>
                        <path
                          d="M22.445 18.6079C22.3196 17.7803 22.0688 17.1784 21.6926 16.8273C21.3165 16.4511 20.7647 16.2756 20.0375 16.2756C18.9842 16.2756 18.2068 16.5765 17.7303 17.2035C17.2538 17.8304 17.0281 18.9088 17.0281 20.4135C17.0281 21.9182 17.2538 22.9966 17.7303 23.6737C18.2068 24.3508 18.9591 24.6768 20.0375 24.6768C20.7397 24.6768 21.2914 24.5013 21.6676 24.1251C22.0437 23.7489 22.3196 23.147 22.445 22.3445H27.8619C27.6613 24.6768 26.934 26.3571 25.7052 27.4354C24.4513 28.4887 22.5704 29.0405 20.0375 29.0405C18.5829 29.0405 17.3039 28.8649 16.2506 28.5389C15.1974 28.2129 14.3196 27.6862 13.6174 27.0091C12.9152 26.332 12.4137 25.4292 12.0876 24.3257C11.7616 23.2223 11.6111 21.9433 11.6111 20.4386C11.6111 18.9339 11.7616 17.6047 12.0876 16.5514C12.4137 15.4731 12.9152 14.5953 13.6174 13.9182C14.3196 13.2411 15.1974 12.7395 16.2506 12.4386C17.3039 12.1376 18.5829 11.9621 20.0375 11.9621C22.5704 11.9621 24.4513 12.4887 25.7052 13.5671C26.9591 14.6204 27.6613 16.3257 27.8619 18.658H22.445V18.6079Z"
                          fill="#8DDD8D"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1434_629">
                          <rect
                            width="40"
                            height="40"
                            fill="white"
                            transform="translate(-0.00012207 0.526367)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="btn-grad-text">
                <div className="text-size is-merge">
                  <strong>Offer: </strong>
                  {current.text}
                </div>
                <div className="small-text">
                  <p className="p-small">{current.smallText}</p>
                </div>
                <div className={`btn-grad-bg ${current.className}`}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
