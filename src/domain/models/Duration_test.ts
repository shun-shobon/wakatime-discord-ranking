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

Deno.test("Duration_add", () => {
  const duration1 = new Duration(50);
  const duration2 = new Duration(100);

  const duration3 = duration1.add(duration2);
  assertEquals(duration3.hours, 0);
  assertEquals(duration3.minutes, 2);
  assertEquals(duration3.secs, 30);
});
