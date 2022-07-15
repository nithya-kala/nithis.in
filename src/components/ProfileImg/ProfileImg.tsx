import { createStyles } from '@mantine/core'
import Image from 'next/image'
import { FC } from 'react'
import ProfileImage from "../../../public/nithya-img.png";

type StyleVars = {
  size?: number | string
  rounded?: boolean
  backgroundColor?: string
}

const useStyles = createStyles((theme, { size=40, rounded, backgroundColor }: StyleVars) => ({
  root: {
    position: 'relative',
    width: size,
    height: size,
    borderRadius: rounded? '100%' : 0,
    overflow: 'hidden',
    backgroundColor,
  },
}))

type MyProps =StyleVars & {}

export const ProfileImg: FC<MyProps> = ({ size, rounded, backgroundColor }) => {
  const { classes } = useStyles({ size, rounded, backgroundColor })

  return (
    <div className={classes.root}>
      <Image src={ProfileImage} alt="Profile Image" layout='fill' objectFit="cover" />
    </div>
  )
}
