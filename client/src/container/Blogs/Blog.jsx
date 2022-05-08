import React, { useState, useEffect } from "react";
import "./Blog.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [blogs, setBlogs] = useState([]);
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blogs"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
      setFilterBlog(data);
    });
  }, []);

  const handleBlogFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterBlog(blogs);
      } else {
        setFilterBlog(blogs.filter((blog) => blog.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        Blog <span>Section</span>
      </h2>

      <div className="app__blog-filter">
        {["Arcane", "Game", "Tournaments", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleBlogFilter(item)}
            className={`app__blog-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blog-portfolio"
      >
        {filterBlog.map((blog, index) => (
          <div className="app__blog-item app__flex" key={index}>
            <div className="app__blog-img app__flex">
              <img src={urlFor(blog.imgUrl)} alt={blog.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__blog-hover app__flex"
              >
                <a href={blog.projectLink} target="_blanl" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={blog.codeLink} target="_blanl" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__blog-content app__flex">
              <h4 className="bold-text">{blog.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {blog.description}
              </p>

              <div className="app__blog-tag app__flex">
                <p className="p-text">{blog.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Blog, "app__blogs"),
  "blog",
  "app__primarybg"
);
