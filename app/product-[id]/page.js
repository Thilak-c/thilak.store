import { products, getWhatsAppLink } from "../../data/products";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return {
      title: "Product Not Found - Thilak Store",
    };
  }
  return {
    title: `Buy ${product.title} - Thilak Store`,
    description: `Price: ₹${product.price.toLocaleString()} | Level: ${product.level} | Rank: ${product.rank} | Skins: ${product.skins}. Click to view on Thilak Store.`,
    openGraph: {
      title: `Order placed - ${product.title}`,
      description: `Price: ₹${product.price.toLocaleString()} | Level: ${product.level} | Rank: ${product.rank} | Skins: ${product.skins}. Click to view on Thilak Store.`,
      images: [
        {
          url: product.image,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProductPreviewPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="preview-container">
        <div className="preview-card" style={{ textAlign: "center" }}>
          <h1 className="preview-title">Product Not Found</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
            The account you are looking for does not exist or has been sold.
          </p>
          <Link href="/#store" className="btn-outline-dark">
            Back to Store
          </Link>
        </div>
      </main>
    );
  }

  const waMsg = `Order placed - ${product.title}\nPrice: ₹${product.price.toLocaleString()}\nLevel: ${product.level}\nRank: ${product.rank}\nSkins: ${product.skins}\n\nvia thilak.store`;

  return (
    <main className="preview-container">
      <div className="preview-card">
        <img
          src={product.image}
          alt={product.title}
          className="preview-hero-img"
        />

        <div>
          <h1 className="preview-title">{product.title}</h1>
          <div className="preview-price">₹{product.price.toLocaleString()}</div>
        </div>

        <div className="preview-specs-list">
          <div className="preview-spec-item">
            <span className="preview-spec-label">Level</span>
            <span className="preview-spec-val">{product.level}</span>
          </div>
          <div className="preview-spec-item">
            <span className="preview-spec-label">Rank</span>
            <span className="preview-spec-val">{product.rank}</span>
          </div>
          <div className="preview-spec-item" style={{ gridColumn: "span 2" }}>
            <span className="preview-spec-label">Skins & Details</span>
            <span className="preview-spec-val">{product.skins}</span>
          </div>
        </div>

        <div className="preview-btns">
          <a
            href={getWhatsAppLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-main"
            style={{
              width: "100%",
              gap: "10px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MessageCircle style={{ width: "18px", height: "18px" }} />
            Buy on WhatsApp Channel
          </a>
          <Link href="/#store" className="btn-outline-dark" style={{ width: "100%", textAlign: "center" }}>
            Back to Store
          </Link>
        </div>
      </div>
    </main>
  );
}
