import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Elien Future Systems",
  description: "How Elien Future Systems collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050810",
        color: "#E2E8F0",
        padding: "96px 1.5rem 72px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#60A5FA", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
          Back to home
        </Link>

        <h1 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "18px 0 12px", color: "#fff", letterSpacing: "-0.04em" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.8, maxWidth: 760 }}>
          This policy explains how we handle information when you visit our website, contact us, or submit an order request.
        </p>

        <section style={{ marginTop: 40, display: "grid", gap: 24 }}>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Information we collect</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              We may collect the details you choose to share through forms, messages, or contact links, such as your name, phone number, email address, and order preferences.
            </p>
          </article>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>How we use information</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              We use your information to respond to inquiries, process orders, provide support, improve our website, and share updates related to products or services you asked about.
            </p>
          </article>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Sharing and protection</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              We do not sell your personal information. We only share it when necessary to operate the site, fulfill a request, or meet legal obligations, and we take reasonable steps to protect it.
            </p>
          </article>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Your choices</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              You can contact us at any time to update or remove your details from our records, subject to legal and operational requirements.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}