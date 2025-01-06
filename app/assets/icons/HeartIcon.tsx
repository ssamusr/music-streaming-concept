import type { SVGProps } from 'react'

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={18}
    fill='none'
    {...props}
  >
    <path
      stroke='#FACD66'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={0.563}
      d='M2.154 8.699c-.805-2.513.136-5.385 2.773-6.234A4.505 4.505 0 0 1 9 3.149c1.091-.844 2.679-1.129 4.065-.684 2.638.85 3.584 3.721 2.78 6.234C14.593 12.68 9 15.749 9 15.749s-5.552-3.021-6.846-7.05Z'
      clipRule='evenodd'
    />
    <path
      stroke='#FACD66'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={0.563}
      d='M12 5.025c.803.26 1.37.976 1.438 1.817'
      opacity={0.4}
    />
  </svg>
)
