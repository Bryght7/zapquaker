import React from "react";

type Props = {
  value: number;
};

export class SpellQuantity extends React.Component<Props> {
  render() {
    return (
      <p className="spell-quantity font-bold text-white text-center">x{this.props.value}</p>
    );
  }
}
