beforeAll(async () => {
  await page.goto("http://127.0.0.1:3000/", { waitUntil: "load" });
}, 120000);

test("Button has correct color", async () => {
  const color = await page.$eval(
    "button",
    (el) => window.getComputedStyle(el).backgroundColor
  );
  expect(color).toBe("rgb(173, 216, 230)"); // lightblue
});

test("Input has correct color", async () => {
  const color = await page.$eval(
    "input",
    (el) => window.getComputedStyle(el).backgroundColor
  );
  expect(color).toBe("rgb(240, 255, 255)"); // azure
});
