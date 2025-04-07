"use client";

import { useState } from "react";
import PokeballCounterUI from "@/predefined/ui/PokeballCounterUI";

export default function PokeballCounter() {
  const [count, setCount] = useState(0);
  return <PokeballCounterUI count={count} setCount={setCount} />;
}
