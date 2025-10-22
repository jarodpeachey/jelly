(function () {
    // SLIDER ELEMENTS
    const slides = document.querySelectorAll(".carousel__slide");
    const sliderMask = document.querySelector(".carousel__mask");
    const prev = document.querySelector(".carousel__control--prev");
    const next = document.querySelector(".carousel__control--next");
    const indicator = document.querySelector(".carousel__indicator");
    const link = document.querySelector(".carousel__link");

    // EVENT LISTENERS
    typeof next !== null && next.addEventListener("click", nextStep);
    typeof prev !== null && prev.addEventListener("click", previousStep);

    // ARRAY OF SLIDES IN ORDER (INDEX)
    let totalSlides = [];

    // ADD LEFT POSITION TO ALL SLIDES
    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        totalSlides.push(i);
        slides[i].style.left = "0px";
        slides[i].style.transform = "translateX(0px)";
    }

    // SLIDES TO SHOW FOR DIFFERENT SCREEN SIZES
    let originalMiddleSlide = 2;
    let originalEdgeSlideLeft = 1;
    let originalEdgeSlideRight = 3;
    let originalOuterSlideLeft = 0;
    let originalOuterSlideRight = 4;
    let originalFarSlideLeft = totalSlides.length - 1;
    let originalFarSlideRight = 5;

    let forwardsMiddleSlide = 3;
    let forwardsEdgeSlideLeft = 2;
    let forwardsEdgeSlideRight = 4;
    let forwardsOuterSlideLeft = 1;
    let forwardsOuterSlideRight = 5;
    let forwardsFarSlideLeft = 0;
    let forwardsFarSlideRight = 6;
    let forwardsInvisibleSlideLeft = totalSlides.length - 1;
    let forwardsInvisibleSlideRight = 7;

    let backwardsMiddleSlide = 1;
    let backwardsEdgeSlideLeft = 0;
    let backwardsEdgeSlideRight = 2;
    let backwardsOuterSlideLeft = totalSlides.length - 1;
    let backwardsOuterSlideRight = 3;
    let backwardsFarSlideLeft = totalSlides.length - 2;
    let backwardsFarSlideRight = 4;
    let backwardsInvisibleSlideLeft = totalSlides.length - 3;
    let backwardsInvisibleSlideRight = 5;

    let middleScale = "scale(1.8)";
    let edgeScale = "scale(1.4)";
    let outerScale = "scale(1)";

    if (window.innerWidth > 9) {
        originalMiddleSlide = 3;
        originalEdgeSlideLeft = 2;
        originalEdgeSlideRight = 4;
        originalOuterSlideLeft = 1;
        originalOuterSlideRight = 5;
        originalFarSlideLeft = 0;
        originalFarSlideRight = 6;

        forwardsMiddleSlide = 4;
        forwardsEdgeSlideLeft = 3;
        forwardsEdgeSlideRight = 5;
        forwardsOuterSlideLeft = 2;
        forwardsOuterSlideRight = 6;
        forwardsFarSlideLeft = 1;
        forwardsFarSlideRight = 7;
        forwardsInvisibleSlideLeft = 0;
        forwardsInvisibleSlideRight = 8;

        backwardsMiddleSlide = 2;
        backwardsEdgeSlideLeft = 1;
        backwardsEdgeSlideRight = 3;
        backwardsOuterSlideLeft = 0;
        backwardsOuterSlideRight = 4;
        backwardsFarSlideLeft = totalSlides.length - 1;
        backwardsFarSlideRight = 5;
        backwardsInvisibleSlideLeft = totalSlides.length - 2;
        backwardsInvisibleSlideRight = 6;
    }

    if (window.innerWidth > 1200) {
        middleScale = "scale(2.2)";
        edgeScale = "scale(1.8)";
        outerScale = "scale(1.5)";
    }

    // ADD SKEW TO SLIDES
    slides.forEach((slide, index) => {
        if (index === totalSlides[originalMiddleSlide]) {
            slide.style.transform = slide.style.transform.replace(`${edgeScale}`, "") + middleScale;
            slide.style.opacity = "1";

            slide.classList.add("middle");
            slide.classList.remove("edge");
            slide.classList.remove("outer");

            slide.firstElementChild.style.transform = "none";
            // slide.querySelector('a:first-of-type').style.transform = "none";
            setTimeout(() => {
                indicator.innerHTML = slide.id;
                link.href = slide.getAttribute("link");
            }, 200);
            console.log(slide.id);
        } else if (index === totalSlides[originalEdgeSlideLeft] || index === totalSlides[originalEdgeSlideRight]) {
            slide.style.opacity = "1";
            slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${outerScale}`, "") + edgeScale;

            slide.classList.add("edge");
            slide.classList.remove("middle");
            slide.classList.remove("outer");

            if (index === totalSlides[originalEdgeSlideLeft]) {
                slide.firstElementChild.style.transform = "rotateY(-18deg) translateX(-70px)";
                // slide.querySelector('a:first-of-type').style.transform = "rotateY(-18deg) translateX(-70px)";
            } else {
                slide.firstElementChild.style.transform = "rotateY(18deg) translateX(70px)";
                // slide.querySelector('a:first-of-type').style.transform = "rotateY(18deg) translateX(70px)";
            }
        } else if (index === totalSlides[originalOuterSlideLeft] || index === totalSlides[originalOuterSlideRight]) {
            slide.style.opacity = "1";
            slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "") + outerScale;

            slide.classList.add("outer");
            slide.classList.remove("middle");
            slide.classList.remove("edge");

            if (index === totalSlides[originalOuterSlideLeft]) {
                slide.firstElementChild.style.transform = "rotateY(-42deg) translateX(-60px)";
                // slide.querySelector('a:first-of-type').style.transform = "rotateY(-42deg) translateX(-60px)";
            } else {
                slide.firstElementChild.style.transform = "rotateY(42deg) translateX(60px)";
                // slide.querySelector('a:first-of-type').style.transform = "rotateY(42deg) translateX(60px)";
            }
        } else if (index === totalSlides[originalFarSlideLeft] || index === totalSlides[originalFarSlideRight]) {
            slide.style.opacity = "1";
            slide.classList.remove("outer");

            slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

            if (index === totalSlides[originalFarSlideLeft]) {
                slide.firstElementChild.style.transform = "rotateY(-60deg) translateX(100px)";
                // slide.querySelector('a:first-of-type').style.transform = "rotateY(-60deg) translateX(100px)";
            } else {
                slide.firstElementChild.style.transform = "rotateY(60deg) translateX(-100px)";
                // slide.querySelector('a:first-of-type').style.transform = "rotateY(60deg) translateX(-100px)";
            }
        } else {
            slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

            slide.classList.remove("middle");
            slide.classList.remove("edge");
            slide.classList.remove("outer");

            slide.firstElementChild.style.transform = "none";
            // slide.querySelector('a:first-of-type').style.transform = "none";
        }
    });

    function updateSlidesToShow(direction) {
        // GET TRANSLATE OF A MIDDLE SLIDE
        const slideTranslate = parseFloat(slides[7].style.transform.replace("translateX(", "").replace("px)", "")) || 0;

        // CHECK IF THE SLIDE IS ONE POSITION TO THE RIGHT OF ORIGINAL INDEX
        const isAfterOriginalIndex =
            slideTranslate !== 0 && parseFloat(slides[7].style.left, 10) !== 0
                ? slideTranslate - Math.abs(parseFloat(slides[7].style.left, 10)) === 200 ||
                  Math.abs(parseFloat(slides[7].style.left, 10)) - Math.abs(slideTranslate) === 200
                : slideTranslate - parseFloat(slides[7].style.left, 10) === -200;

        // CHECK IF SLIDE IS ONE POSITION TO THE LEFT OF ORIGINAL INDEX
        const isBeforeOriginalIndex =
            Math.abs(slideTranslate) - parseFloat(slides[7].style.left, 10) === 200 && Math.abs(parseFloat(slides[4].style.left, 10)) !== 0;

        // RESET ALL TO 0 IF SLIDES ARE 1 INDEX AWAY FROM ORIGINAL INDEX
        if (direction === "forwards" && isAfterOriginalIndex) {
            slides.forEach((slide, index) => {
                if (index === totalSlides[1]) {
                    slide.classList.add("middle");
                } else {
                    slide.classList.remove("middle");
                }
                if (index === totalSlides[0]) {
                    setTimeout(() => {
                        slide.style.transition = "0s";
                        slide.style.left = "0px";
                        slide.style.transform = "translateX(0px)";
                    }, 400);
                } else {
                    slide.style.transition = ".6s ease";
                    slide.style.left = "0px";
                    slide.style.transform = "translateX(0px)";
                }
            });

            // SHIFT INDEXES ARRAY FIRST ITEM TO END
            totalSlides.push(totalSlides.shift());
        } else if (direction === "backwards" && isBeforeOriginalIndex) {
            slides.forEach((slide, index) => {
                if (index === totalSlides[1]) {
                    slide.classList.add("middle");
                } else {
                    slide.classList.remove("middle");
                }
                if (index === totalSlides[totalSlides.length - 1]) {
                    slide.classList.add("testingThisClassNameForThisSlide");
                    setTimeout(() => {
                        slide.style.transition = "0s";
                        slide.style.left = "0px";
                        slide.style.transform = "translateX(0px)";
                    }, 400);
                } else {
                    slide.classList.remove("testingThisClassNameForThisSlide");
                    slide.style.transition = ".6s ease";
                    slide.style.left = "0px";
                    slide.style.transform = "translateX(0px)";
                }
            });

            // SHIFT INDEXES ARRAY LAST ITEM TO START
            totalSlides.unshift(totalSlides.pop());
        } else {
            if (direction === "forwards") {
                slides.forEach((slide, index) => {
                    // ADD TRANSITION
                    // slide.style.opacity = "1";
                    slide.style.transition = ".6s ease";
                    slide.firstElementChild.transition = ".6s ease";

                    // GET CURRENT TRANSLATION
                    const currentTranslate = parseFloat(slide.style.transform.replace("translateX(", "").replace("px)", "")) || 0;

                    // MOVE ALL SLIDES LEFT
                    slide.style.left = `${parseFloat(slide.style.left, 10) - slide.clientWidth}px`;

                    if (index === totalSlides[forwardsMiddleSlide]) {
                        slide.style.transform = slide.style.transform.replace(`${edgeScale}`, "") + middleScale;

                        slide.classList.add("middle");
                        slide.classList.remove("edge");
                        slide.classList.remove("outer");

                        slide.firstElementChild.style.transform = "none";
                        // slide.querySelector('a:first-of-type').style.transform = "none";
                        setTimeout(() => {
                            indicator.innerHTML = slide.id;
                            link.href = slide.getAttribute("link");
                        }, 200);
                        console.log(slide.id);
                    } else if (index === totalSlides[forwardsEdgeSlideLeft] || index === totalSlides[forwardsEdgeSlideRight]) {
                        slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${outerScale}`, "") + edgeScale;

                        slide.classList.add("edge");
                        slide.classList.remove("middle");
                        slide.classList.remove("outer");

                        if (index === totalSlides[forwardsEdgeSlideLeft]) {
                            slide.firstElementChild.style.transform = "rotateY(-18deg) translateX(-70px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-18deg) translateX(-70px)";
                        } else {
                            slide.firstElementChild.style.transform = "rotateY(18deg) translateX(70px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(18deg) translateX(70px)";
                        }
                    } else if (index === totalSlides[forwardsOuterSlideLeft] || index === totalSlides[forwardsOuterSlideRight]) {
                        slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "") + outerScale;

                        slide.classList.add("outer");
                        slide.classList.remove("middle");
                        slide.classList.remove("edge");
                        slide.firstElementChild.style.left = "0px";
                        // slide.querySelector('a:first-of-type').style.left = "0px";

                        if (index === totalSlides[forwardsOuterSlideLeft]) {
                            slide.firstElementChild.style.transform = "rotateY(-42deg) translateX(-60px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-42deg) translateX(-60px)";
                        } else {
                            slide.firstElementChild.style.transform = "rotateY(42deg) translateX(60px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(42deg) translateX(60px)";
                        }
                    } else if (index === totalSlides[forwardsFarSlideLeft] || index === totalSlides[forwardsFarSlideRight]) {
                        slide.style.transition = "0s";
                        slide.style.opacity = "1";
                        slide.style.transition = ".6s ease";
                        slide.classList.remove("outer");
                        slide.firstElementChild.style.left = "0px";
                        // slide.querySelector('a:first-of-type').style.left = "0px";

                        slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

                        if (index === totalSlides[forwardsFarSlideLeft]) {
                            slide.firstElementChild.style.transform = "rotateY(-60deg) translateX(0px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-60deg) translateX(0px)";
                            slide.firstElementChild.style.left = "50px";
                            // slide.querySelector('a:first-of-type').style.left = "50px";
                        } else {
                            slide.style.transition = "0s";
                            slide.firstElementChild.style.transition = "none";
                            // slide.querySelector('a:first-of-type').style.transition = "none";
                            slide.firstElementChild.style.transform = "rotateY(60deg) translateX(0px) scale(.8)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(60deg) translateX(0px) scale(.8)";
                            slide.firstElementChild.style.left = "-120px";
                            // slide.querySelector('a:first-of-type').style.left = "-120px";
                            slide.style.zIndex = "-1";

                            setTimeout(() => {
                                slide.style.transition = ".6s ease";
                                slide.firstElementChild.style.transition = ".6s ease";
                                // slide.querySelector('a:first-of-type').style.transition = ".6s ease";
                                slide.firstElementChild.style.transform = "rotateY(60deg) translateX(0px)";
                                // slide.querySelector('a:first-of-type').style.transform = "rotateY(60deg) translateX(0px)";
                                slide.firstElementChild.style.left = "-50px";
                                // slide.querySelector('a:first-of-type').style.left = "-50px";
                                slide.style.zIndex = null;
                            }, 10);
                        }
                    } else {
                        // MOVE FIRST SLIDE TO END
                        if (index === totalSlides[forwardsInvisibleSlideLeft]) {
                            slide.firstElementChild.style.left = "400px";
                            // slide.querySelector('a:first-of-type').style.left = "400px";
                            slide.style.zIndex = "-1";

                            setTimeout(() => {
                                // SET TRANSITION TO NONE
                                slide.style.transition = "0s";
                                slide.firstElementChild.style.transform = "";
                                // slide.querySelector('a:first-of-type').style.transform = "";
                                slide.style.opacity = "0";
                                slide.style.zIndex = "-1";

                                // SET NEW TRANSFORM
                                if (currentTranslate !== 0) {
                                    slide.style.transform = `translateX(
                  ${slide.clientWidth * slides.length + currentTranslate}px
                )`;
                                } else {
                                    slide.style.transform = `translateX(
                  ${slide.clientWidth * slides.length}px
                )`;
                                }

                                slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

                                slide.classList.remove("middle");
                                slide.classList.remove("edge");
                                slide.classList.remove("outer");

                                slide.firstElementChild.style.transform = "none";
                                // slide.querySelector('a:first-of-type').style.transform = "none";
                            }, 400);
                        } else {
                            slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

                            slide.classList.remove("middle");
                            slide.classList.remove("edge");
                            slide.classList.remove("outer");

                            slide.firstElementChild.style.transform = "none";
                            // slide.querySelector('a:first-of-type').style.transform = "none";
                            slide.firstElementChild.style.left = "0";
                            // slide.querySelector('a:first-of-type').style.left = "0";
                        }
                    }
                });

                // SHIFT INDEXES ARRAY FIRST ITEM TO END
                totalSlides.push(totalSlides.shift());
            } else if (direction === "backwards") {
                // TRANSFORM EACH SLIDE LEFT
                slides.forEach((slide, index) => {
                    // ADD TRANSITION
                    // slide.style.opacity = "1";
                    slide.style.transition = ".6s ease";
                    slide.firstElementChild.transition = ".6s ease";

                    // GET CURRENT TRANSLATION
                    const currentTranslate = parseFloat(slide.style.transform.replace("translateX(", "").replace("px)", "")) || 0;

                    // MOVE ALL SLIDES LEFT
                    slide.style.left =
                        Math.abs(parseFloat(slide.style.left, 10)) === 0
                            ? `${slide.clientWidth}px`
                            : `${parseFloat(slide.style.left, 10) + slide.clientWidth}px`;

                    if (index === totalSlides[backwardsMiddleSlide]) {
                        slide.style.transform = slide.style.transform.replace(`${edgeScale}`, "") + middleScale;

                        slide.classList.add("middle");
                        slide.classList.remove("edge");
                        slide.classList.remove("outer");

                        slide.firstElementChild.style.transform = "none";
                        // slide.querySelector('a:first-of-type').style.transform = "none";
                        setTimeout(() => {
                            indicator.innerHTML = slide.id;
                            link.href = slide.getAttribute("link");
                        }, 200);
                        console.log(slide.id);
                    } else if (index === totalSlides[backwardsEdgeSlideLeft] || index === totalSlides[backwardsEdgeSlideRight]) {
                        slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${outerScale}`, "") + edgeScale;

                        slide.classList.add("edge");
                        slide.classList.remove("middle");
                        slide.classList.remove("outer");

                        if (index === totalSlides[backwardsEdgeSlideLeft]) {
                            slide.firstElementChild.style.transform = "rotateY(-18deg) translateX(-70px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-18deg) translateX(-70px)";
                        } else {
                            slide.firstElementChild.style.transform = "rotateY(18deg) translateX(70px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(18deg) translateX(70px)";
                        }
                    } else if (index === totalSlides[backwardsOuterSlideRight] || index === totalSlides[backwardsOuterSlideLeft]) {
                        slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "") + outerScale;
                        slide.firstElementChild.style.left = "0px";
                        // slide.querySelector('a:first-of-type').style.left = "0px";

                        slide.classList.add("outer");
                        slide.classList.remove("middle");
                        slide.classList.remove("edge");

                        if (index === totalSlides[backwardsOuterSlideLeft]) {
                            slide.firstElementChild.style.transform = "rotateY(-42deg) translateX(-60px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-42deg) translateX(-60px)";
                        } else {
                            slide.firstElementChild.style.transform = "rotateY(42deg) translateX(60px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(42deg) translateX(60px)";
                        }
                    } else if (index === totalSlides[backwardsFarSlideLeft] || index === totalSlides[backwardsFarSlideRight]) {
                        slide.style.transition = "0s";
                        slide.style.opacity = "1";
                        slide.style.transition = ".6s ease";
                        slide.classList.remove("outer");
                        slide.firstElementChild.style.left = "0px";
                        // slide.querySelector('a:first-of-type').style.left = "0px";

                        slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

                        if (index === totalSlides[backwardsFarSlideLeft]) {
                            slide.firstElementChild.style.transform = "rotateY(-60deg) translateX(100px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-60deg) translateX(100px)";
                        } else {
                            slide.firstElementChild.style.transform = "rotateY(60deg) translateX(-100px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(60deg) translateX(-100px)";
                        }
                    } else {
                        // MOVE FIRST SLIDE TO END
                        if (index === totalSlides[backwardsInvisibleSlideRight]) {
                            // slide.style.transition = "0s";
                            slide.firstElementChild.style.left = "-400px";
                            slide.style.zIndex = "-1";

                            setTimeout(() => {
                                slide.firstElementChild.style.left = "0px";
                                // slide.querySelector('a:first-of-type').style.left = "0px";
                                slide.firstElementChild.style.transition = "none";
                                // slide.querySelector('a:first-of-type').style.transition = "none";
                                slide.style.transition = "0s";
                                slide.style.opacity = "0";

                                setTimeout(() => {
                                    slide.firstElementChild.style.transition = ".6s ease";
                                    // slide.querySelector('a:first-of-type').style.transition = ".6s ease";
                                    slide.style.zIndex = null;
                                }, 10);
                            }, 400);
                        } else {
                            slide.style.transform = slide.style.transform.replace(`${middleScale}`, "").replace(`${edgeScale}`, "").replace(`${outerScale}`, "");

                            slide.classList.remove("middle");
                            slide.classList.remove("edge");
                            slide.classList.remove("outer");

                            slide.firstElementChild.style.transform = "none";
                            // slide.querySelector('a:first-of-type').style.transform = "none";
                            slide.firstElementChild.style.left = "0";
                            // slide.querySelector('a:first-of-type').style.left = "0";
                        }
                    }

                    // MOVE LAST SLIDE TO START
                    if (index === totalSlides[totalSlides.length - 1]) {
                        // SET TRANSITION TO NONE
                        slide.style.transition = "0s";
                        slide.firstElementChild.transition = "0s";
                        slide.style.opacity = "1";

                        // SET NEW TRANSFORM
                        if (currentTranslate === 0) {
                            slide.style.transform = `translateX(
                  -${slide.clientWidth * slides.length}px
                )`;
                        } else {
                            slide.style.transform = `translateX(
                  ${currentTranslate - slide.clientWidth * slides.length}px
                )`;
                        }

                        slide.style.transition = "0s";
                        slide.firstElementChild.style.transition = "none";
                        // slide.querySelector('a:first-of-type').style.transition = "none";
                        slide.firstElementChild.style.transform = "rotateY(-60deg) translateX(0px) scale(.8)";
                        slide.firstElementChild.style.left = "120px";
                        slide.style.zIndex = "-1";

                        setTimeout(() => {
                            slide.style.transition = ".6s ease";
                            slide.firstElementChild.style.transition = ".6s ease";
                            // slide.querySelector('a:first-of-type').style.transition = ".6s ease";
                            slide.firstElementChild.style.transform = "rotateY(-60deg) translateX(0px)";
                            // slide.querySelector('a:first-of-type').style.transform = "rotateY(-60deg) translateX(0px)";
                            slide.firstElementChild.style.left = "50px";
                            // slide.querySelector('a:first-of-type').style.left = "50px";
                            slide.style.zIndex = null;
                        }, 10);
                    }
                });

                // SHIFT INDEXES ARRAY LAST ITEM TO START
                totalSlides.unshift(totalSlides.pop());
            }
        }
    }

    function nextStep(e) {
        e.preventDefault();

        updateSlidesToShow("forwards");

        next.removeEventListener("click", nextStep);

        setTimeout(() => {
            next.addEventListener("click", nextStep);
        }, 400);
    }

    function previousStep(e) {
        e.preventDefault();

        updateSlidesToShow("backwards");

        prev.removeEventListener("click", previousStep);

        setTimeout(() => {
            prev.addEventListener("click", previousStep);
        }, 400);
    }
})();
