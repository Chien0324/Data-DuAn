// src/components/LyricsViewer.js
import React, { useEffect, useState } from "react";

const LyricsViewer = () => {
  const [lyrics, setLyrics] = useState("Đang tải nội dung...");
  const [error, setError] = useState(null);

  const txtUrl =
    "https://res.cloudinary.com/dhh7gy4vx/raw/upload/v1751388880/image/Lyrics/baiNayChillPhet_vxxjcq.txt";

  useEffect(() => {
    fetch(txtUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Không tải được file");
        return response.text();
      })
      .then((text) => {
        setLyrics(text);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lời Bài Hát</h1>
      <div style={styles.lyricsBox}>
        {error ? (
          <span style={{ color: "red" }}>Lỗi: {error}</span>
        ) : (
          <pre style={styles.pre}>{lyrics}</pre>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#444",
  },
  lyricsBox: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    whiteSpace: "pre-wrap",
    lineHeight: "1.5",
    fontSize: "16px",
  },
  pre: {
    margin: 0,
  },
};

export default LyricsViewer;
