"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FacebookEmbed } from "react-social-media-embed";

export default function SocialMediaPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [pathname]); // re-parse Facebook plugins on route change

  return (
    <>
      <FacebookSDK />
      <div
        className="fb-page"
        data-href="https://www.facebook.com/buildstoremanila"
        data-tabs="timeline"
        data-width="500"
        data-height="70"
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
