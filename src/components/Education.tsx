import React from 'react';
import { resumeStyles } from '../css';

export const Education = ({ img, school, study, date }) => {
  const classes = resumeStyles();
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.fullWidth}>
            <div className={classes.imgContainer}>
              <img alt={school} src={img} className={classes.img} />
            </div>
            <div className={classes.companyContainer}>
              <h3 className={classes.jobTitle}>{school}</h3>
              <span className={classes.company}>{study}</span>
              <div className={classes.flex}>
                <h4 className={classes.date}>
                  <span>{date}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
