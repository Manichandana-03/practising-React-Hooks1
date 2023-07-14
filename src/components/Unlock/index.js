// Write your code here
import {useState} from 'react'

import {
  CardContainer,
  Card,
  LockImg,
  LockMsg,
  LockStatus,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, changeLockStatus] = useState(true)
  const onClickLockButton = () => {
    changeLockStatus(prevState => !prevState)
  }

  return (
    <CardContainer>
      <Card>
        <LockImg
          src={
            isLocked
              ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
          }
          alt={isLocked ? 'lock' : 'unlock'}
        />
        <LockMsg>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</LockMsg>
      </Card>
      <LockStatus onClick={onClickLockButton} type="button">
        {isLocked ? 'Unlock' : 'Lock'}
      </LockStatus>
    </CardContainer>
  )
}

export default Unlock
