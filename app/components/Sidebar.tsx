import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { HomeIcon } from '~/assets/icons/HomeIcon'
import { LogoutIcon } from '~/assets/icons/LogoutIcon'
import { PlaylistIcon } from '~/assets/icons/PlaylistIcon'
import { ProfileIcon } from '~/assets/icons/ProfileIcon'
import { RadioIcon } from '~/assets/icons/RadioIcon'
import { VideoIcon } from '~/assets/icons/VideoIcon'

const NAVLINKS = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    icon: <HomeIcon className='h-6 w-6' />,
  },
  {
    id: 2,
    name: 'Playlist',
    path: '/playlist',
    icon: <PlaylistIcon className='h-6 w-6' />,
  },
  {
    id: 3,
    name: 'Radio',
    path: '/radio',
    icon: <RadioIcon className='h-6 w-6' />,
  },
  {
    id: 4,
    name: 'Video',
    path: '/video',
    icon: <VideoIcon className='h-6 w-6' />,
  },
]

export const Sidebar = () => {
  return (
    <aside className='fixed left-0 top-0 mx-5 mt-5 flex h-screen w-14 flex-col items-center'>
      {/* LOGO */}
      <div className='mb-10'>
        <Link to='/'>
          <img
            src='app/assets/images/logo.png'
            alt='Logo'
            className='h-8 w-8'
          />
        </Link>
      </div>
      <div>
        <div className='mb-5 flex flex-col items-center gap-8 rounded-full bg-dark-alt px-4 py-6'>
          {NAVLINKS.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              className={({ isActive }) =>
                isActive ? 'navlink-active' : 'navlink-inactive'
              }
            >
              <span>{link.icon}</span>

              <span className='block sm:hidden'>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className='flex flex-col items-center gap-8 rounded-full bg-dark-alt px-4 py-6'>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive
                ? 'navlink-active flex items-center gap-x-2'
                : 'navlink-inactive flex items-center gap-x-2'
            }
          >
            <span>
              <ProfileIcon className='h-6 w-6' />
            </span>
            <span className='block sm:hidden'>Profile</span>
          </NavLink>
          <NavLink
            to='/logout'
            className={({ isActive }) =>
              isActive
                ? 'navlink-active flex items-center gap-x-2'
                : 'navlink-inactive flex items-center gap-x-2'
            }
          >
            <span>
              <LogoutIcon className='h-6 w-6' />
            </span>
            <span className='block sm:hidden'>Log Out</span>
          </NavLink>
        </div>
      </div>
    </aside>
  )
}
