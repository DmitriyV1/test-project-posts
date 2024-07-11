import { atom } from "nanostores";

export const account = atom();

export function logIn(email: string) {
  account.set(email);
}

export function getEmail() {
  return account.get();
}
