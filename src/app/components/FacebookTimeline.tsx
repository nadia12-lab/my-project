"use client";

import { useEffect } from "react";
declare global {
  interface Window {
    FB: any;
  }
}

export default function FacebookTimeline() {
  useEffect(() => {
    // Load Facebook SDK script if not already loaded
    if (!window.FB) {
      ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
const js = document.createElement(s) as HTMLScriptElement;
        js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
        fjs.parentNode?.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/buildstoremanila"
        data-tabs="timeline"
        data-width="500"
        data-height="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/buildstoremanila"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/buildstoremanila">Build Store Manila</a>
        </blockquote>
      </div>
    </>
  );
}

