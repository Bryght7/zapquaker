import React from 'react';
import { SpellDisplay } from './components/SpellDisplay';

export default class App extends React.Component {
  render() {
    return (
      <SpellDisplay name="spell_lightning" maxLevel={9}/>
    );
  }
}
