import { Meta, StoryObj } from "@storybook/react";
import { Key } from "./key";
import { KeyProps } from "@/types/vkb/key/props";
import { KeyKind } from "@/const/key/kinds";

const meta: Meta<typeof Key> = {
  title: "key",
  component: Key,
};

export default meta;

type Story = StoryObj<typeof Key>;

export const SymbolEmpty: Story = {
  args: { kind: KeyKind.TINY },
};
export const SymbolUnEmpty: Story = {
  args: { symbol: "A", kind: KeyKind.TINY },
};
export const KindTiny: Story = {
  args: { kind: KeyKind.TINY },
};
export const KindSmall: Story = {
  args: { kind: KeyKind.SMALL },
};
export const KindMedium: Story = {
  args: { kind: KeyKind.MEDIUM },
};
export const KindHalfLarge: Story = {
  args: { kind: KeyKind.HALFLARGE },
};
export const KindLarge: Story = {
  args: { kind: KeyKind.LARGE },
};
export const KindSpace: Story = {
  args: { kind: KeyKind.SPACE },
};
export const Press: Story = {
  args: { isPress: true, kind: KeyKind.TINY },
};
export const UnPress: Story = {
  args: { isPress: false, kind: KeyKind.TINY },
};
