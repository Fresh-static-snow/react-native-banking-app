import { PaperMenuItem, list } from './PaperMenuItem';
import React, { Fragment } from 'react';

export const PaperMenu = (): JSX.Element => {
  return (
    <Fragment>
      {list.map((item, index) => (
        <PaperMenuItem key={index} item={item} />
      ))}
    </Fragment>
  );
};
