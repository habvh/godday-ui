import { Meta, StoryObj } from "@storybook/react";
import Search from "../components/Search";

const meta = {
  component: Search,
  title: "Components/Search",
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

export const search: Story = {};
