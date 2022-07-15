import { CSSProperties, FC } from 'react'

const styles: CSSProperties = {
  position: 'absolute',
  height: 60,
  width: '100%',
  overflow: 'hidden',
}

export const BorderImg: FC = () => (
  <div style={styles}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.3 2.2"
      preserveAspectRatio="none"
      fill="#228be611"
    >
      <path d="M35.3 1.7c-3-.6-9.3.4-16.2 0A112 112 0 0 0 0 1.7v.5h35.3z" fill="%23f0f0f0" />
      <path
        d="M35.3 1.2c-3.2-.8-7.3.4-10 .5C22.4 2 16 .3 12.5.4c-3.5.2-4.7.9-7 .9A23 23 0 0 1 0 .4v1.8h35.3z"
        opacity=".5"
        fill="%23f0f0f0"
      />
      <path
        d="M35.3.3c-2.6.8-7.7.3-11.8.4-4.1.2-6.9.7-9.6.3C11.2.7 8.3-.2 5.3 0 2.3.2.6.8 0 1v1h35.3z"
        opacity=".5"
        fill="%23f0f0f0"
      />
    </svg>
  </div>
)

export const BorderImg2: FC = () => (
  <div style={styles}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#228be611" >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
)
