"use client";

import React from "react";
import { FacebookEmbed, InstagramEmbed } from "react-social-media-embed";
import styles from "./SocialMedia.module.scss"; // Optional styling

export default function SocialMedia() {
  return (
    <section className={styles.socialMediaSection}>
      <h1>Our Social Media</h1>

      <div className={styles.embedContainer}>
        <div className={styles.embedItem}>
          <h2>Facebook Post</h2>
          <FacebookEmbed
            url="https://www.facebook.com/buildstoremanila/posts/1234567890123456" // Replace with your real post URL
            width={500}
          />
        </div>

        <div className={styles.embedItem}>
          <h2>Instagram Post</h2>
          <InstagramEmbed
            url="https://www.instagram.com/p/POST_ID/" // Replace with your real post URL
            width={500}
            captioned
          />
        </div>
      </div>
    </section>
  );
}
