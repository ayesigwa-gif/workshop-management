export type UserRole = 
  | "admin" 
  | "operation_manager" 
  | "finance_manager" 
  | "advertising_manager" 
  | "worker";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Admin",
  operation_manager: "Operation Manager",
  finance_manager: "Finance Manager",
  advertising_manager: "Advertising Manager",
  worker: "Worker",
};

export const ROLE_COLORS: Record<UserRole, string> = {
  admin: "bg-red-100 text-red-800",
  operation_manager: "bg-blue-100 text-blue-800",
  finance_manager: "bg-green-100 text-green-800",
  advertising_manager: "bg-purple-100 text-purple-800",
  worker: "bg-gray-100 text-gray-800",
};
