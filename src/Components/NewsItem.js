import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './NewsItem.css'

class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, source, date } = this.props;

    const formattedTitle = title || "No Title Available";
    const formattedDescription = description || "No Description Available";
    const formattedSource = source || "Unknown Source";
    const formattedDate = date ? new Date(date).toGMTString() : "Unknown Date";

    return (
      <motion.div
        className="card news-item-card"
        style={{ width: '18rem' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotateY: 10 }} // 3D hover effect
      >
        <img src={imageUrl} className="card-img-top" alt={formattedTitle} />
        <div className="card-body">
          <h5 className="card-title">{formattedTitle}</h5>
          <p className="card-text">{formattedDescription}</p>
          <p className="card-text">
            <small className="text-muted">By {formattedSource} on {formattedDate}</small>
          </p>
          <a href={newsUrl} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </motion.div>
    );
  }
}

export default NewsItem;
