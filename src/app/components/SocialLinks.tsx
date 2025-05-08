"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./SocialLinks.module.scss"; // Optional CSS module for styling

export default function SocialLinks() {
  return (
    <div className={styles.socialLinksContainer}>
      <a
        href="https://www.facebook.com/buildstoremanila/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={styles.socialLink}
      >
        <FaFacebook size={24} color="#3b5998" />
      </a>
      <a
        href="https://www.instagram.com/buildstoremanila/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={styles.socialLink}
      >
        <FaInstagram size={24} color="#E1306C" />
      </a>
    </div>
  );
}
