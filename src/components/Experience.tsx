import React from 'react';
import { resumeStyles } from '../css';
import { TechStacks } from '.';

export const Experience = ({
  img,
  jobTitle,
  company,
  date,
  workLength,
  location,
  tasks,
  techstack,
}) => {
  const classes = resumeStyles();
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.fullWidth}>
            <div className={classes.imgContainer}>
              {img ? (
                <img alt={company} src={img} className={classes.img} />
              ) : (
                <></>
              )}
            </div>
            <div className={classes.companyContainer}>
              <h3 className={classes.jobTitle}>{jobTitle}</h3>
              <span className={classes.company}>{company}</span>
              <div className={classes.flex}>
                <h4 className={classes.date}>
                  <span>{date} •</span>
                </h4>
                <h4 className={classes.date}>
                  <span> {workLength}</span>
                </h4>
              </div>
              <div style={{ display: 'block', fontSize: 10 }}>
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className={classes.city}>
            <p className={classes.information}>
              {tasks.map(task => {
                return (
                  <>
                    • {task} <br />
                  </>
                );
              })}
            </p>
            <TechStacks stack={techstack} />
          </div>
        </div>
      </div>
    </section>
  );
};
