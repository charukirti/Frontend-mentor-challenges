
import blogPreview from '../assets/illustration-article.svg';
import authorImg from '../assets/image-avatar.webp';
import './card.css';

const Card = () => {
  return (
    <main className="mainContainer">
      <section className="mainContainerImage">
        <img src={blogPreview} alt="Blog Preview Image" />
      </section>

      <section className="cardComponent">
        <h2 className="tag">Learning</h2>
        <p className="date">Published 21 Dec 2023</p>
        <h1 className="cardHeading">HTML & CSS Foundations</h1>
        <p className="cardDescription">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="author">
          <img src={authorImg} alt="Author Image" />
          <p className="authorName">Greg Hooper</p>
        </div>
      </section>
    </main>
  );
};

export default Card;