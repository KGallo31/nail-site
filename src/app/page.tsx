import Image from "next/image";


export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Shallow Nail Studio</h1>
      <div className="gallery">
        <a href="https://www.instagram.com/p/C9ScZh2OdDV/?img_index=1">
          <Image src="/nail-example-2.png" alt="Nail design 1" width={250} height={250} />
        </a>
        <a href="https://www.instagram.com/p/DG4hAyTOjHl/?img_index=1">
          <Image src="/nail-example-3.png" alt="Nail design 2" width={250} height={250} />
        </a>
        <a href="https://www.instagram.com/p/DHR-SyAuM_6/?img_index=2">
          <Image src="/nail-example-4.png" alt="Nail design 3" width={250} height={250} />
        </a>
      </div>
      <div className="testimonials">
        <blockquote>"Amazing service! My nails have never looked better." - Sarah</blockquote>
        <blockquote>"Professional and creative. Highly recommended!" - Emily</blockquote>
      </div>
    </div>
  );
}
