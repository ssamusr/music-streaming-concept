import type { SVGProps } from 'react'

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={48}
    height={48}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5z'
      clipRule='evenodd'
    />
  </svg>
)
