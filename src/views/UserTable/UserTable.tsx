import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UserGrid from './componets/UserGrid'
import NavBar from '../../components/NavBar'

const UserTable = () => {
  const user = useSelector((state: RootState) => state.user.user)

  return (
    <>
      <NavBar />
      <div className='user-view'>
        <h1>User List</h1>
        <UserGrid user={user} />
      </div>
    </>
  )
}

export default UserTable