import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({children, userName = 'unknow',initialIsFollowing}) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);


  const imageSrc = `https://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  const formatedUsername = (userName) => <span>@{userName}</span>;

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={imageSrc} alt="image" className='tw-followCard-avatar' />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{formatedUsername(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  )
}