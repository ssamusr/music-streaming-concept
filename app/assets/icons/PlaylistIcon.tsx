import type { SVGProps } from 'react'

export const PlaylistIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={48}
    height={48}
    viewBox='0 0 24 24'
    {...props}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      color='currentColor'
    >
      <path d='M2 9c0-3.3 0-4.95 1.025-5.975S5.7 2 9 2h2c3.3 0 4.95 0 5.975 1.025S18 5.7 18 9v2c0 3.3 0 4.95-1.025 5.975S14.3 18 11 18H9c-3.3 0-4.95 0-5.975-1.025S2 14.3 2 11z' />
      <path d='M18.238 7c1.335.081 2.185.305 2.798.917.964.964.964 2.516.964 5.62v1.88c0 3.103 0 4.655-.964 5.619S18.52 22 15.417 22h-1.88c-3.104 0-4.656 0-5.62-.964-.612-.613-.836-1.463-.917-2.798M11 12V6c.222.4.4 2.08 2 2.4M11 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0' />
    </g>
  </svg>
)
