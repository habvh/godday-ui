import { Meta, StoryObj } from "@storybook/react";
import SlideProject from "../components/SlideProject";

const meta = {
  component: SlideProject,
  title: "Components/SlideProject",
} satisfies Meta<typeof SlideProject>;

export default meta;
type Story = StoryObj<typeof SlideProject>;

export const slideProject: Story = {};
