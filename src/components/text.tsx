import { clsx } from 'clsx'

export function Heading({
  as: Element = 'h1',
  className,
  ...props
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  className?: string
} & React.ComponentPropsWithoutRef<'h1'>) {
  return (
    <Element
      className={clsx(
        'text-pretty text-4xl font-medium tracking-tight text-gray-950 data-heading:font-bold data-heading:text-6xl/[0.9] sm:text-6xl/[0.9] sm:data-heading:text-8xl/[0.9] md:data-heading:text-8xl/[0.9]',
        className,
      )}
      {...props}
    />
  )
}

export function Subheading({
  as: Element = 'h2',
  className = 'text-gray-400 uppercase font-mono text-sm tracking-widest font-thin',
  ...props
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  className?: string
} & React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <Element
      className={clsx(
        'text-base/6 font-semibold text-gray-950',
        className,
      )}
      {...props}
    />
  )
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(
        'text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8',
        className,
      )}
      {...props}
    />
  )
}