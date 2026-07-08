import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Elien Future Systems",
  description: "The terms that apply when using Elien Future Systems and its website.",
};

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.8, maxWidth: 760 }}>
          These terms describe the basic rules for using our website and engaging with our product listings, contact forms, and support channels.
        </p>

        <section style={{ marginTop: 40, display: "grid", gap: 24 }}>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Use of the site</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              You agree to use this site for lawful purposes and to avoid actions that could disrupt, damage, or interfere with the experience of other visitors.
            </p>
          </article>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Products and availability</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              Product details, pricing, and availability may change without notice. We may update or remove products as inventory, market conditions, or business needs change.
            </p>
          </article>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Orders and communication</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              When you submit a form or contact us, you agree that we may reach out to confirm details, share availability, and continue the ordering process.
            </p>
          </article>
          <article style={{ padding: 24, borderRadius: 20, border: "1px solid #1E293B", background: "rgba(15,23,42,0.72)" }}>
            <h2 style={{ margin: "0 0 10px", color: "#fff", fontSize: 22 }}>Limitation</h2>
            <p style={{ margin: 0, lineHeight: 1.8, color: "#CBD5E1" }}>
              We provide the website and its content as-is. To the extent allowed by law, we are not responsible for indirect or incidental losses related to your use of the site.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}