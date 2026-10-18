import { Icon } from '@iconify/react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
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

const shortMonth = (date: Date | string) => {
  const parsed = new Date(date);
  return Number.isNaN(parsed.valueOf())
    ? String(date)
    : parsed.toLocaleDateString('en-US', { month: 'short' });
};

const year = (date: Date | string) => String(date).slice(-4);

const detailDateLabel = (experience: ExperienceType) => {
  const startYear = year(experience.started);
  const endYear = year(experience.upto);

  if (String(experience.upto).toLowerCase() === 'present') {
    return `${shortMonth(experience.started)} ${startYear} — Present`;
  }

  return startYear === endYear
    ? `${shortMonth(experience.started)} — ${shortMonth(
      experience.upto
    )} ${endYear}`
    : `${shortMonth(experience.started)} ${startYear} — ${shortMonth(
      experience.upto
    )} ${endYear}`;
};

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
    className={`group relative w-full border px-3 py-2.5 text-left transition-colors focus:outline-none focus-visible:border-accent sm:px-4 ${active
      ? 'border-transparent bg-accent-light text-dark-2'
      : 'border-dark-3/70 text-text hover:border-accent/60 hover:bg-accent-light/40 hover:text-dark-2'
      }`}
  >
    {active && (
      <>
        <motion.span
          layoutId="active-experience-outline"
          className="pointer-events-none absolute inset-0 border border-accent"
          transition={{ type: 'spring', stiffness: 520, damping: 38 }}
        />
        <motion.span
          layoutId="active-experience-dashed-outline"
          className="pointer-events-none absolute -inset-1 border border-dashed border-accent/70"
          transition={{ type: 'spring', stiffness: 520, damping: 38 }}
        />
      </>
    )}
    <span className="absolute left-3 top-2.5 font-mono text-[10px] text-accent sm:left-4">
      {String(index + 1).padStart(2, '0')}
    </span>
    {active && (
      <Icon
        icon="lucide:arrow-up-right"
        className="absolute right-3 top-3 h-3.5 w-3.5 text-accent sm:right-4"
        aria-hidden="true"
      />
    )}
    <span className="block pl-6 pr-5">
      <span className="block text-sm font-medium leading-tight text-dark-2">
        {experience.company}
      </span>
      <span className="mt-1 block text-[11px] leading-tight text-text">
        {experience.role}
      </span>
      <span className="mt-1.5 block font-mono text-[10px] text-text">
        {year(experience.started)}
      </span>
    </span>
  </button>
);

const panelVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 38 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -38 }),
};

const Tablist = ({ experiences }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const orderedExperiences = useMemo(
    () =>
      [...experiences].sort(
        (first, second) =>
          new Date(second.started).valueOf() - new Date(first.started).valueOf()
      ),
    [experiences]
  );
  const selected = orderedExperiences[selectedIndex];
  const tags = technologies(selected);

  const selectExperience = (index: number) => {
    if (index === selectedIndex) return;
    setDirection(index > selectedIndex ? 1 : -1);
    setSelectedIndex(index);
  };

  const moveSelection = (offset: number) =>
    selectExperience(
      (selectedIndex + offset + orderedExperiences.length) %
      orderedExperiences.length
    );

  return (
    <section aria-label="Professional experience">
      <div className="mb-5 flex items-end justify-between gap-6">
        <div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text">
            A record of meaningful work.
          </p>
        </div>
      </div>

      <div className="grid overflow-hidden rounded-md border border-dark-3/70 bg-bg-secondary shadow-sm lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]">
        <div
          className="grid content-start gap-1.5 border-b border-dark-3/70 bg-bg/40 p-2.5 sm:p-3 lg:border-b-0 lg:border-r"
          role="tablist"
          aria-label="Experience directory"
        >
          {orderedExperiences.map((experience, index) => (
            <ExperienceTab
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
              active={index === selectedIndex}
              onClick={() => selectExperience(index)}
            />
          ))}
        </div>

        <div className="flex min-h-[34rem] flex-col p-5 sm:p-7 lg:p-8">
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.article
                key={`${selected.company}-${selected.role}`}
                id="experience-panel"
                role="tabpanel"
                aria-labelledby={`experience-tab-${selectedIndex}`}
                custom={direction}
                variants={panelVariants}
                initial={shouldReduceMotion ? false : 'enter'}
                animate="center"
                exit={shouldReduceMotion ? undefined : 'exit'}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-sm text-accent">
                  {detailDateLabel(selected)}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight text-dark-2 sm:text-3xl">
                  {selected.role}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-base text-text">
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

                <ul className="mt-7 space-y-3 border-t border-dark-3/60 pt-6">
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

                {tags.length > 0 && (
                  <div className="mt-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text">
                      Tech stack
                    </p>
                    <div
                      className="mt-3 flex flex-wrap gap-2"
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
                  </div>
                )}
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-end border-t border-dark-3/60 pt-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => moveSelection(-1)}
                aria-label="Previous experience"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-3/70 text-text transition-colors hover:border-accent hover:text-accent"
              >
                <Icon
                  icon="lucide:arrow-left"
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={() => moveSelection(1)}
                aria-label="Next experience"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-3/70 text-text transition-colors hover:border-accent hover:text-accent"
              >
                <Icon
                  icon="lucide:arrow-right"
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tablist;
