import { Meta, StoryObj } from "@storybook/react";
import Footer from "../components/Footer";

const meta = {
  component: Footer,
  title: "Components/Footer",
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const footer: Story = {};
