import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Project, Experience, Education } from '.';
import { projects, experience, education } from '../utils/data';

export const PersonalTabs = () => {
  return (
    <Tabs>
      <TabItem value="projects" label="PROJECTS" default>
        {projects.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
      </TabItem>
      <TabItem value="resume" label="RESUME">
        <h2>Experience</h2>
        {experience.map((props, idx) => (
          <Experience key={idx} {...props} />
        ))}
        <h2>Education</h2>
        {education.map((props, idx) => (
          <Education key={idx} {...props} />
        ))}
      </TabItem>
    </Tabs>
  );
};
