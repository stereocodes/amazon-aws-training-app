import React from 'react';
import iconCurriculum from '~/static/icons/tag/curriculum.svg';
import iconSkill from '~/static/icons/tag/advanced.svg';
import iconDuration from '~/static/icons/tag/clock.svg';
import iconLanguage from '~/static/icons/tag/language.svg';

interface ITag {
  type: string
  label: string
}

const Tag = (props: ITag) => {
  function icon(type: string) {
    let icon = '';
    switch(type) {
      case 'type': 
        icon = iconCurriculum;
      break;
      case 'language':
        icon = iconLanguage;
        break; 
      case 'duration':
        icon = iconDuration;
        break;
      case 'skill':
        icon = iconSkill;
        break;
      default:
        icon = iconCurriculum;
    }
    return icon;
  }
  return (
    <span>
      <img src={icon(props.type)} />
      {props.label}
    </span>
  );
};

export default Tag;