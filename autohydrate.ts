/// <reference lib="dom" />
export default async function hydrate(root: Element) {
	for (const el of Array.from(root.querySelectorAll("[data-autohydrate]"))) {
		const { default: hydratefunc } = await import(
			el.getAttribute("data-autohydrate") as string
		);
		await hydratefunc(el);
	}
}
