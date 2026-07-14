import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dark-800 bg-dark-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="text-brand-400">byte</span>
              <span className="text-dark-400">by</span>
              <span className="text-brand-400">byte</span>
            </Link>
            <p className="mt-3 text-sm text-dark-400">
              Bridging the digital &amp; AI divide, one byte at a time.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-dark-200">
              Partner With Us
            </h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>
                <Link href="/volunteers" className="transition-colors hover:text-white">
                  Volunteers
                </Link>
              </li>
              <li>
                <Link href="/ngos" className="transition-colors hover:text-white">
                  NGOs
                </Link>
              </li>
              <li>
                <Link href="/csr" className="transition-colors hover:text-white">
                  CSR &amp; Corporate
                </Link>
              </li>
              <li>
                <Link href="/schools" className="transition-colors hover:text-white">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/start-chapter" className="transition-colors hover:text-white">
                  Start a Chapter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-dark-200">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>
                <a
                  href="mailto:bytebybyteinitiative@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  bytebybyteinitiative@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://bbb-initiative.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  bbb-initiative.netlify.app
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/bytebybyte-initaitve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-800 pt-6 text-center text-xs text-dark-500">
          &copy; {new Date().getFullYear()} ByteByByte Initiative. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
