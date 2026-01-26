import { sleep } from "~/server/db/fake-db/sleep";
import type { User, Credentials } from "./auth.types";
import { users } from "~/server/db/fake-db/users";


export async function findUserByCredentials(creds: Credentials): Promise<User | null> {
  await sleep();
  const user = users.find(
    (u) =>
      u.email === creds.email &&
      u.password === creds.password
  );
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}
