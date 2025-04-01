"use client";

import React from "react";
import "@/app/glowingStar.css";

export const GlowingStarLoading: React.FC = () => {
  return (
    <div className="glowing-star-container">
      <svg
        className="pl"
        viewBox="0 0 56 56"
        width="56px"
        height="56px"
        role="img"
        aria-label="Glowing star rotating in circles, emitting glowing yellow, orange, and cyan stripes that move along with the star and leave behind dots of the same colors that shrink"
      >
        <clipPath id="star-clip">
          <polygon points="0,-10 2.5,-2.5 10,0 2.5,2.5 0,10 -2.5,2.5 -10,0 -2.5,-2.5" />
        </clipPath>
        <defs>
          <radialGradient id="star-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="hsl(60, 100%, 70%)" />
            <stop offset="100%" stopColor="hsl(60, 100%, 20%)" />
          </radialGradient>
        </defs>
        <g transform="translate(28,28)">
          <g
            fill="none"
            strokeLinecap="round"
            strokeWidth="2.5"
            transform="rotate(-90)"
          >
            <g className="pl__stripe-rotate">
              <circle
                className="pl__stripe pl__stripe--1"
                r="18.25"
                stroke="hsl(60, 100%, 50%)"
                strokeDasharray="114.7 114.7"
              />
            </g>
            <g className="pl__stripe-rotate">
              <circle
                className="pl__stripe pl__stripe--2"
                r="15.75"
                stroke="hsl(30, 100%, 50%)"
                strokeDasharray="106.8 106.8"
              />
            </g>
            <g className="pl__stripe-rotate">
              <circle
                className="pl__stripe pl__stripe--3"
                r="13.25"
                stroke="hsl(180, 100%, 50%)"
                strokeDasharray="99 99"
              />
            </g>
          </g>
          <g className="pl__star" transform="translate(0,-15.75)">
            <polygon
              className="pl__star-shadow"
              fill="hsla(60,100%,50%,0.3)"
              points="0,-10 2.5,-2.5 10,0 2.5,2.5 0,10 -2.5,2.5 -10,0 -2.5,-2.5"
            />
            <polygon
              fill="url(#star-glow)"
              points="0,-10 2.5,-2.5 10,0 2.5,2.5 0,10 -2.5,2.5 -10,0 -2.5,-2.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
