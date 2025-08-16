import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

interface Card {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
  github?: string;
}

interface ExpandableCardProps {
  cards: Card[];
}

export function ExpandableCard({ cards }: ExpandableCardProps) {
  const [active, setActive] = useState<Card | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1000
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div 
            className="fixed inset-0 grid place-items-center z-[100]"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'grid',
              placeItems: 'center',
              zIndex: 1100,
              padding: '1rem'
            }}
          >
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1200
              }}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '500px',
                maxHeight: '90%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1a1a2e',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #5f5fff33'
              }}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                    backgroundColor: '#0f172a'
                  }}
                />
              </motion.div>

              <div style={{ padding: '1rem', color: 'white' }}>
                <div className="flex justify-between items-start p-4" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                      style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                      style={{ color: '#cbd5e1', fontSize: '0.9rem' }}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        backgroundColor: '#00ffff',
                        color: '#1a1a2e',
                        textDecoration: 'none',
                        textAlign: 'center'
                      }}
                    >
                      {active.ctaText}
                    </motion.a>
                    {active.github && (
                      <motion.a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.5rem 1rem',
                          fontSize: '0.8rem',
                          borderRadius: '25px',
                          fontWeight: 'bold',
                          backgroundColor: '#5f5fff',
                          color: 'white',
                          textDecoration: 'none',
                          textAlign: 'center'
                        }}
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="pt-4 relative px-4" style={{ padding: '0 1rem 1rem 1rem' }}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                    style={{
                      color: '#cbd5e1',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      maxHeight: '200px',
                      overflowY: 'auto',
                      paddingBottom: '1rem'
                    }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul 
        className="max-w-2xl mx-auto w-full gap-4"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          listStyle: 'none',
          padding: 0
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(20px)'
            }}
            whileHover={{
              backgroundColor: 'rgba(95, 95, 255, 0.1)',
              borderColor: '#5f5fff33',
              y: -5
            }}
          >
            <div 
              className="flex gap-4 flex-col md:flex-row"
              style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  style={{
                    height: '56px',
                    width: '56px',
                    borderRadius: '8px',
                    objectFit: 'contain',
                    backgroundColor: '#0f172a'
                  }}
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  style={{
                    fontWeight: '600',
                    color: 'white',
                    textAlign: 'left',
                    marginBottom: '0.25rem'
                  }}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  style={{
                    color: '#cbd5e1',
                    textAlign: 'left',
                    fontSize: '0.85rem'
                  }}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.8rem',
                borderRadius: '25px',
                fontWeight: 'bold',
                backgroundColor: '#00ffff',
                color: '#1a1a2e',
                border: 'none',
                cursor: 'pointer',
                marginTop: 0
              }}
              whileHover={{
                backgroundColor: '#5f5fff',
                color: 'white'
              }}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
