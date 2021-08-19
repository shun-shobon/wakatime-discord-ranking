import { assertEquals } from "../../deps_test.ts";
import Duration from "./Duration.ts";

Deno.test("Duration_secs", () => {
  const duration = new Duration(100);
  assertEquals(duration.secs, 40);
});

Deno.test("Duration_minutes", () => {
  const duration = new Duration(150);
  assertEquals(duration.minutes, 2);
});

Deno.test("Duration_hours", () => {
  const duration = new Duration(5000);
  assertEquals(duration.hours, 1);
});
