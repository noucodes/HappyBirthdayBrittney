window.onload = function() {
    animationTimeline();
};

// animation timeline
const animationTimeline = () => {
    // Split characters to animate individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox");
    const hbd = document.getElementsByClassName("wish-hbd")[0];
  
    Array.from(textBoxChars).forEach((textBox) => {
        textBox.innerHTML = textBox.textContent
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
      });
  
    hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };
  
    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };
  
    // Create timeline
    const tl = gsap.timeline();
  
    tl.to(".container", { duration: 0.6, visibility: "visible" })
      .from(".one", { duration: 0.7, opacity: 0, y: 10 })
      .from(".two", { duration: 0.0, opacity: 0, y: 10 })
      .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=3.5")
      .to(".two", { duration: 0.0, opacity: 0, y: 10 }, "-=1")
      .from(".three", { duration: 0.7, opacity: 0, y: 10 })
      .to(".three", { duration: 0.7, opacity: 0, y: 10 }, "+=3")
      .from(".four", { duration: 0.7, scale: 0.2, opacity: 0 })
      .from(".fake-btn", { duration: 0.3, scale: 0.2, opacity: 0 })
      .to(".hbd-chatbox span", {
        duration: 1.5,
        visibility: "visible",
        stagger: 0.05,
      })
      .to(".hbd-chatbox1 span", {
        duration: 1.5,
        visibility: "visible",
        stagger: 0.05,
      })
      .to(".fake-btn", { duration: 0.1, backgroundColor: "rgb(127, 206, 248)" }, "+=4")
      .to(".four", { duration: 0.5, scale: 0.2, opacity: 0, y: -150 }, "+=1")
      .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-3", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-3 strong", {
        duration: 0.5,
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=2.5")
      .from(".idea-5", {
        duration: 0.7,
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      }, "+=1.5")
      .to(".idea-5 span", {
        duration: 0.7,
        rotation: 90,
        x: 8,
      }, "+=1.4")
      .to(".idea-5", { duration: 0.7, scale: 0.2, opacity: 0 }, "+=2")
      .from(".idea-6 span", {
        duration: 0.8,
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: "expo.out",
        stagger: 0.2,
      })
      .to(".idea-6 span", {
        duration: 0.8,
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: "expo.out",
        stagger: 0.2,
      }, "+=1.5")
      .fromTo(".baloons img", {
        opacity: 0.9,
        y: 1400,
      }, {
        duration: 2.5,
        opacity: 1,
        y: -1000,
        stagger: 0.2,
      })
      .from(".profile-picture", {
        duration: 0.5,
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      }, "-=2")
      .from(".hat", {
        duration: 0.5,
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
      })
      .from(".wish-hbd span", {
        duration: 0.7,
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: "elastic.out(1, 0.5)",
        stagger: 0.1,
      })
      .fromTo(".wish-hbd span", {
        scale: 1.4,
        rotationY: 150,
      }, {
        duration: 0.7,
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: "expo.out",
        stagger: 0.1,
      }, "party")
      .from(".wish h5", {
        duration: 0.5,
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      }, "party")
      .to(".eight svg", {
        duration: 1.5,
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
        stagger: 0.3,
      })
      .to(".six", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        zIndex: -1,
      })
      .from(".nine p", { duration: 1, ...ideaTextTrans, stagger: 1.2 })
      .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=1");
  
    // Restart Animation on Click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  };
  
