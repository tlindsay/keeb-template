import dasherize from 'dasherize';

import * as Scenes from '../scenes/*.js';

const scenes = Object.keys(Scenes.default).map(s => ({
  component: Scenes[s].default,
  slug: `/${dasherize(s)}`,
  title: s,
  isDefault: Scenes[s].isDefaultScene
}));
const defScene = scenes.find(s => s.isDefault) || scenes[0];

scenes.default = defScene.component;

export default scenes;
