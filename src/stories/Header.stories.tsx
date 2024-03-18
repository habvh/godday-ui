import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

const meta = {
  component: Header,
  title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const header: Story = {};
