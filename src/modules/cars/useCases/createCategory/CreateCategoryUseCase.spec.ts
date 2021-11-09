describe("Create Category", () => {
  it("Expect 2 plus 2 = 4", () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });

  it("Expect 2 plus 2 != 5", () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
});
