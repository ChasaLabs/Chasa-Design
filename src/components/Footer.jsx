import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isLabsPage = pathname === "/labs" || pathname === "/chasa-labs";

  return (
    <footer
      className={
        isLabsPage
          ? "border-t border-slate-900/10 bg-[#edf3f5]"
          : "border-t border-neutral-200"
      }
    >
      <Container className="py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className={isLabsPage ? "text-sm text-slate-600" : "text-sm text-neutral-500"}>
            {"\u00A9"} {year} Chasa Design. All rights reserved.
          </p>
          <p className={isLabsPage ? "text-sm text-slate-600" : "text-sm text-neutral-500"}>
            Powered by{" "}
            <Link
              to="/labs"
              className={
                isLabsPage
                  ? "text-sky-700 transition hover:text-sky-900"
                  : "text-neutral-900 transition hover:text-cyan-700"
              }
            >
              Chasa Labs
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}