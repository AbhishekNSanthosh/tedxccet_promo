import React from 'react';
import styles from '../../themes/about.module.css'

const About= () => {
  const about = [
    {
      title: 'About TEDx',
      desc: 'TED, which stands for Technology, Entertainment, Design, is a global platform devoted to spreading ideas through short, powerful talks. Started in 1984 as a conference where technology, entertainment, and design converged, TED has since grown to encompass a vast array of topics and disciplines, all with the aim of sparking curiosity, inspiring change, and fostering connections among people worldwide. In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.',
      img: '/tedx.png',
    },
    {
      title: 'About Us',
      desc: 'The first-ever TEDxCCET at Carmel College of Engineering & Technology (CCET) is something we are quite excited about! Our dedication to encouraging creativity, inspiration, and insightful conversation both inside and outside of our community is demonstrated by this ground-breaking event. CCET is pleased to welcome the TEDx platform to our campus as a forward-thinking organization committed to academic excellence and the quest of knowledge. A vibrant platform for sharing ideas, thoughts, and experiences, TEDxCCET will bring together intellectuals and thought leaders from all backgrounds. For our students, teachers, staff, and community members, this first-ever TEDx event at our college offers a special chance to mingle with like-minded people, attend thought-provoking speeches, and take part in interactive conversations. By hosting TEDxCCET, we aim to inspire curiosity, foster creativity, and spark meaningful conversations that have the power to shape our future. We believe that this event will serve as a catalyst for innovation, collaboration, and personal growth, empowering individuals to make a difference in their communities and beyond. Join us as we embark on this exciting journey of exploration, discovery, and inspiration at TEDxCCET at Carmel College of Engineering & Technology. Together, let’s embrace the power of ideas to ignite change and transform lives.',
      img: '/collegeLogo.png',
      reverse: true,
    },
  ];

  return (
    <div className={styles.container}>
      {about.map((item, index) => (
        <div className={styles.wrap} key={index}>
          <div className={styles.row}>
            <span className={styles.about}>{item?.title}</span>
          </div>
          <div
            className={styles.row}
            style={{
              flexDirection: item?.reverse && 'row-reverse',
            }}
          >
            <div className={styles.left}>
              <img src={item?.img} alt="" className={styles.img} />
            </div>
            <div className={styles.right}>
              <p className={styles.desc}>{item?.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
