import * as React from "react"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      backgroundColor: 'var(--card-bg)',
      borderRadius: '1.5rem',
      border: '1px solid var(--card-border)',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      color: 'var(--foreground)',
      ...style,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      e.currentTarget.style.borderColor = 'var(--secondary)'
      props.onMouseEnter?.(e)
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.borderColor = 'var(--card-border)'
      props.onMouseLeave?.(e)
    }}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
      ...style,
    }}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, style, ...props }, ref) => (
  <h3
    ref={ref}
    className={className}
    style={{
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.25',
      letterSpacing: '-0.025em',
      ...style,
    }}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, style, ...props }, ref) => (
  <p
    ref={ref}
    className={className}
    style={{
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.7)',
      ...style,
    }}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      paddingTop: '1.5rem',
      ...style,
    }}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      display: 'flex',
      alignItems: 'center',
      paddingTop: '1.5rem',
      ...style,
    }}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
