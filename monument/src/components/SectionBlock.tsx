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
    <section className='flex sm:flex-row sm:gap-6 sm:justify-end flex-col align-middle mt-4 mb-4'>
      {/* ---------- LEFT COLUMN ---------- */}
      <div className='flex flex-col gap-3 shrink-0 '>
        <span className='sm:ml-2 sm:mt-0 mt-1 flex flex-col  '>
          {titles.map((t) => (
            <h1
              key={t}
              className='hidden sm:block sm:font-medium text-[1.6rem] leading-9 mr-0 ml-auto'
            >
              {t}
            </h1>
          ))}
          <h1 className='sm:hidden text-[1rem] leading-9 mr-auto ml-auto'>
            {titles[0]}&nbsp;{titles[1]}
          </h1>
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
      <article className='flex sm:w-[65%] w-[100%] flex-col gap-5 sm:px-0 px-10 text-[0.9rem] font-light leading-5'>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </section>
  );
}
