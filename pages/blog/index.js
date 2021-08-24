import { React, useState, useEffect } from "react";
import Link from "next/link";
import styles from "/styles/Home.module.scss";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

const BlogHome = ({ slugs, markdownWithMetaData }) => {
  const [isSticky, setIsSticky] = useState("");
  const [isActive, setIsActive] = useState("");

  const scrollListener = () => {
    if (window.scrollY >= 20) {
      setIsSticky(styles.sticky);
    } else {
      setIsSticky(" ");
    }
  };

  const toggle = () => {
    if (isActive === "") {
      setIsActive(styles.active);
    } else {
      setIsActive("");
    }
  };
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", scrollListener);
      let toggler = document.querySelector("#toggler");
      toggler.addEventListener("click", toggle);
    }
    return () => {
      window.removeEventListener("scroll", scrollListener);
      if (document.querySelector("#toggler")) {
        let toggler = document.querySelector("#toggler");
        toggler.removeEventListener("click", toggle);
      }
    };
  }, [isActive]);
  const marked = markdownWithMetaData.map((item) => {
    return matter(item);
  });
  //console.log(" mark", markdownWithMetaData)
  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${isSticky}`}>
        <div className=''>
          <button id='toggler' className={`${styles.menuToggler} ${isActive}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.navbarMenu} ${isActive}`}>
            <Link className={styles.link} href='/'>
              <a onClick={toggle}>Home</a>
            </Link>
            <Link className={styles.link} href='/'>
              <a onClick={toggle}>About Me</a>
            </Link>
            <Link className={styles.link} href='/'>
              <a onClick={toggle}>Skills</a>
            </Link>
            <Link className={styles.link} href='/'>
              <a onClick={toggle}>My Work</a>
            </Link>
            <Link className={styles.link} href='/'>
              <a onClick={toggle}>Contact Me</a>
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.showcase}>
        {slugs.map((slug, i) => {
          // console.log(slug);

          // console.log(marked[i].data.postTitle);
          return (
            <div key={slug} className={styles.card}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.content}>
                <Image
                  src={`/${slug}.jpg`}
                  alt='Filip Bošnjak'
                  className={styles.aboutPic}
                  width='100%'
                  height='50%'
                  layout='responsive'
                />
                <h2>012</h2>

                <h3>{marked[i].data.postTitle}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  neque?
                </p>
                <button className={styles.button}>
                  <Link href={"/blog/" + slug}>
                    <a>{slug}</a>
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogHome;

export const getStaticProps = async () => {
  //path.join - handles / and \ in the path
  // const markdownWithMetaData = fs
  //   .readFileSync(path.join("posts", slug + ".html"))
  //   .toString();
  // const parsedMarkdown = matter(markdownWithMetaData);
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => {
    return filename.replace(".md", "").replace(".html", "");
  });

  const markdownWithMetaData = paths.map((filename) => {
    return fs.readFileSync(path.join("posts", filename + ".html")).toString();
  });
  return {
    props: {
      slugs: paths,
      markdownWithMetaData: markdownWithMetaData,
    },
  };
};
