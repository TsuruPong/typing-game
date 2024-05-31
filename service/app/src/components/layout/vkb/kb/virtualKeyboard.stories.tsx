import { Meta, StoryObj } from "@storybook/react";
import { VirtualKeyBoard } from "./virtualKeyboard";

const meta: Meta<typeof VirtualKeyBoard> = {
  title: "virtual keyboard",
  component: VirtualKeyBoard,
};

export default meta;

type Story = StoryObj<typeof VirtualKeyBoard>;

export const VKB: Story = {};
