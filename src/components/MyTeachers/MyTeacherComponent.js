import React, { useEffect, useRef, useState } from 'react';
import styles from './myteacherscomponent.module.css';

function MyTeacherComponent({ name }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 1,
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    if (observerRef.current && elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setIsIntersecting(entry.isIntersecting);
    });
  };

  return (
    <div className={`${styles.card} ${isIntersecting ? styles.show : ''}`} ref={elementRef}>
      <div className={styles.leftBox}>
          <div className={styles.profileImgDiv} >
             <img src="/man.jpg" alt="" className={styles.profileImg} />
            </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.rightBoxName} >{name}</div>  
        <div className={styles.rightBoxType}>Tutor</div>
        <div className={styles.rightBoxLessons}>28 lessons</div>
        </div>
    </div>
  );
}

export default MyTeacherComponent;
