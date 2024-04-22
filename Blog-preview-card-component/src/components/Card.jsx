import blogPreview from "../assets/illustration-article.svg";
import authorImg from "../assets/image-avatar.webp";
import './card.css'

const Card = () => {
  return (
    <>
      <main className="main-container">
        <section className="main-container-image">
          <img src={blogPreview} alt="preview-image" />
        </section>

        <section className="card-component">
          <h2 className="tag">Learning</h2>
          <p className="date">Published 21 Dec 2023</p>
          <h1 className="card-heading">HTML & CSS foundations</h1>
          <p className="card-description">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="author">
            <img src={authorImg} alt="" />
            <p className="author-name">Greg Hooper</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Card;
