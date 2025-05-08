"use client";

import React, { useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tiktokVideos = [
  "7498704354711506177",
  "7499800089875975441",
  "7499799316291194128",
  "7499804179674762497",
  "7499796934379457793",
  "7499795746468809985",
  "7498704354711506177",
  "7498324886037728528",
  "7498324148918160641",
  "7480511961042636049",
];

function loadTikTokEmbedScript() {
  const scriptId = "tiktok-embed-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.id = scriptId;
    document.body.appendChild(script);
  } else {
    // If script already loaded, re-run TikTok embed parser if available
    if (
      (window as any).tiktokEmbed &&
      typeof (window as any).tiktokEmbed.load === "function"
    ) {
      (window as any).tiktokEmbed.load();
    }
  }
}

export default function TikTokCarousel() {
  useEffect(() => {
    loadTikTokEmbedScript();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true, // allow dynamic width slides
    responsive: [
      {
        breakpoint: 768, // tablets & below
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "90vw", margin: "50px auto" }}>
      <Slider {...sliderSettings}>
        {tiktokVideos.map((id) => (
          <div key={id}>
            <blockquote
              className="tiktok-embed"
              cite={`https://www.tiktok.com/@tiktok/video/${id}`}
              data-video-id={id}
              style={{ width: "325px", height: "563px" }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.tiktok.com/@tiktok/video/${id}`}
              >
                @tiktok
              </a>
            </blockquote>
          </div>
        ))}
      </Slider>
    </div>
  );
}
