import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';
import themeContext, {
  accentPalettes,
  AccentPalette,
} from '../context/theme-context';

const paletteDetails: Record<AccentPalette, { label: string; color: string }> =
  {
    sky: { label: 'Sky', color: '#0ea5e9' },
    violet: { label: 'Violet', color: '#8b5cf6' },
    emerald: { label: 'Emerald', color: '#10b981' },
    rose: { label: 'Rose', color: '#f43f5e' },
  };

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ColorPalettePicker = ({ className, onClick, ...rest }: Props) => {
  const { accent, setAccent } = useContext(themeContext);
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className || ''}`}>
      <button
        type="button"
        aria-label="Choose color palette"
        aria-expanded={open}
        aria-controls="color-palette-menu"
        onClick={(event) => {
          onClick?.(event);
          setOpen((current) => !current);
        }}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-text transition-colors hover:bg-bg-secondary hover:text-accent focus:bg-bg-secondary focus:text-accent focus:outline-none"
        {...rest}
      >
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current"
          aria-hidden="true"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="color-palette-menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute right-0 top-full z-50 mt-2 w-52 rounded-lg border border-dark-3/70 bg-bg-secondary p-2 shadow-xl"
          >
            <p className="px-2 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text">
              Accent palette
            </p>
            <div className="space-y-1" role="menu" aria-label="Accent palettes">
              {accentPalettes.map((palette) => {
                const details = paletteDetails[palette];
                const selected = accent === palette;

                return (
                  <button
                    key={palette}
                    type="button"
                    role="menuitemradio"
                    aria-checked={selected}
                    onClick={() => {
                      setAccent(palette);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors ${
                      selected
                        ? 'bg-accent-light text-dark-2'
                        : 'text-text hover:bg-accent-light hover:text-dark-2'
                    }`}
                  >
                    <span
                      className="h-4 w-4 shrink-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/15"
                      style={{ backgroundColor: details.color }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium">
                        {details.label}
                      </span>
                    </span>
                    {selected && (
                      <Icon
                        icon="lucide:check"
                        className="h-3.5 w-3.5 text-accent"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPalettePicker;
