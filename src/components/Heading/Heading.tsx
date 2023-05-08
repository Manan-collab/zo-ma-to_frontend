 import React, { PropsWithChildren } from 'react';
import './Heading.scss';

interface Props extends PropsWithChildren {
    customHeading: string;
}

const Heading = ({ customHeading }: Props) => {
  return (
    <h1 className={customHeading}>{customHeading}</h1>
  )
}

export default Heading;
