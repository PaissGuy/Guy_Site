import { clsx } from 'clsx'

export function GradientBackground({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'relative mx-2 bg-gradient-to-br from-sage-100 via-sage-50 to-forest-50 shadow-2xl ring-1 ring-black/5 lg:mx-0 lg:rounded-4xl',
        className,
      )}
      {...props}
    />
  )
}

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'bg-gradient-to-br from-sage-100 via-sage-50 to-forest-50',
        className,
      )}
      {...props}
    />
  )
}