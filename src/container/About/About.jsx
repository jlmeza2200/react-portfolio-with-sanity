import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';


// Se reemplaza esta info por Sanity
// const abouts = [
//   { title: "Web Development", desc:"I am a good web develpment", imgurl: images.about01 },
//   { title: "Web Design", desc:"I am a good web design", imgurl: images.about02 },
//   { title: "UX/UI", desc:"I am a good UX/UI", imgurl: images.about03 },
//   { title: "Web Animations", desc:"I am a good web animations", imgurl: images.about04 },
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(()=>{
    const query = '*[ _type == "abouts" ]';
    client.fetch(query)
    .then((data) => setAbouts(data))

  },[])

  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Dev</span> <br /> means <span>Good Business</span> </h2>

      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
            whileInView={{ opacity:1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type:'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  'app__whitebg'
  );


