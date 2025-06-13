// src/pages/download.js
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function DownloadPage() {
  return (
    <>
      <Header />
      <Nav />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Download Page</h1>
        <p>Thank you for choosing NutriAI. The app is available soon!</p>
        <img src="/images/download-banner.png" alt="Download" width="300" />
      </main>
      <Footer />
    </>
  );
}
