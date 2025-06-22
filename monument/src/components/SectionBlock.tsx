import Link from 'next/link';

interface SectionBlockProps {
  /** Each string becomes its own `<h1>` row */
  titles: string[];
  /** Paragraphs rendered in order */
  paragraphs: string[];
  /**
   * Optional link button.
   * Omit `linkHref` to hide the button.
   */
  linkHref?: string;
  linkLabel?: string;
}

/**
 * Two-column block: left side → stacked titles + optional button,
 * right side → rich article text.
 */
export default function SectionBlock({
  titles,
  paragraphs,
  linkHref,
  linkLabel = 'svenska',
}: SectionBlockProps) {
  return (
    <section className='flex flex-row gap-6 justify-end mt-4 mb-4'>
      {/* ---------- LEFT COLUMN ---------- */}
      <div className='flex flex-col gap-3 shrink-0'>
        <span className='ml-2 -mt-2 flex flex-col '>
          {titles.map((t) => (
            <h1 key={t} className='text-[1.6rem] leading-9 mr-0 ml-auto'>
              {t}
            </h1>
          ))}
        </span>

        {linkHref && (
          <Link
            href={linkHref}
            className='mt-4 w-32 rounded-3xl border-2 border-[#FECE07] px-3 py-1 text-center text-gray-900 backdrop-blur transition-colors
                       hover:bg-black hover:text-white hover:border-black'
          >
            {linkLabel}
          </Link>
        )}
      </div>

      {/* ---------- RIGHT COLUMN ---------- */}
      <article className='flex w-[65%] flex-col gap-5 text-[0.95rem] font-light leading-5'>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </section>
  );
}
