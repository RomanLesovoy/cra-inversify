const user = {
  email: 'email@email.com',
  name: 'User'
}
const users = [
  { name: 'Brad Pitt', image: 'brad.jpg' },
  { name: 'Britney Spears', image: 'britney.jpg' },
  { name: 'Chris Pratt', image: 'Chris-Pratt.jpg' },
  { name: 'Ronaldinho', image: 'romald.jpg' }
]

function resolveAfter(value: any, ms: number): any {
  return new Promise((res) => {
    setTimeout(() => res(value), ms)
  })
}

export const getUser = () => resolveAfter(user, 2000);

export const getUsers = (): Array<any> => resolveAfter(users, 2000);
