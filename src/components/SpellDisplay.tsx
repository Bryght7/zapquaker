import React from "react";
import { SpellLevel } from "./SpellLevel";
import { SpellQuantity } from "./SpellQuantity";

type Props = {
  name: string;
  maxLevel: number;
  quantity?: number;
};

export class SpellDisplay extends React.Component<Props> {
  render() {
    let spellQuantityComponent;
    if (this.props.quantity) {
      spellQuantityComponent = <SpellQuantity value={ this.props.quantity} />;
    }
    
    return (
      <div className="relative inline-block border border-indigo-700 rounded-lg bg-purple-700">
        { spellQuantityComponent }
        <SpellLevel
          level={this.props.maxLevel}
          maxLevel={this.props.maxLevel}
        />
        <img
          className="w-24"
          src={`/img/${this.props.name}.png`}
          alt={`Icon ${this.props.name}`}
        />
      </div>
    );
  }
}
