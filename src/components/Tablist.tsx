import { Icon } from '@iconify/react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import Link from './Link';
import { ExperienceType } from '../types';

type Props = { experiences: ExperienceType[] };

const technologyPatterns: Array<[string, RegExp]> = [
  ['Playwright', /playwright/i],
  ['C#', /c#/i],
  ['Python', /python|pytest/i],
  ['RAG', /rag|langchain/i],
  ['LLMs', /llm|vllm|unsloth|trl/i],
  ['AWS', /aws|lambda/i],
  ['Knowledge graphs', /knowledge.graph|indra/i],
  ['FAISS', /faiss/i],
  ['Unity', /unity|arcore/i],
  ['APIs', /api|odata|rest/i],
];

const technologies = (experience: ExperienceType) =>
  technologyPatterns
    .filter(([, pattern]) =>
      experience.tasks.some((task) => pattern.test(task))
    )
    .map(([name]) => name)
    .slice(0, 4);

const dateLabel = (experience: ExperienceType) =>
  `${experience.started} — ${experience.upto}`;

const ExperienceTab = ({
  experience,
  index,
  active,
  onClick,
}: {
  experience: ExperienceType;
  index: number;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    aria-controls="experience-panel"
    id={`experience-tab-${index}`}
    onClick={onClick}
    className={`group relative flex min-h-[5.5rem] items-center gap-3 rounded-md border p-3 text-left transition-all ${
      active
        ? 'border-accent bg-accent-light text-dark-2 shadow-sm'
        : 'border-dark-3/60 bg-bg-secondary text-text hover:border-accent/50 hover:bg-accent-light/40 hover:text-dark-2'
    }`}
  >
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-colors ${
        active
          ? 'border-accent bg-accent text-bg'
          : 'border-dark-3/70 bg-bg-secondary text-text group-hover:border-accent group-hover:text-accent'
      }`}
    >
      {String(index + 1).padStart(2, '0')}
    </span>
    <span className="min-w-0">
      <span className="block text-xs font-medium leading-snug">
        {experience.company}
      </span>
      <span className="mt-1 block text-[11px] leading-snug text-text">
        {experience.role}
      </span>
      <span className="mt-1 block font-mono text-[10px] text-text">
        {String(experience.started).slice(-4)}—
        {String(experience.upto).slice(-4)}
      </span>
    </span>
  </button>
);

const Tablist = ({ experiences }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const selected = experiences[selectedIndex];
  const tags = technologies(selected);

  return (
    <section aria-label="Professional experience" className="relative">
      <div className="mb-5 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Career signal / {String(selectedIndex + 1).padStart(2, '0')}—
            {String(experiences.length).padStart(2, '0')}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text">
            A record of systems built, problems untangled, and measurable
            outcomes.
          </p>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-text sm:block">
          Signal directory
        </span>
      </div>

      <div className="relative rounded-lg border border-dark-3/70 bg-bg-secondary shadow-sm">
        <div
          className="relative grid gap-2 border-b border-dark-3/60 p-3 sm:grid-cols-2 sm:p-4"
          role="tablist"
          aria-label="Experience timeline"
        >
          {experiences.map((experience, index) => (
            <ExperienceTab
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
              active={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <div className="relative p-5 sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={`${selected.company}-${selected.role}`}
              id="experience-panel"
              role="tabpanel"
              aria-labelledby={`experience-tab-${selectedIndex}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] text-accent">
                  <span>{dateLabel(selected)}</span>
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span>
                    experience {String(selectedIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-dark-2 sm:text-2xl">
                  {selected.role}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-base text-text">
                  <Icon
                    icon="lucide:building-2"
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                  {selected.companyUrl ? (
                    <Link
                      href={selected.companyUrl}
                      target="_blank"
                      className="text-accent"
                    >
                      {selected.company}
                    </Link>
                  ) : (
                    <span>{selected.company}</span>
                  )}
                </div>

                {tags.length > 0 && (
                  <div
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-dark-3/70 px-2.5 py-1 font-mono text-[10px] text-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-7 space-y-3">
                  {selected.tasks.map((task, index) => (
                    <motion.li
                      key={`${selected.company}-${index}`}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, x: -8 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : 0.08 + index * 0.05,
                      }}
                      className="flex gap-3 text-sm leading-relaxed text-text sm:text-[15px]"
                    >
                      <Icon
                        icon="lucide:arrow-up-right"
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{task}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Tablist;
