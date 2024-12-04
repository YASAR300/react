// import React, { useState, useRef } from "react";


// const buttonStates = [
//   {
//     states: [
//       { className: 'is-green', text: 'Design Innovation', smallText: 'Fresh perspectives.' },
//       { className: 'is-golden', text: 'Strategic Planning', smallText: 'Tailored strategies.' },
//       { className: 'is-blue', text: 'User Experience', smallText: 'Engaging solutions.' },
//     ],
//     currentState: 0,
//   },
//   {
//     states: [
//       { className: 'is-red', text: 'Marketing Campaigns', smallText: 'Creative storytelling.' },
//       { className: 'is-purple', text: 'SEO & Optimization', smallText: 'Higher visibility.' },
//       { className: 'is-yellow', text: 'Content Creation', smallText: 'Compelling narratives.' },
//     ],
//     currentState: 0,
//   },
//   {
//     states: [
//       { className: 'is-pink', text: 'Tech Development', smallText: 'Innovative solutions.' },
//       { className: 'is-cyan', text: 'Branding', smallText: 'Identity refinement.' },
//       { className: 'is-orange', text: 'Data Analytics', smallText: 'Insights that matter.' },
//     ],
//     currentState: 0,
//   },
// ];

// const HoverVideoEffect = () => {
//   const [currentStates, setCurrentStates] = useState(buttonStates);
//   const videoRefs = useRef([]);

  
//   const handleHover = (index, isHovered) => {
//     const video = videoRefs.current[index];
//     if (video) {
//       if (isHovered) {
//         video.style.opacity = 1;
//         video.play();
//       } else {
//         video.style.opacity = 0;
//         video.pause();
//         video.currentTime = 0;
//       }
//     }
//   };

//   const handleButtonClick = (index) => {
//     const newStates = [...currentStates];
//     const { states, currentState } = newStates[index];

    
//     const gradText = document.querySelectorAll('.btn-grad-text .text-size')[index];
//     const smallText = document.querySelectorAll('.btn-grad-text .small-text p')[index];

//     gradText.innerHTML = `<strong>Offer:</strong> ${states[currentState].text}`;
//     smallText.textContent = states[currentState].smallText;

    
//     const btn = document.querySelectorAll('.btn-for-one')[index];
//     let currentRotation = parseFloat(getComputedStyle(btn).transform.split(',')[1]) || 0;
//     let newRotation = currentRotation + 360;

    
//     btn.style.transition = 'transform 1s ease';
//     btn.style.transform = `translateX(1100%) rotate(${newRotation}deg)`;

    
//     const gradBg = document.querySelectorAll('.btn-grad-bg')[index];
//     gradBg.classList.remove(...states.map(state => state.className));
//     gradBg.classList.add(states[currentState].className);

//     setTimeout(() => {
//       gradBg.style.transition = 'opacity 0.5s ease';
//       gradBg.style.opacity = 1;
      
//       gradText.style.transition = 'opacity 0.5s ease';
//       gradText.style.opacity = 1;

//       smallText.style.transition = 'opacity 0.5s ease';
//       smallText.style.opacity = 1;
//     }, 1000);

    
//     newStates[index].currentState = (currentState + 1) % states.length;
//     setCurrentStates(newStates);
//   };

//   return (
//     <div>
//       {/* Hover Effect Section */}
//       <div className="three-1" onMouseEnter={() => handleHover(0, true)} onMouseLeave={() => handleHover(0, false)}>
//         <video className="video" ref={(el) => (videoRefs.current[0] = el)} />
//       </div>
//       <div className="three-2" onMouseEnter={() => handleHover(1, true)} onMouseLeave={() => handleHover(1, false)}>
//         <video className="video" ref={(el) => (videoRefs.current[1] = el)} />
//       </div>
//       <div className="three" onMouseEnter={() => handleHover(2, true)} onMouseLeave={() => handleHover(2, false)}>
//         <video className="video" ref={(el) => (videoRefs.current[2] = el)} />
//       </div>

//       {/* Buttons */}
//       {buttonStates.map((btnState, index) => (
//         <div key={index} className="button-container">
//           <button className="btn-for-one" onClick={() => handleButtonClick(index)}>
//             Button {index + 1}
//           </button>
//           <div className="btn-grad-bg"></div>
//           <div className="btn-grad-text">
//             <div className="text-size"></div>
//             <div className="small-text">
//               <p></p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HoverVideoEffect;
