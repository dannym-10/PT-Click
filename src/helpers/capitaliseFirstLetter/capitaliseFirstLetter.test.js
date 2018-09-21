import capitaliseFirstLetter from './capitaliseFirstLetter'

test('it converts this sentence to first letter being capital', () => {
  const sentence = 'an example all lowercase'
  expect(capitaliseFirstLetter(sentence)).toBe('An example all lowercase')
})
