import { assertEquals } from 'https://deno.land/std@0.155.0/testing/asserts.ts';

Deno.test('example group', async (t) => {
	let v = 1;

	// provide a step name and function
	await t.step('single a', () => {
		v++;
		assertEquals(v, 2);
	});

	// nested steps are also supported
	await t.step('test group', async (t) => {
		v++;
		await t.step('a', () => {
			assertEquals(v, 3);
		});

		await t.step('b', () => {
			assertEquals(v, 3);
		});
	});
});
