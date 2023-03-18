import React, { useEffect, useState } from "react";

const MobileOrientationAlert = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    setIsLandscape(
      window.matchMedia(
        "(orientation: landscape), (orientation: landscape-secondary)"
      ).matches
    );

    const handleOrientationChange = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
      setIsLandscape(
        window.matchMedia(
          "(orientation: landscape), (orientation: landscape-secondary)"
        ).matches
      );
    };

    const handleResize = () => {
      handleOrientationChange();
    };

    handleOrientationChange();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && isLandscape) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [isMobile, isLandscape]);

  return showAlert ? (
    <div class="h-screen flex flex-col justify-center px-8">
      <p class="text-lg text-center pt-20 text-white">
        Hi there! <span class="text-blue-500">I've noticed</span> that you're
        currently viewing this website on your mobile device in landscape mode.
        For the best viewing experience, I recommend{" "}
        <span class="text-green-500">
          rotating your device to portrait mode
        </span>
        . My website has been optimized for portrait mode, and you may
        experience some display issues while using the website in landscape
        mode. Thank you for your cooperation, and I hope you enjoy your browsing
        experience!
      </p>
    </div>
  ) : null;
};

export default MobileOrientationAlert;
