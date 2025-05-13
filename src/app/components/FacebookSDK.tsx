"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FacebookSDK() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Add fb-root div dynamically if missing
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    // Load Facebook SDK script dynamically if not already loaded
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
    } else {
      // If SDK already loaded, parse XFBML on route change
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }
  }, [pathname]);

  if (!isClient) return null;

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/buildstoremanila"
      data-tabs="timeline"
      data-width="500"
      data-height="600"
      data-small-header="false"
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
  );
}
