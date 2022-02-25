import clsx from 'clsx';
import { useRef, useState } from 'react';
import styles from './styles.module.css';

export default function VideoPlayer({src}){
  const video = useRef(null);
  const [playing, setPlaying] = useState(true);

  const handlePlay = () => {
    const { current: videoEl } = video;
    playing ? videoEl.pause(): videoEl.play();
    setPlaying(!playing);
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  })

  return (
    <div className={styles.wrapper}>
      <video 
      muted 
      autoPlay
      loop
      className={styles.video} 
      src={src} controls={false} 
      ref={video}
      onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay}></i>
    </div>
  )
}