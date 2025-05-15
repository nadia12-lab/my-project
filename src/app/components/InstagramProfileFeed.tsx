"use client";

export default function InstagramProfileFeed() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* LightWidget script is usually not needed if you're just using the iframe */}
      <iframe
  src="//lightwidget.com/widgets/98ee483914c155f5909e1e270500df72.html"
  scrolling="no"
  className="lightwidget-widget"
  style={{ width: "100%", border: 0, overflow: "hidden", height: 600, backgroundColor: "transparent" }}
  title="Instagram Feed"
      ></iframe>
    </div>
  );
}
