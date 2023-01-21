it('Devo conhecer as principais assertivas do JEST', () => {
    let number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

it('Devo saber trabalhar com objetos', () => {
    const obj = {name: 'John', email: 'john@email.com'}
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name','John')

    const obj2 = {name: 'John', email: 'john@email.com'}
    expect(obj).not.toBe(obj2);
    expect(obj).toEqual(obj2);
})