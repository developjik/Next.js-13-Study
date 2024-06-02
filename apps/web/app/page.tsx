"use client";
import React from "react";

import { Tooltip } from "@repo/ui/components";

function Home() {
  return (
    <div className="p-24">
      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>12345</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>12345</Tooltip.Content>
      </Tooltip>

      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>
          12345
          <Tooltip.Content.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}

export default Home;
