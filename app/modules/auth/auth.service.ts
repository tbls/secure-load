import type { AuthSession, Credentials} from "./auth.types";
import { findUserByCredentials } from "./auth.repository";

export async function login(creds: Credentials): Promise<AuthSession> {
  if (!creds.email || !creds.password) {
    throw new Error("Email y password son obligatorios");
  }
  const user = await findUserByCredentials(creds);
  if (!user) {
    throw new Error("Credenciales inválidas");
  }
  return {
    userId: user.id,
    role: user.role,
  };
}
