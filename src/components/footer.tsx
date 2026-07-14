import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/logo.jpg"
              alt="ByteByByte logo"
              width={140}
              height={32}
              className="h-7 w-auto rounded"
            />
            <p className="mt-3 text-sm text-ink-400">
              Bridging the digital &amp; AI divide, one byte at a time.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-ink-200">
              Partner With Us
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>
                <Link href="/volunteers" className="transition-colors hover:text-spark-500">
                  Volunteers
                </Link>
              </li>
              <li>
                <Link href="/ngos" className="transition-colors hover:text-spark-500">
                  NGOs
                </Link>
              </li>
              <li>
                <Link href="/csr" className="transition-colors hover:text-spark-500">
                  CSR &amp; Corporate
                </Link>
              </li>
              <li>
                <Link href="/schools" className="transition-colors hover:text-spark-500">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/start-chapter" className="transition-colors hover:text-spark-500">
                  Start a Chapter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-ink-200">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>
                <a
                  href="mailto:bytebybyteinitiative@gmail.com"
                  className="transition-colors hover:text-spark-500"
                >
                  bytebybyteinitiative@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://bbb-inititiative.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-spark-500"
                >
                  bbb-inititiative.netlify.app
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/bytebybyte-initaitve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-spark-500"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-700 pt-6 text-center text-xs text-ink-500">
          &copy; {new Date().getFullYear()} ByteByByte Initiative. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}