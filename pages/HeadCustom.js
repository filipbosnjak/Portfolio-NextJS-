import React from "react";
import Head from "next/head";

const HeadCustom = () => {
  return (
    <Head>
      <title>MyBlog</title>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
        integrity='sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=='
        crossorigin='anonymous'
      />

      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
      <script src='https://unpkg.com/scrollreveal'></script>
      <script>//alert("asdfas")</script>
    </Head>
  );
};

export default HeadCustom;
