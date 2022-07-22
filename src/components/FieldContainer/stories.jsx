import { FieldContainer } from ".";

export default {
  title: "FieldContainer",
  component: FieldContainer,
  args: {
    forId: "Estou testando",
    onBlur: "",
  },
};

export const Template = (args) => {
  return <FieldContainer {...args} />;
};
