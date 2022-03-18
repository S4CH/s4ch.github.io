import React, { PropsWithChildren } from 'react';
import Chip from '@mui/material/Chip';

type TechStackProps = PropsWithChildren<{stack: Array<string>}>
export const TechStacks: React.FC<TechStackProps> = ({ stack }: TechStackProps) => {
  return (
    <>
      {stack.map(tech => {
        return (
          <Chip
            label={tech}
            color="secondary"
            style={{ marginRight: 5 }}
            key={tech}
          />
        );
      })}
    </>
  );
};
