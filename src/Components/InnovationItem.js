import React, { useState } from 'react'

function InnovationItem({
  innovation_title,
  innovation_story,
  innovation_name,
  innovation_year,
  source,
  innovation_image,
  likeInnovation,
  removeInnovation,
  id,
}) {
  const [readMore, setReadMore] = useState(false)

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0); 
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }
 
    if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
 
    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  
  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }
   
    if (activeBtn === 'dislike'){
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }
 
    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };





  return (
    <article className='innovation'>
      <img src={innovation_image} alt={innovation_name} />
      <footer>
        <div className='innovation-info'>
          <h2 className='innovation-title'>{innovation_title}</h2>
          <h4 className='innovation-year'>
            Innovation Year: {innovation_year}
          </h4>
        </div>

        <p>
          {readMore ? innovation_story : `${innovation_story.slice(0, 2)}...`}
          <button className='btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <h3>
          Source: <a href={source}>{source}</a>
        </h3>
        <button className='danger-btn' onClick={() => removeInnovation(id)}>
          Not Interested
        </button>

         
          <div className="btn-container">
            <button
              className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
              onClick={handleLikeClick}
            >
              <span className="fa-solid fa-thumbs-down"></span>
              Like {likeCount}
            </button>
        
            <button
              className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
              onClick={handleDisikeClick}
            >
              <span className="material-symbols-rounded"></span>
              Dislike {dislikeCount}
            </button>
          </div>
        
      </footer>
    </article>
  )
}

export default InnovationItem
