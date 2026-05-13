import Link from "next/link";
import { Wrench, Mail } from "lucide-react";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-sm p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Wrench className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">WorkshopMS</span>
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Mail className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h1 className="text-xl font-semibold text-foreground mb-4">
            Check your email
          </h1>

          <p className="text-muted-foreground mb-6">
            {"We've sent you a confirmation link. Please check your email and click the link to activate your account."}
          </p>

          <Link
            href="/auth/login"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
