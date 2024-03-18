import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { IoAddCircle } from "react-icons/io5";
import { ComponentProps } from "react";

type WrapperType = ComponentProps<typeof Button>;

const Wrapper = (props: WrapperType) => {
  return (
    <>
      <Button {...props}>Click me</Button>
    </>
  );
};

const meta = {
  component: Wrapper,
  title: "Components/Button",
  args: {
    icon: "",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const NonButton: Story = {};

export const IconLeftButton: Story = {
  args: {
    icon: <IoAddCircle />,
    positionIcon: "left",
  },
};

export const IconRightButton: Story = {
  args: {
    icon: <IoAddCircle />,
    positionIcon: "right",
  },
};
