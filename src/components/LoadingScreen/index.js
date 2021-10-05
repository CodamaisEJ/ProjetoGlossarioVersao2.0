import React from "react";
import "./styles.css";

export default function LoadingScreen() {
  return (
    <div className="splash-screen">
      Wait a moment while we load your app.
      <div className="loading-dot">.</div>
    </div>
  );
}
