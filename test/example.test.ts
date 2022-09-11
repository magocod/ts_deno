import { assertEquals } from 'https://deno.land/std@0.155.0/testing/asserts.ts';

Deno.test('example test', () => {
	const v = 10;
	assertEquals(v, 10);
});

// Deno.test("example with permissions", { permissions: { read: true } }, () => {
//     const x = 1 + 2;
//     assertEquals(x, 3);
// });
