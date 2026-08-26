import { useEffect } from "react";

export default function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title ? `${title} — Chasa Design` : "Chasa Design — Architecture, Design & Delivery";
  }, [title]);

  return null;
}
